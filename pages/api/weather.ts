import type { NextApiRequest, NextApiResponse } from 'next';

// NOTE: This API key may be expired or invalid, causing 401 errors
// const API_KEY = 'c411dc8c7f17978bb2bda47a5d941106';

// Mock data to use when API key is not valid
const MOCK_WEATHER_DATA = {
    createMockWeather: (location: string, lat: number, lon: number) => ({
        location,
        temperature: Math.floor(Math.random() * 30) + 40, // Random temp between 40-70°F
        description: ['Clear sky', 'Few clouds', 'Scattered clouds', 'Light rain', 'Thunderstorm'][Math.floor(Math.random() * 5)],
        icon: ['01d', '02d', '03d', '09d', '11d'][Math.floor(Math.random() * 5)],
        humidity: Math.floor(Math.random() * 30) + 40, // Random humidity between 40-70%
        windSpeed: Math.floor(Math.random() * 15) + 5, // Random wind speed between 5-20 mph
        alerts: Math.random() > 0.7 ? [{
            event: ['Flood', 'Severe Thunderstorm', 'High Wind', 'Extreme Heat'][Math.floor(Math.random() * 4)],
            description: 'Mock weather alert for simulation purposes',
            start: Date.now(),
            end: Date.now() + 86400000 // 24 hours later
        }] : [],
        timestamp: Date.now()
    })
};

type WeatherData = {
    location: string;
    temperature: number;
    description: string;
    icon: string;
    humidity: number;
    windSpeed: number;
    alerts?: any[];
    timestamp: number;
};

type ErrorResponse = {
    error: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<WeatherData | WeatherData[] | ErrorResponse>
) {
    try {
        const { lat, lon, city, multiple } = req.query;

        // Use mock data instead of real API calls
        // If multiple cities requested
        if (multiple === 'true') {
            const cities = [
                { name: 'New York', lat: 40.7128, lon: -74.0060 },
                { name: 'Los Angeles', lat: 34.0522, lon: -118.2437 },
                { name: 'Chicago', lat: 41.8781, lon: -87.6298 },
                { name: 'Houston', lat: 29.7604, lon: -95.3698 },
                { name: 'Phoenix', lat: 33.4484, lon: -112.0740 },
                { name: 'Philadelphia', lat: 39.9526, lon: -75.1652 },
                { name: 'San Antonio', lat: 29.4241, lon: -98.4936 },
                { name: 'San Diego', lat: 32.7157, lon: -117.1611 },
                { name: 'Dallas', lat: 32.7767, lon: -96.7970 },
                { name: 'San Jose', lat: 37.3382, lon: -121.8863 },
            ];

            const weatherResults = cities.map(city =>
                MOCK_WEATHER_DATA.createMockWeather(city.name, city.lat, city.lon)
            );

            return res.status(200).json(weatherResults);
        }

        // For single location weather
        let mockData;

        if (lat && lon) {
            mockData = MOCK_WEATHER_DATA.createMockWeather(`${lat},${lon}`, Number(lat), Number(lon));
        } else if (city) {
            mockData = MOCK_WEATHER_DATA.createMockWeather(city as string, 0, 0);
        } else {
            return res.status(400).json({ error: 'Missing location parameters' });
        }

        res.status(200).json(mockData);
    } catch (error) {
        console.error('Weather API error:', error);
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
}