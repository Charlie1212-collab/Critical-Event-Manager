# Walgreens Critical Event Manager Dashboard

A real-time dashboard for monitoring and managing critical events across Walgreens stores. The application provides a map view of store locations, event filtering capabilities, and an admin interface for creating new events.

## Features

- Interactive map showing all Walgreens store locations
- Real-time event monitoring with automatic updates
- Filter events by type (crime, weather, incident)
- Search for specific stores by name
- Admin login with secure authentication
- Create new events with severity levels
- Responsive grid layout for event cards

## Tech Stack

- **Frontend:** Next.js, React, TypeScript, Tailwind CSS
- **Map:** Leaflet with React-Leaflet
- **UI Components:** Custom shadcn/ui style components
- **Icons:** Lucide React
- **Backend:** Express.js with JWT authentication
- **API:** RESTful endpoints for stores and events

## Getting Started

### Prerequisites

- Node.js 14.x or higher
- npm 6.x or higher

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install --legacy-peer-deps
```

### Running the Application

Run both the frontend and backend simultaneously:

```bash
npm run dev:all
```

Or run them separately:

```bash
# Frontend only
npm run dev

# Backend only
npm run server
```

The frontend will be available at: http://localhost:3000
The backend API will be available at: http://localhost:8000

### Admin Login

To access the admin features, use the following credentials:

- Username: admin
- Password: password

## API Endpoints

- `GET /stores` - Get all store locations
- `GET /events` - Get all critical events
- `POST /events` - Create a new event (requires authentication)
- `POST /token` - Authenticate and get access token