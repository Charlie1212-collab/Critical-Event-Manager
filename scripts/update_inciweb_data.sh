#!/bin/bash

# Script to fetch the latest InciWeb wildfire incident data
# Can be scheduled via cron to run periodically

# Navigate to the project root directory
cd "$(dirname "$0")/.."

# Run the Python script to fetch and process InciWeb data
python scripts/fetch_inciweb_incidents.py

echo "InciWeb wildfire data update completed at $(date)"