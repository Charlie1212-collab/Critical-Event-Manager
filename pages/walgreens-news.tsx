import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import MainLayout from '../components/MainLayout';
import { Card } from '../components/ui/card';
import { Newspaper, AlertTriangle, RefreshCw } from 'lucide-react';

interface NewsArticle {
    id: number;
    title: string;
    category: string;
    date: string;
    summary: string;
    image: string;
    url: string;
}

interface GdeltArticle {
    title: string;
    url: string;
    source: string;
    published_date: string; // YYYYMMDDHHMMSS format
    language: string;
    domain: string;
    country: string;
    socialshares: number;
}

const WalgreensNewsPage: NextPage = () => {
    const [newsArticles, setNewsArticles] = useState<NewsArticle[]>([]);
    const [gdeltArticles, setGdeltArticles] = useState<GdeltArticle[]>([]);
    const [filteredArticles, setFilteredArticles] = useState<NewsArticle[]>([]);
    const [categoryFilter, setCategoryFilter] = useState('all');
    const [sortOrder, setSortOrder] = useState('newest');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [lastUpdated, setLastUpdated] = useState<string>('');

    // Categories for filter menu
    const categories = [
        { id: 'all', name: 'All News' },
        { id: 'robbery', name: 'Robbery' },
        { id: 'suspicious', name: 'Suspicious Activity' },
        { id: 'theft', name: 'Theft' },
        { id: 'drug', name: 'Drug-related' }
    ];

    // Sort options for filter menu
    const sortOptions = [
        { id: 'newest', name: 'Newest First' },
        { id: 'oldest', name: 'Oldest First' }
    ];

    // Fetch GDELT data
    const fetchGdeltData = async (refresh = false) => {
        try {
            setLoading(true);
            const endpoint = refresh ? '/api/gdelt-incidents?refresh=true' : '/api/gdelt-incidents';
            const response = await fetch(endpoint);

            if (!response.ok) {
                throw new Error('Failed to fetch GDELT data');
            }

            const data = await response.json();
            setGdeltArticles(data.articles);
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
        // Fetch static news data
        const fetchNews = async () => {
            // Sample news data as fallback
            const data: NewsArticle[] = [
                {
                    id: 1,
                    title: "Pharmacy Robbery Incident at Chicago Store",
                    category: "robbery",
                    date: "2025-04-29",
                    summary: "A Walgreens store in downtown Chicago reported a robbery incident yesterday. Local authorities are investigating.",
                    image: "/assets/backgroundImage.jpg",
                    url: "#"
                }
            ];

            setNewsArticles(data);
            setFilteredArticles(data);
        };

        fetchNews();
        fetchGdeltData();
    }, []);

    // Format date from GDELT format (YYYYMMDDHHMMSS) to a readable format
    const formatGdeltDate = (gdeltDate: string): string => {
        if (!gdeltDate) return '';
        try {
            const year = gdeltDate.substring(0, 4);
            const month = gdeltDate.substring(4, 6);
            const day = gdeltDate.substring(6, 8);

            const date = new Date(
                parseInt(year),
                parseInt(month) - 1,
                parseInt(day)
            );

            return date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        } catch (e) {
            return gdeltDate;
        }
    };

    // Categorize GDELT articles based on keywords in title
    const categorizeGdeltArticle = (title: string): string => {
        const lowerTitle = title.toLowerCase();
        if (lowerTitle.includes('robbery') || lowerTitle.includes('armed') || lowerTitle.includes('gunpoint')) {
            return 'robbery';
        } else if (lowerTitle.includes('theft') || lowerTitle.includes('shoplifting') || lowerTitle.includes('stole') || lowerTitle.includes('stolen')) {
            return 'theft';
        } else if (lowerTitle.includes('drug') || lowerTitle.includes('pharma') || lowerTitle.includes('prescription')) {
            return 'drug';
        } else if (lowerTitle.includes('suspicious') || lowerTitle.includes('loiter')) {
            return 'suspicious';
        }
        return 'other';
    };

    // Convert GDELT articles to the format needed for display
    useEffect(() => {
        if (gdeltArticles.length > 0) {
            const convertedArticles: NewsArticle[] = gdeltArticles.map((article, index) => {
                const category = categorizeGdeltArticle(article.title);
                return {
                    id: index + 1000, // Avoid ID conflicts with static articles
                    title: article.title,
                    category: category,
                    date: article.published_date,
                    summary: `Source: ${article.source}. ${article.socialshares > 0 ? `Shared ${article.socialshares} times on social media.` : ''} From ${article.country}.`,
                    image: "/assets/backgroundImage.jpg", // Default image
                    url: article.url
                };
            });

            setNewsArticles(prevArticles => {
                // Combine with any previous static articles
                const combinedArticles = [...convertedArticles, ...prevArticles.filter(a => a.id < 1000)];
                return combinedArticles;
            });
        }
    }, [gdeltArticles]);

    useEffect(() => {
        // Apply filtering and sorting
        let results = [...newsArticles];

        // Filter by category
        if (categoryFilter !== 'all') {
            results = results.filter(article => article.category === categoryFilter);
        }

        // Apply sorting
        results.sort((a, b) => {
            let dateA: Date, dateB: Date;

            // Handle both date formats (YYYY-MM-DD and YYYYMMDDHHMMSS)
            if (a.date.includes('-')) {
                dateA = new Date(a.date);
            } else {
                // GDELT format
                const year = a.date.substring(0, 4);
                const month = a.date.substring(4, 6);
                const day = a.date.substring(6, 8);
                dateA = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
            }

            if (b.date.includes('-')) {
                dateB = new Date(b.date);
            } else {
                // GDELT format
                const year = b.date.substring(0, 4);
                const month = b.date.substring(4, 6);
                const day = b.date.substring(6, 8);
                dateB = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
            }

            return sortOrder === 'newest' ? dateB.getTime() - dateA.getTime() : dateA.getTime() - dateB.getTime();
        });

        setFilteredArticles(results);
    }, [categoryFilter, sortOrder, newsArticles]);

    const formatDate = (dateString: string) => {
        // Check if it's GDELT format (YYYYMMDDHHMMSS)
        if (!dateString.includes('-')) {
            return formatGdeltDate(dateString);
        }

        // Otherwise it's YYYY-MM-DD format
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    // Handle refresh button click
    const handleRefresh = () => {
        fetchGdeltData(true); // Refresh GDELT data
    };

    return (
        <MainLayout>
            {/* Combined filter options in a single horizontal bar */}
            <div className="bg-dark-300/30 py-2 px-4 overflow-x-auto shadow-inner">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="flex items-center space-x-3 overflow-x-auto">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                className={`px-3 py-1.5 rounded-md text-sm flex-shrink-0 ${categoryFilter === category.id
                                    ? "bg-blue-500 text-white"
                                    : "bg-dark-300/50 text-dark-700 hover:bg-dark-300/80 hover:text-white"
                                    } transition-colors`}
                                onClick={() => setCategoryFilter(category.id)}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center space-x-3">
                        <span className="text-sm text-dark-700">Sort by:</span>
                        {sortOptions.map((option) => (
                            <button
                                key={option.id}
                                className={`px-3 py-1.5 rounded-md text-sm flex-shrink-0 ${sortOrder === option.id
                                    ? "bg-blue-500 text-white"
                                    : "bg-dark-300/50 text-dark-700 hover:bg-dark-300/80 hover:text-white"
                                    } transition-colors`}
                                onClick={() => setSortOrder(option.id)}
                            >
                                {option.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-blue-800 flex items-center">
                        <Newspaper className="mr-3" />
                        Walgreens Crime News
                    </h1>

                    <div className="flex items-center">
                        <button
                            onClick={handleRefresh}
                            className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
                            disabled={loading}
                        >
                            <RefreshCw className={`mr-2 h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
                            {loading ? 'Refreshing...' : 'Refresh News'}
                        </button>

                        {lastUpdated && (
                            <span className="ml-3 text-sm text-dark-700">
                                Last updated: {lastUpdated}
                            </span>
                        )}
                    </div>
                </div>

                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6 flex items-center">
                        <AlertTriangle className="h-5 w-5 mr-2" />
                        <span>{error}</span>
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredArticles.map((article) => (
                        <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <div className="h-48 overflow-hidden relative">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        // Fallback if image doesn't load
                                        const target = e.target as HTMLImageElement;
                                        target.src = "/assets/placeholder.png"; // Fallback image
                                        target.onerror = null; // Prevent infinite loop
                                    }}
                                />
                                {article.id >= 1000 && (
                                    <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs px-2 py-1">
                                        GDELT
                                    </div>
                                )}
                            </div>
                            <div className="p-4">
                                <span className="inline-block bg-blue-700 text-white text-xs px-2 py-1 rounded mb-2">
                                    {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                                </span>
                                <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                                <p className="text-gray-500 text-sm mb-3">{formatDate(article.date)}</p>
                                <p className="text-gray-700 mb-4">{article.summary}</p>
                                <a
                                    href={article.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-700 font-semibold hover:underline"
                                >
                                    Read more
                                </a>
                            </div>
                        </Card>
                    ))}
                </div>

                {filteredArticles.length === 0 && !loading && (
                    <div className="text-center py-8">
                        <p className="text-gray-500">No articles found matching your criteria.</p>
                    </div>
                )}

                {loading && filteredArticles.length === 0 && (
                    <div className="text-center py-8">
                        <div className="animate-spin h-12 w-12 border-4 border-blue-500 rounded-full border-t-transparent mx-auto mb-4"></div>
                        <p className="text-gray-500">Loading articles...</p>
                    </div>
                )}
            </div>
        </MainLayout>
    );
};

export default WalgreensNewsPage;