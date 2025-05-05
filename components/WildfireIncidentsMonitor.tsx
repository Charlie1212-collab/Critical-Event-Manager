import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './ui/card';
import CardContent from './ui/card';
import CardTitle from './ui/card';
import CardHeader from './ui/card';
import CardDescription from './ui/card';

interface WildfireIncident {
    title: string;
    link: string;
    description: string;
    published: string;
    creator: string;
    guid: string;
}

export default function WildfireIncidentsMonitor() {
    const [incidents, setIncidents] = useState<WildfireIncident[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchIncidents = async () => {
            try {
                setLoading(true);
                const response = await axios.get<WildfireIncident[]>('/api/inciweb-incidents');
                setIncidents(response.data);
                setError(null);
            } catch (err) {
                console.error('Error fetching wildfire incidents:', err);
                setError('Failed to load wildfire incident data');
            } finally {
                setLoading(false);
            }
        };

        fetchIncidents();
        const intervalId = setInterval(fetchIncidents, 30 * 60 * 1000); // Refresh every 30 minutes

        return () => clearInterval(intervalId);
    }, []);

    // Function to strip HTML tags from description
    const stripHtmlTags = (html: string) => {
        return html.replace(/<[^>]*>?/gm, '');
    };

    // Format published date
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleString();
    };

    return (
        <Card className="w-full h-full overflow-hidden">
            <CardHeader className="bg-orange-600 text-white">
                <CardTitle>Active Wildfires</CardTitle>
                <CardDescription className="text-white opacity-90">
                    Live data from InciWeb Wildfire Incident Information System
                </CardDescription>
            </CardHeader>
            <CardContent className="overflow-auto max-h-[600px] p-0">
                {loading ? (
                    <div className="flex items-center justify-center p-6">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-600"></div>
                    </div>
                ) : error ? (
                    <div className="p-4 text-red-500">{error}</div>
                ) : incidents.length === 0 ? (
                    <div className="p-4 text-gray-500">No active wildfire incidents reported</div>
                ) : (
                    <div className="divide-y divide-gray-200">
                        {incidents.map((incident) => (
                            <div key={incident.guid} className="p-4 hover:bg-gray-50">
                                <h3 className="font-medium text-lg text-orange-700">
                                    <a
                                        href={incident.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline"
                                    >
                                        {incident.title}
                                    </a>
                                </h3>
                                <p className="text-sm text-gray-600 mt-1">
                                    {formatDate(incident.published)} • Reported by: {incident.creator}
                                </p>
                                <p className="mt-2 text-sm text-gray-700">
                                    {stripHtmlTags(incident.description).substring(0, 200)}
                                    {incident.description.length > 200 ? '...' : ''}
                                </p>
                                <a
                                    href={incident.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-2 inline-block text-sm text-orange-600 hover:underline"
                                >
                                    View details
                                </a>
                            </div>
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
    );
}