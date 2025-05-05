import React, { useState, useEffect } from 'react';
import { Newspaper, RefreshCw, ExternalLink, AlertTriangle } from 'lucide-react';

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

export default function GdeltIncidentsMonitor() {
    const [articles, setArticles] = useState<GdeltArticle[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [lastUpdated, setLastUpdated] = useState<string>('');

    const fetchGdeltData = async (refresh = false) => {
        try {
            setLoading(true);
            const endpoint = refresh ? '/api/gdelt-incidents?refresh=true' : '/api/gdelt-incidents';
            const response = await fetch(endpoint);

            if (!response.ok) {
                throw new Error('Failed to fetch GDELT data');
            }

            const data = await response.json();
            setArticles(data.articles);
            setLastUpdated(new Date(data.lastUpdated || new Date()).toLocaleString());
            setError(null);
        } catch (err) {
            console.error('Error fetching GDELT data:', err);
            setError('Failed to load GDELT incident data. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchGdeltData();

        // Set up polling every 30 minutes
        const intervalId = setInterval(() => {
            fetchGdeltData();
        }, 30 * 60 * 1000);

        return () => clearInterval(intervalId);
    }, []);

    const handleRefresh = () => {
        fetchGdeltData(true);
    };

    // Format date from GDELT format
    const formatDate = (gdeltDate: string): string => {
        if (!gdeltDate) return '';
        try {
            // GDELT dates are in YYYYMMDDHHMMSS format
            const year = gdeltDate.substring(0, 4);
            const month = gdeltDate.substring(4, 6);
            const day = gdeltDate.substring(6, 8);
            const hour = gdeltDate.substring(8, 10);
            const minute = gdeltDate.substring(10, 12);

            const date = new Date(
                parseInt(year),
                parseInt(month) - 1, // month is 0-indexed
                parseInt(day),
                parseInt(hour),
                parseInt(minute)
            );

            return date.toLocaleString([], {
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        } catch (e) {
            return gdeltDate;
        }
    };

    if (loading && articles.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-full p-6">
                <div className="animate-spin h-8 w-8 border-4 border-blue-500 rounded-full border-t-transparent mb-3"></div>
                <p className="text-dark-700">Loading GDELT incident data...</p>
            </div>
        );
    }

    if (error && articles.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                <AlertTriangle className="h-8 w-8 text-amber-500 mb-3" />
                <p className="text-dark-700">{error}</p>
                <button
                    onClick={handleRefresh}
                    className="mt-3 px-3 py-1 bg-dark-300/70 hover:bg-dark-300 rounded-md transition-colors text-sm"
                >
                    Try Again
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full">
            <div className="flex justify-between items-center pb-3 mb-3 border-b border-dark-300/30">
                <h3 className="text-sm font-medium text-dark-700 flex items-center">
                    <Newspaper className="h-4 w-4 mr-2" />
                    Latest Walgreens Crime News
                </h3>
                <div className="flex items-center">
                    <button
                        onClick={handleRefresh}
                        className="p-1 rounded hover:bg-dark-300/30 transition-colors"
                        title="Refresh GDELT data"
                    >
                        <RefreshCw className="h-3.5 w-3.5 text-dark-700" />
                    </button>
                    <span className="text-xs text-dark-700 ml-2">
                        Updated: {lastUpdated || 'Never'}
                    </span>
                </div>
            </div>

            {articles.length > 0 ? (
                <div className="overflow-y-auto">
                    <ul className="space-y-3">
                        {articles.map((article, index) => (
                            <li
                                key={index}
                                className="bg-dark-200/50 rounded-lg p-3 transition-all hover:bg-dark-200/70"
                            >
                                <h4 className="font-medium text-sm mb-1">{article.title}</h4>
                                <div className="text-xs text-dark-700 mb-2 flex items-center justify-between">
                                    <span>{article.source}</span>
                                    <span>{formatDate(article.published_date)}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-2 text-xs">
                                        <span className="bg-dark-300/50 px-2 py-0.5 rounded">{article.country}</span>
                                        {article.socialshares > 0 && (
                                            <span className="bg-blue-500/20 text-blue-500 px-2 py-0.5 rounded">
                                                {article.socialshares} shares
                                            </span>
                                        )}
                                    </div>
                                    <a
                                        href={article.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:text-blue-400 text-xs flex items-center"
                                    >
                                        View Article <ExternalLink className="h-3 w-3 ml-1" />
                                    </a>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center flex-1 text-dark-700">
                    <p>No recent crime news available</p>
                </div>
            )}
        </div>
    );
}