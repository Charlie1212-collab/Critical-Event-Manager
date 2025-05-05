import React, { useState, useEffect } from "react";
import Head from "next/head";
import MainLayout from "../components/MainLayout";

interface VideoItem {
    keyword: string;
    title: string;
    channel: string;
    published: string;
    url: string;
    platform: string;
}

export default function WalgreensVideos() {
    const [videos, setVideos] = useState<VideoItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [activeFilter, setActiveFilter] = useState("all");
    const [currentYear, setCurrentYear] = useState("");
    const [uniqueKeywords, setUniqueKeywords] = useState<string[]>([]);

    // Fetch videos from the JSON file
    useEffect(() => {
        const fetchVideos = async () => {
            try {
                setIsLoading(true);
                const response = await fetch("/social_media_results.json");

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data: VideoItem[] = await response.json();
                setVideos(data);

                // Extract unique keywords for filtering
                const keywords = Array.from(new Set(data.map((video: VideoItem) => video.keyword)));
                setUniqueKeywords(keywords);

                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching videos:", error);
                setIsLoading(false);
            }
        };

        fetchVideos();
        setCurrentYear(new Date().getFullYear().toString());
    }, []);

    // Filter videos by keyword
    const filteredVideos = activeFilter === "all"
        ? videos
        : videos.filter(video => video.keyword.toLowerCase().replace(' ', '-') === activeFilter);

    // Handle filter change
    const handleFilterChange = (keyword: string) => {
        setActiveFilter(keyword);
    };

    return (
        <MainLayout>
            <Head>
                <title>Walgreens Videos | Critical Event Management</title>
                <meta name="description" content="Walgreens security and crime-related videos" />
            </Head>

            {/* Filter category menu as horizontal tabs */}
            <div className="bg-dark-300/30 py-2 px-4 overflow-x-auto shadow-inner">
                <div className="container mx-auto flex items-center space-x-5 overflow-x-auto">
                    <button
                        className={`px-3 py-1.5 rounded-md text-sm flex-shrink-0 ${activeFilter === "all"
                            ? "bg-blue-500 text-white"
                            : "bg-dark-300/50 text-dark-700 hover:bg-dark-300/80 hover:text-white"
                            } transition-colors`}
                        onClick={() => handleFilterChange("all")}
                    >
                        All Videos
                    </button>
                    {uniqueKeywords.map((keyword) => (
                        <button
                            key={keyword}
                            className={`px-3 py-1.5 rounded-md text-sm flex-shrink-0 ${activeFilter === keyword.toLowerCase().replace(' ', '-')
                                ? "bg-blue-500 text-white"
                                : "bg-dark-300/50 text-dark-700 hover:bg-dark-300/80 hover:text-white"
                                } transition-colors`}
                            onClick={() => handleFilterChange(keyword.toLowerCase().replace(' ', '-'))}
                        >
                            {keyword}
                        </button>
                    ))}
                </div>
            </div>

            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-bold mb-8 text-blue-800">Walgreens Crime Videos</h1>

                {/* Videos list */}
                <div className="bg-dark-200/80 border border-dark-300/30 rounded-lg p-6 mb-6">
                    {isLoading ? (
                        <div className="text-center py-10">
                            <div className="inline-block w-8 h-8 border-4 border-t-blue-500 border-r-transparent border-b-blue-500 border-l-transparent rounded-full animate-spin"></div>
                            <p className="mt-3 text-dark-text-gray">Loading videos...</p>
                        </div>
                    ) : filteredVideos.length === 0 ? (
                        <p className="text-center text-dark-text-gray py-10">No videos found.</p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredVideos.map((video, index) => (
                                <div
                                    key={index}
                                    className="bg-dark-300/50 rounded-lg overflow-hidden border border-dark-border hover:transform hover:-translate-y-1 transition-all duration-200"
                                >
                                    <div className="p-4">
                                        <span className="inline-block px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full mb-2">
                                            {video.keyword}
                                        </span>
                                        <h3 className="font-medium mb-2 line-clamp-2">{video.title}</h3>
                                        <p className="text-sm text-dark-700 mb-1">Channel: {video.channel}</p>
                                        <p className="text-xs text-dark-700 mb-3">{video.published}</p>
                                        <a
                                            href={video.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block px-3 py-2 bg-dark-300/70 hover:bg-dark-300 rounded-md transition-colors text-sm text-blue-400 border border-blue-500/30 hover:border-blue-500"
                                        >
                                            Watch Video
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </MainLayout>
    );
}