import requests
import json
import sqlite3
import logging
import os
from datetime import datetime, timedelta
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

# Define paths relative to the project root
ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DB_PATH = os.path.join(ROOT_DIR, "gdelt_cache.db")
OUTPUT_DIR = os.path.join(ROOT_DIR, "public", "data")

# Create output directory if it doesn't exist
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Initialize logging
logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(message)s")

# Initialize SQLite database
def init_db():
    conn = sqlite3.connect(DB_PATH)
    cur = conn.cursor()
    cur.execute("""
        CREATE TABLE IF NOT EXISTS seen_articles (
            url TEXT PRIMARY KEY,
            title TEXT,
            seendate TEXT
        )
    """)
    conn.commit()
    conn.close()

def is_article_seen(url):
    conn = sqlite3.connect(DB_PATH)
    cur = conn.cursor()
    cur.execute("SELECT 1 FROM seen_articles WHERE url = ?", (url,))
    result = cur.fetchone()
    conn.close()
    return result is not None

def mark_article_as_seen(url, title, seendate):
    conn = sqlite3.connect(DB_PATH)
    cur = conn.cursor()
    cur.execute("""
        INSERT OR IGNORE INTO seen_articles (url, title, seendate)
        VALUES (?, ?, ?)
    """, (url, title, seendate))
    conn.commit()
    conn.close()

def fetch_recent_walgreens_crime_from_gdelt():
    url = "https://api.gdeltproject.org/api/v2/doc/doc"

    # Past 2 days
    end_datetime = datetime.utcnow()
    start_datetime = end_datetime - timedelta(days=2)

    params = {
        "query": "walgreens crime",
        "mode": "artlist",
        "format": "json",
        "maxrecords": "50",
        "startdatetime": start_datetime.strftime("%Y%m%d%H%M%S"),
        "enddatetime": end_datetime.strftime("%Y%m%d%H%M%S")
    }

    headers = {
        "User-Agent": "Mozilla/5.0 (compatible; WalgreensCrimeBot/1.0; +https://walgreens-cem.com)"
    }

    # Retry on 429/500 errors
    session = requests.Session()
    retries = Retry(
        total=5,
        backoff_factor=2,
        status_forcelist=[429, 500, 502, 503, 504],
        allowed_methods=["GET"],
        raise_on_status=False
    )
    session.mount("https://", HTTPAdapter(max_retries=retries))

    try:
        response = session.get(url, params=params, headers=headers, timeout=10)
        response.raise_for_status()
        articles = response.json().get("articles", [])
    except Exception as e:
        logging.error(f"Error fetching data: {e}")
        return []

    new_articles = []

    for a in articles:
        article_url = a.get("url")
        article_title = a.get("title")
        article_seendate = a.get("seendate")

        if article_url and not is_article_seen(article_url):
            new_articles.append({
                "title": article_title,
                "url": article_url,
                "source": a.get("source"),
                "published_date": article_seendate,
                "language": a.get("language"),
                "domain": a.get("domain"),
                "country": a.get("country"),
                "socialshares": a.get("socialshares", 0)
            })
            mark_article_as_seen(article_url, article_title, article_seendate)

    if new_articles:
        # Save to timestamped file
        timestamp = datetime.utcnow().strftime("%Y%m%d_%H%M%S")
        filename = os.path.join(OUTPUT_DIR, f"gdelt_walgreens_crime_2days_{timestamp}.json")
        with open(filename, "w", encoding="utf-8") as f:
            json.dump(new_articles, f, indent=2)
        
        # Also save to a fixed filename for the API to use
        latest_file = os.path.join(OUTPUT_DIR, "gdelt_walgreens_latest.json")
        with open(latest_file, "w", encoding="utf-8") as f:
            json.dump(new_articles, f, indent=2)
            
        logging.info(f"Saved {len(new_articles)} new articles to {filename} and {latest_file}")
        return new_articles
    else:
        logging.info("No new articles found.")
        return []

if __name__ == "__main__":
    init_db()
    fetch_recent_walgreens_crime_from_gdelt()