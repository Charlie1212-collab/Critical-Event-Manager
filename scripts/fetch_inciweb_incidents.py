import requests
import feedparser
import json
import os
from datetime import datetime

def fetch_inciweb_data():
    """
    Fetches wildfire incident data from InciWeb RSS feed
    """
    url = "https://inciweb.wildfire.gov/incidents/rss.xml"
    response = requests.get(url)

    if response.status_code == 200:
        return response.text  # Return raw RSS feed data
    else:
        print(f"Failed to fetch data. HTTP Status Code: {response.status_code}")
        print(f"Response Content: {response.text}")
        return None

def parse_rss_feed(rss_feed):
    """
    Parses the RSS feed and extracts relevant incident information
    """
    feed = feedparser.parse(rss_feed)
    incidents = []

    for entry in feed.entries:
        incident = {
            "title": entry.title,
            "link": entry.link,
            "description": entry.description,
            "published": entry.published,
            "creator": entry.get("dc_creator", "Unknown"),
            "guid": entry.id if hasattr(entry, 'id') else "Unknown"
        }
        incidents.append(incident)

    return incidents

def save_to_json(data, filename):
    """
    Saves the parsed incident data to a JSON file
    """
    with open(filename, 'w') as f:
        json.dump(data, f, indent=4)

if __name__ == "__main__":
    # Create a timestamp for the filename
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    
    # Create the output directory if it doesn't exist
    output_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)), "public", "data")
    os.makedirs(output_dir, exist_ok=True)
    
    # Output filename with timestamp
    output_file = os.path.join(output_dir, f"inciweb_incidents_{timestamp}.json")
    latest_file = os.path.join(output_dir, "inciweb_latest.json")
    
    # Fetch, parse, and save the data
    rss_feed = fetch_inciweb_data()
    
    if rss_feed:
        parsed_data = parse_rss_feed(rss_feed)
        save_to_json(parsed_data, output_file)
        save_to_json(parsed_data, latest_file)  # Also save to a consistent filename for easy access
        print(f"Data saved to {output_file} and {latest_file}")
    else:
        print("Failed to fetch InciWeb data.")