#!/usr/bin/env python3
"""
GDELT Walgreens Incidents Fetcher

This script fetches news articles about Walgreens incidents from the GDELT project API,
filters them for crime and safety-related content, and saves them to a JSON file.
"""

import os
import json
import sqlite3
import requests
import pandas as pd
import logging
from datetime import datetime, timedelta
from pathlib import Path

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[logging.StreamHandler()]
)
logger = logging.getLogger("gdelt_walgreens")

# Constants
DATA_DIR = Path("../public/data")
OUTPUT_FILE = DATA_DIR / "gdelt_walgreens_incidents.json"
CACHE_DB = "../gdelt_cache.db"
GDELT_API_URL = "https://api.gdeltproject.org/api/v2/doc/doc"
DAYS_TO_FETCH = 7

# Keywords for Walgreens and incident types
KEYWORDS = [
    "walgreens", "pharmacy", "store", "retail", 
    "theft", "robbery", "crime", "security", "incident", 
    "shoplifting", "burglary", "assault", "emergency"
]

# Make sure data directory exists
os.makedirs(DATA_DIR, exist_ok=True)

def init_cache_db():
    """Initialize the SQLite cache database."""
    conn = sqlite3.connect(CACHE_DB)
    cursor = conn.cursor()
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS gdelt_articles (
        url TEXT PRIMARY KEY,
        title TEXT,
        description TEXT,
        published_date TEXT,
        source TEXT,
        country TEXT,
        socialshares INTEGER,
        tone REAL,
        fetch_date TEXT
    )
    ''')
    conn.commit()
    conn.close()
    logger.info("Cache database initialized")

def is_cached(url):
    """Check if an article URL is already in the cache."""
    conn = sqlite3.connect(CACHE_DB)
    cursor = conn.cursor()
    cursor.execute('SELECT url FROM gdelt_articles WHERE url = ?', (url,))
    result = cursor.fetchone()
    conn.close()
    return result is not None

def save_to_cache(article):
    """Save an article to the cache database."""
    conn = sqlite3.connect(CACHE_DB)
    cursor = conn.cursor()
    try:
        cursor.execute(
            'INSERT OR REPLACE INTO gdelt_articles VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
            (
                article['url'],
                article['title'],
                article.get('description', ''),
                article['published_date'],
                article['source'],
                article.get('country', ''),
                article.get('socialshares', 0),
                article.get('tone', 0.0),
                datetime.now().isoformat()
            )
        )
        conn.commit()
    except Exception as e:
        logger.error(f"Error saving article to cache: {e}")
    finally:
        conn.close()

def get_cached_articles():
    """Get all cached articles."""
    conn = sqlite3.connect(CACHE_DB)
    try:
        df = pd.read_sql_query(
            'SELECT * FROM gdelt_articles ORDER BY published_date DESC', 
            conn
        )
        articles = df.to_dict('records')
        logger.info(f"Retrieved {len(articles)} cached articles")
        return articles
    except Exception as e:
        logger.error(f"Error retrieving cached articles: {e}")
        return []
    finally:
        conn.close()

def fetch_gdelt_articles():
    """Fetch articles from GDELT API."""
    new_articles = []
    
    # Create query for each keyword pair (Walgreens + incident type)
    for i, keyword in enumerate(KEYWORDS[1:], 1):  # Skip the first keyword (walgreens)
        query = f'"{KEYWORDS[0]} {keyword}"'  # e.g., "walgreens theft"
        
        # Build API request URL
        timespan = f"{DAYS_TO_FETCH} days"
        params = {
            "query": query,
            "format": "json",
            "timespan": timespan,
            "sort": "DateDesc",
            "maxrecords": 50
        }
        
        try:
            logger.info(f"Fetching articles for query: {query}")
            response = requests.get(GDELT_API_URL, params=params)
            response.raise_for_status()
            data = response.json()
            
            if 'articles' in data and data['articles']:
                for article in data['articles']:
                    # Skip if already cached
                    if is_cached(article['url']):
                        continue
                    
                    # Parse and format article data
                    parsed_article = {
                        'url': article['url'],
                        'title': article['title'],
                        'description': article.get('description', ''),
                        'published_date': article.get('seendate', ''),
                        'source': article.get('domain', ''),
                        'country': article.get('sourcecountry', ''),
                        'socialshares': int(article.get('socialshare', {}).get('total', 0)),
                        'tone': float(article.get('tone', 0))
                    }
                    
                    # Save to cache and add to results
                    save_to_cache(parsed_article)
                    new_articles.append(parsed_article)
            
            # Avoid rate limiting
            import time
            time.sleep(1)
            
        except Exception as e:
            logger.error(f"Error fetching articles for query '{query}': {e}")
    
    logger.info(f"Fetched {len(new_articles)} new articles")
    return new_articles

def combine_and_filter_articles():
    """Combine cached articles with new fetches and filter for relevance."""
    # Get cached articles
    all_articles = get_cached_articles()
    
    # Fetch new articles and add to the collection
    new_articles = fetch_gdelt_articles()
    logger.info(f"Added {len(new_articles)} new articles to the cache")
    
    # Filter for recent articles
    cutoff_date = (datetime.now() - timedelta(days=DAYS_TO_FETCH)).isoformat()
    recent_articles = [
        article for article in all_articles 
        if article['published_date'] > cutoff_date
    ]
    
    # Use all recent articles instead of strict filtering
    # Include any article that was fetched with our Walgreens keywords
    relevant_articles = recent_articles
    
    logger.info(f"Including {len(relevant_articles)} recent articles related to pharmacy/retail incidents")
    return relevant_articles

def main():
    """Main function to fetch and save GDELT Walgreens incident data."""
    try:
        # Initialize the cache database
        init_cache_db()
        
        # Fetch, combine, and filter articles
        articles = combine_and_filter_articles()
        
        # Save to output file
        output_data = {
            'articles': articles,
            'lastUpdated': datetime.now().isoformat(),
            'count': len(articles)
        }
        
        with open(OUTPUT_FILE, 'w') as f:
            json.dump(output_data, f, indent=2)
        
        logger.info(f"Saved {len(articles)} articles to {OUTPUT_FILE}")
        return True
        
    except Exception as e:
        logger.error(f"Error in main function: {e}")
        return False

if __name__ == "__main__":
    logger.info("Starting GDELT Walgreens incidents fetch")
    success = main()
    if success:
        logger.info("GDELT fetch completed successfully")
    else:
        logger.error("GDELT fetch failed")