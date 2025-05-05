import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

type CitizenIncident = {
  title: string;
  address: string;
  latitude: number | string;
  longitude: number | string;
  timestamp_utc: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CitizenIncident[]>
) {
  try {
    // Path to the JSON file containing citizen incidents
    const filePath = path.join(process.cwd(), 'scripts', 'walgreens_incidents.json');

    // Read and parse the file
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const data: CitizenIncident[] = JSON.parse(fileContent);

    // Filter out incidents without coordinates or timestamps if needed
    const validIncidents = data.filter(
      incident => incident.latitude && incident.longitude
    );

    // Return the incidents
    res.status(200).json(validIncidents);
  } catch (error) {
    console.error('Error loading citizen incidents:', error);
    res.status(500).json([]);
  }
}