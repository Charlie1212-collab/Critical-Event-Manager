import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/db/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        // Handle different HTTP methods
        switch (req.method) {
            case 'GET':
                return await getIncidents(req, res);
            case 'POST':
                return await createIncident(req, res);
            case 'PUT':
                return await updateIncident(req, res);
            case 'DELETE':
                return await deleteIncident(req, res);
            default:
                return res.status(405).json({ message: 'Method not allowed' });
        }
    } catch (error) {
        console.error('Request error', error);
        res.status(500).json({ error: 'Error processing your request' });
    }
}

// Get all incidents with optional filtering
async function getIncidents(req: NextApiRequest, res: NextApiResponse) {
    const {
        type,
        severity,
        status,
        limit = 20,
        offset = 0
    } = req.query;

    // Build filter object based on query parameters
    const filter: any = {};
    if (type) filter.incidentType = type;
    if (severity) filter.severity = parseInt(severity as string);
    if (status) filter.status = status;

    const incidents = await prisma.incident.findMany({
        where: filter,
        include: {
            store: true,
            incidentUpdates: true,
        },
        orderBy: {
            reportedAt: 'desc',
        },
        skip: Number(offset),
        take: Number(limit),
    });

    const total = await prisma.incident.count({ where: filter });

    return res.status(200).json({
        incidents,
        meta: { total, limit, offset }
    });
}

// Create a new incident
async function createIncident(req: NextApiRequest, res: NextApiResponse) {
    const data = req.body;

    const incident = await prisma.incident.create({
        data: {
            title: data.title,
            description: data.description,
            location: data.location,
            coordinates: data.coordinates,
            severity: data.severity,
            incidentType: data.incidentType,
            status: data.status || 'active',
            sourceId: data.sourceId,
            sourceSystem: data.sourceSystem,
            storeId: data.storeId,
        },
    });

    return res.status(201).json(incident);
}

// Update an existing incident
async function updateIncident(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    const data = req.body;

    if (!id || Array.isArray(id)) {
        return res.status(400).json({ message: 'Valid incident ID is required' });
    }

    try {
        const incident = await prisma.incident.update({
            where: { id: parseInt(id) },
            data,
        });
        return res.status(200).json(incident);
    } catch (error) {
        return res.status(404).json({ message: 'Incident not found' });
    }
}

// Delete an incident
async function deleteIncident(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    if (!id || Array.isArray(id)) {
        return res.status(400).json({ message: 'Valid incident ID is required' });
    }

    try {
        await prisma.incident.delete({
            where: { id: parseInt(id as string) },
        });
        return res.status(204).end();
    } catch (error) {
        return res.status(404).json({ message: 'Incident not found' });
    }
}