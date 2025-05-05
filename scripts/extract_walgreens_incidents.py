import json
import base64
from datetime import datetime
import os

# Get the directory of the current script
script_dir = os.path.dirname(os.path.abspath(__file__))

# Load HAR file (using the correct filename and path)
har_file_path = os.path.join(script_dir, "citizen.com.har.json")
with open(har_file_path, "r", encoding="utf-8") as f:
    har = json.load(f)

entries = har.get("log", {}).get("entries", [])
walgreens_data = []

for entry in entries:
    url = entry.get("request", {}).get("url", "")
    if "incident" not in url:
        continue

    content = entry.get("response", {}).get("content", {})
    if "json" not in content.get("mimeType", ""):
        continue

    try:
        text = content.get("text", "")
        if content.get("encoding") == "base64":
            text = base64.b64decode(text).decode("utf-8")

        data = json.loads(text)

        if isinstance(data, list):
            incidents = data
        elif isinstance(data, dict) and "hits" in data:
            incidents = data["hits"]
        else:
            incidents = [data]

        for incident in incidents:
            title = incident.get("title", "").lower()
            address = incident.get("address", "").lower()
            if "walgreens" in title or "walgreens" in address:
                walgreens_data.append({
                    "title": incident.get("title", ""),
                    "address": incident.get("address", ""),
                    "latitude": incident.get("latitude", ""),
                    "longitude": incident.get("longitude", ""),
                    "timestamp_utc": datetime.utcfromtimestamp(incident.get("cs", 0)/1000).isoformat() if "cs" in incident else ""
                })
    except Exception as e:
        print(f"Error parsing entry: {e}")
        continue

# Save to JSON
output_file_path = os.path.join(script_dir, "walgreens_incidents.json")
with open(output_file_path, "w", encoding="utf-8") as f:
    json.dump(walgreens_data, f, indent=2)

print(f"Saved {len(walgreens_data)} incidents to {output_file_path}")