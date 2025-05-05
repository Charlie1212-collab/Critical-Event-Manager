import { NextApiRequest, NextApiResponse } from 'next';
import feedparser from 'feedparser-promised';

// Cache news items with timestamp
let newsCache: {
    items: any[];
    timestamp: number;
} = {
    items: [],
    timestamp: 0
};

const CACHE_TTL = 5 * 60 * 1000; // 5 minutes in milliseconds

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const currentTime = Date.now();

        // Check if we need to fetch fresh data
        if (currentTime - newsCache.timestamp > CACHE_TTL || newsCache.items.length === 0) {
            // Fetch fresh news data
            const feed = await feedparser.parse('https://news.google.com/rss?hl=en-US&gl=US&ceid=US:en');

            newsCache = {
                items: feed.slice(0, 10).map((entry: any) => ({
                    title: entry.title,
                    link: entry.link,
                    published: entry.pubdate instanceof Date
                        ? entry.pubdate.toLocaleString()
                        : typeof entry.pubdate === 'string'
                            ? new Date(entry.pubdate).toLocaleString()
                            : 'Unknown'
                })),
                timestamp: currentTime
            };
        }

        res.status(200).json(newsCache.items);
    } catch (error) {
        console.error('Error fetching national news:', error);
        res.status(500).json({
            error: 'Failed to fetch national news',
            message: error instanceof Error ? error.message : 'Unknown error'
        });
    }
}