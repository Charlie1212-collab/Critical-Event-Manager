import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

type WildfireIncident = {
    title: string
    link: string
    description: string
    published: string
    creator: string
    guid: string
    coordinates?: [number, number] // Latitude, Longitude
    state?: string
    location?: string
}

// Function to extract coordinates from the incident description
function extractCoordinates(description: string): [number, number] | null {
    // Regular expression to match latitude and longitude in the format commonly found in InciWeb descriptions
    const coordRegex = /Latitude:\s*(\d+)°\s*(\d+)\s*(\d+).*?Longitude:\s*-?(\d+)°\s*(\d+)\s*(\d+)/;
    const match = description.match(coordRegex);

    if (match) {
        // Extract degrees, minutes, seconds components
        const latDeg = parseInt(match[1]);
        const latMin = parseInt(match[2]);
        const latSec = parseInt(match[3]);
        const lngDeg = parseInt(match[4]);
        const lngMin = parseInt(match[5]);
        const lngSec = parseInt(match[6]);

        // Calculate decimal degrees
        const latDecimal = latDeg + (latMin / 60) + (latSec / 3600);
        const lngDecimal = -1 * (lngDeg + (lngMin / 60) + (lngSec / 3600)); // Negative for western hemisphere

        return [latDecimal, lngDecimal];
    }

    return null;
}

// Function to extract state information from the description
function extractState(description: string): string | null {
    const stateRegex = /State:\s*([A-Za-z\s]+)/;
    const match = description.match(stateRegex);

    return match ? match[1].trim() : null;
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<WildfireIncident[] | { error: string }>
) {
    try {
        // Path to the latest InciWeb data
        const dataPath = path.join(process.cwd(), 'public', 'data', 'inciweb_latest.json')

        // Check if the file exists
        if (fs.existsSync(dataPath)) {
            const jsonData = fs.readFileSync(dataPath, 'utf8')
            const incidents = JSON.parse(jsonData)

            // Enrich the incidents with coordinates and state information
            const enhancedIncidents = incidents.map((incident: WildfireIncident) => {
                const coordinates = extractCoordinates(incident.description);
                const state = extractState(incident.description);

                return {
                    ...incident,
                    coordinates: coordinates || undefined,
                    state: state || undefined,
                    location: state ? `${state}` : undefined
                };
            });

            res.status(200).json(enhancedIncidents)
        } else {
            res.status(404).json({ error: 'No wildfire incident data available' })
        }
    } catch (error) {
        console.error('Error fetching wildfire incident data:', error)
        res.status(500).json({ error: 'Failed to fetch wildfire incident data' })
    }
}