import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';

// Path to the latest GDELT data
const LATEST_DATA_PATH = path.join(process.cwd(), 'public', 'data', 'gdelt_walgreens_latest.json');
// Path to the Python script
const PYTHON_SCRIPT = path.join(process.cwd(), 'scripts', 'fetch_gdelt_walgreens_incidents.py');

type GdeltArticle = {
    title: string;
    url: string;
    source: string;
    published_date: string;
    language: string;
    domain: string;
    country: string;
    socialshares: number;
};

type ResponseData = {
    articles: GdeltArticle[];
    lastUpdated?: string;
    message?: string;
};

type ErrorResponse = {
    error: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData | ErrorResponse>
) {
    try {
        // Check if refresh parameter is passed and is true
        const shouldRefresh = req.query.refresh === 'true';

        if (shouldRefresh) {
            // Run the Python script to fetch new data
            await new Promise<void>((resolve, reject) => {
                // Detect if we're on Windows or Unix
                const pythonCommand = process.platform === 'win32' ? 'python' : 'python3';

                const pythonProcess = spawn(pythonCommand, [PYTHON_SCRIPT]);

                pythonProcess.stderr.on('data', (data) => {
                    console.error(`Python script error: ${data}`);
                });

                pythonProcess.on('close', (code) => {
                    if (code === 0) {
                        resolve();
                    } else {
                        reject(new Error(`Python script exited with code ${code}`));
                    }
                });
            });
        }

        // Read the latest data file
        if (fs.existsSync(LATEST_DATA_PATH)) {
            const fileData = fs.readFileSync(LATEST_DATA_PATH, 'utf8');
            const articles = JSON.parse(fileData);

            // Get the file stats to determine last updated time
            const stats = fs.statSync(LATEST_DATA_PATH);
            const lastUpdated = stats.mtime.toISOString();

            res.status(200).json({
                articles,
                lastUpdated
            });
        } else {
            // If the file doesn't exist, run the fetch script 
            await new Promise<void>((resolve, reject) => {
                const pythonCommand = process.platform === 'win32' ? 'python' : 'python3';
                const pythonProcess = spawn(pythonCommand, [PYTHON_SCRIPT]);

                pythonProcess.stderr.on('data', (data) => {
                    console.error(`Python script error: ${data}`);
                });

                pythonProcess.on('close', (code) => {
                    if (code === 0) {
                        resolve();
                    } else {
                        reject(new Error(`Python script exited with code ${code}`));
                    }
                });
            });

            // Check if file exists now
            if (fs.existsSync(LATEST_DATA_PATH)) {
                const fileData = fs.readFileSync(LATEST_DATA_PATH, 'utf8');
                const articles = JSON.parse(fileData);
                const stats = fs.statSync(LATEST_DATA_PATH);
                const lastUpdated = stats.mtime.toISOString();

                res.status(200).json({
                    articles,
                    lastUpdated
                });
            } else {
                // If still no file, return empty array
                res.status(200).json({
                    articles: [],
                    lastUpdated: new Date().toISOString(),
                    message: 'No GDELT data found and initial fetch returned no results.'
                });
            }
        }
    } catch (error) {
        console.error('Error in GDELT API handler:', error);
        res.status(500).json({ error: 'Failed to fetch GDELT data' });
    }
}