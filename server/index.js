const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const PORT = 8000;
const JWT_SECRET = 'walgreens-secret-key';

// Create HTTP server
const server = http.createServer(app);

// Set up Socket.io
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

// Set up Socket.io namespace for websocket connections
const wsNamespace = io.of('/ws');

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Cache variables
let youtubeIncidents = [];
let lastYouTubeFetch = 0;
let walgreensStores = [];
let lastStoresFetch = 0;
let nationalNews = [];
let lastNewsFetch = 0;

// Function to read the YouTube incidents CSV file
function fetchYouTubeIncidents() {
  const currentTime = Date.now();
  // Only refresh cache if it's been more than 5 minutes
  if (currentTime - lastYouTubeFetch < 5 * 60 * 1000 && youtubeIncidents.length > 0) {
    return Promise.resolve(youtubeIncidents);
  }

  return new Promise((resolve, reject) => {
    const results = [];
    const csvPath = path.join(__dirname, '../scripts/walgreens_youtube.csv');

    // Check if the file exists
    if (!fs.existsSync(csvPath)) {
      // If file doesn't exist, return empty array
      lastYouTubeFetch = currentTime;
      youtubeIncidents = [];
      return resolve([]);
    }

    fs.createReadStream(csvPath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        lastYouTubeFetch = currentTime;
        youtubeIncidents = results;
        resolve(results);
      })
      .on('error', (error) => {
        console.error('Error reading YouTube incidents CSV:', error);
        reject(error);
      });
  });
}

// Function to read the Walgreens stores CSV file
function fetchWalgreensStores() {
  const currentTime = Date.now();
  // Only refresh cache if it's been more than 5 minutes
  if (currentTime - lastStoresFetch < 5 * 60 * 1000 && walgreensStores.length > 0) {
    return Promise.resolve(walgreensStores);
  }

  return new Promise((resolve, reject) => {
    const results = [];
    const csvPath = path.join(__dirname, '../Walgreens_stores_(1).csv');

    // Check if the file exists
    if (!fs.existsSync(csvPath)) {
      console.log('Walgreens stores CSV file not found, using mock data');
      lastStoresFetch = currentTime;
      // If file doesn't exist, return mock data
      return resolve(mockStores);
    }

    fs.createReadStream(csvPath)
      .pipe(csv())
      .on('data', (data) => {
        // Convert each store to our required format
        if (data.STORE_NBR) {
          results.push({
            id: data.STORE_NBR,
            name: `Walgreens #${data.STORE_NBR}`,
            storeNumber: data.STORE_NBR,
            address: data.ADDRESS || "Unknown",
            city: data.CITY || "Unknown",
            state: data.STATE || "Unknown",
            zipCode: data.ZIP_CODE || "Unknown",
            phone: data.PHONE || "Unknown",
            // These are placeholder coordinates - in a real app, you'd use geocoding
            // or have actual lat/lng data for each store
            lat: data.LATITUDE ? parseFloat(data.LATITUDE) : (41.8781 + (Math.random() * 10 - 5)),
            lng: data.LONGITUDE ? parseFloat(data.LONGITUDE) : (-87.6298 + (Math.random() * 10 - 5))
          });
        }
      })
      .on('end', () => {
        console.log(`Loaded ${results.length} Walgreens stores from CSV`);
        lastStoresFetch = currentTime;
        walgreensStores = results.length > 0 ? results : mockStores;
        resolve(walgreensStores);
      })
      .on('error', (error) => {
        console.error('Error reading Walgreens stores CSV:', error);
        reject(error);
      });
  });
}

// Function to fetch national news
function fetchNationalNews() {
  const currentTime = Date.now();
  // Only refresh cache if it's been more than 5 minutes
  if (currentTime - lastNewsFetch < 5 * 60 * 1000 && nationalNews.length > 0) {
    return Promise.resolve(nationalNews);
  }

  return new Promise((resolve) => {
    // Mock news data - in a real app, you would fetch this from a news API
    const mockNews = [
      {
        title: "Retail Chain Security Measures Strengthened Nationwide",
        link: "https://example.com/retail-security",
        published: "May 5, 2025, 9:15 AM"
      },
      {
        title: "Hurricane Season Preparedness: What Retailers Need to Know",
        link: "https://example.com/hurricane-prep",
        published: "May 5, 2025, 8:30 AM"
      },
      {
        title: "Supply Chain Disruptions Expected Due to Weather Events",
        link: "https://example.com/supply-chain",
        published: "May 4, 2025, 4:45 PM"
      },
      {
        title: "New Retail Security Technologies Showing Promise",
        link: "https://example.com/retail-tech",
        published: "May 4, 2025, 2:20 PM"
      },
      {
        title: "Major Weather System Moving Across Midwest",
        link: "https://example.com/midwest-weather",
        published: "May 4, 2025, 11:10 AM"
      },
      {
        title: "Pharmacy Security Best Practices Released by Industry Association",
        link: "https://example.com/pharmacy-security",
        published: "May 3, 2025, 3:30 PM"
      },
      {
        title: "Emergency Preparedness Guide for Retail Locations",
        link: "https://example.com/emergency-prep",
        published: "May 3, 2025, 10:45 AM"
      }
    ];

    lastNewsFetch = currentTime;
    nationalNews = mockNews;
    resolve(mockNews);
  });
}

