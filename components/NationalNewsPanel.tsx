import React, { useEffect, useState } from "react";
import { ArrowUpRight, RefreshCw } from "lucide-react";

interface NewsItem {
    title: string;
    link: string;
    published: string;
}

export default function NationalNewsPanel() {
    const [news, setNews] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [lastUpdated, setLastUpdated] = useState<string>("");

    const fetchNews = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/national-news');
            if (!response.ok) {
                throw new Error(`Failed to fetch news: ${response.statusText}`);
            }

            const data = await response.json();
            setNews(data);
            setLastUpdated(new Date().toLocaleTimeString());
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred');
            console.error("Error fetching national news:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNews();

        // Set up interval to refresh news every 5 minutes
        const intervalId = setInterval(fetchNews, 5 * 60 * 1000);

        // Clean up interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="bg-black text-white p-4 rounded-2xl shadow-lg border border-white/10">
            <div className="flex justify-between items-center mb-3 border-b border-white/10 pb-2">
                <h2 className="text-2xl font-semibold">National News</h2>
                <div className="flex items-center space-x-2">
                    {lastUpdated && (
                        <span className="text-xs text-white/60">
                            Updated: {lastUpdated}
                        </span>
                    )}
                    <button
                        onClick={fetchNews}
                        className="p-1.5 bg-white/10 rounded-full hover:bg-white/20 transition"
                        disabled={loading}
                    >
                        <RefreshCw size={16} className={`text-white/80 ${loading ? 'animate-spin' : ''}`} />
                    </button>
                </div>
            </div>

            {error && (
                <div className="bg-red-900/30 border border-red-500/50 p-3 rounded-lg mb-3">
                    <p className="text-red-300">{error}</p>
                    <button
                        onClick={fetchNews}
                        className="mt-2 text-xs text-white/80 bg-white/10 px-2 py-1 rounded hover:bg-white/20"
                    >
                        Try Again
                    </button>
                </div>
            )}

            {loading && news.length === 0 ? (
                <div className="py-8 flex justify-center">
                    <div className="animate-pulse space-y-3">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="w-full">
                                <div className="h-5 bg-white/10 rounded w-3/4"></div>
                                <div className="h-3 bg-white/5 rounded w-1/4 mt-1.5"></div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <ul className="space-y-3 max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-black">
                    {news.map((item, index) => (
                        <li key={index} className="hover:bg-white/10 p-2 rounded transition">
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start justify-between text-white hover:underline text-base font-medium group"
                            >
                                <span>{item.title}</span>
                                <ArrowUpRight size={16} className="mt-1 opacity-0 group-hover:opacity-100 transition text-blue-400" />
                            </a>
                            <p className="text-xs text-white/60 mt-1">{item.published}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}