// Mock data
const mockStores = [
  { id: "1", name: "Walgreens #1234 - Chicago Downtown", lat: 41.8781, lng: -87.6298 },
  { id: "2", name: "Walgreens #2345 - New York Times Square", lat: 40.7580, lng: -73.9855 },
  { id: "3", name: "Walgreens #3456 - Los Angeles Beverly Hills", lat: 34.0736, lng: -118.4004 },
  { id: "4", name: "Walgreens #4567 - Miami Beach", lat: 25.7907, lng: -80.1300 },
  { id: "5", name: "Walgreens #5678 - Seattle Downtown", lat: 47.6062, lng: -122.3321 },
  { id: "6", name: "Walgreens #6789 - Denver Central", lat: 39.7392, lng: -104.9903 },
  { id: "7", name: "Walgreens #7890 - Dallas Uptown", lat: 32.7767, lng: -96.7970 },
  { id: "8", name: "Walgreens #8901 - Phoenix Central", lat: 33.4484, lng: -112.0740 },
  { id: "9", name: "Walgreens #9012 - Atlanta Midtown", lat: 33.7490, lng: -84.3880 },
  { id: "10", name: "Walgreens #0123 - Boston Downtown", lat: 42.3601, lng: -71.0589 },
];

let events = [
  {
    id: 1,
    type: "crime",
    storeId: "1",
    title: "Shoplifting incident",
    severity: 1,
    time: "4/30/2025, 8:30:00 AM"
  },
  {
    id: 2,
    type: "weather",
    storeId: "2",
    title: "Severe storm warning",
    severity: 2,
    time: "4/30/2025, 9:15:00 AM"
  },
  {
    id: 3,
    type: "incident",
    storeId: "3",
    title: "Power outage",
    severity: 3,
    time: "4/30/2025, 10:00:00 AM"
  },
  {
    id: 4,
    type: "crime",
    storeId: "4",
    title: "Robbery attempt",
    severity: 3,
    time: "4/30/2025, 11:30:00 AM"
  },
  {
    id: 5,
    type: "weather",
    storeId: "5",
    title: "Flood warning",
    severity: 2,
    time: "4/30/2025, 12:45:00 PM"
  }
];

// Socket.io connections
wsNamespace.on('connection', (socket) => {
  console.log('Client connected to WebSocket');

  // Send initial news data
  fetchNationalNews().then((news) => {
    socket.emit('national_news_update', news);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected from WebSocket');
  });
});

// Periodically update news (every 2 minutes)
setInterval(() => {
  fetchNationalNews().then((news) => {
    wsNamespace.emit('national_news_update', news);
  });
}, 2 * 60 * 1000);

// Auth middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Routes
app.get('/stores', async (req, res) => {
  try {
    const stores = await fetchWalgreensStores();
    res.json(stores);
  } catch (error) {
    console.error('Error fetching stores:', error);
    res.status(500).json({ error: 'Failed to fetch stores' });
  }
});

app.get('/events', (req, res) => {
  res.json(events);
});

app.post('/events', authenticateToken, (req, res) => {
  const newEvent = req.body;
  events.push(newEvent);
  res.status(201).json(newEvent);
});

app.post('/token', (req, res) => {
  // This is a mock login - in a real app, you would validate credentials
  const { username, password } = req.body;

  // Simple validation for demo purposes
  if (username === 'admin' && password === 'password') {
    // Create token
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ access_token: token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// New endpoint for YouTube incidents
app.get('/youtube-incidents', async (req, res) => {
  try {
    const incidents = await fetchYouTubeIncidents();
    res.json(incidents);
  } catch (error) {
    console.error('Error fetching YouTube incidents:', error);
    res.status(500).json({ error: 'Failed to fetch YouTube incidents' });
  }
});

// Start server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`WebSocket server is available at ws://localhost:${PORT}/ws`);
});