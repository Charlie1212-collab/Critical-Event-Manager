import React, { useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { ExternalLink } from "lucide-react";

interface YouTubeVideo {
  keyword: string;
  title: string;
  channel: string;
  published: string;
  url: string;
}

export default function YouTubeSecurityFeed() {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch real YouTube incidents data from our API endpoint
    fetch('http://localhost:8000/youtube-incidents')
      .then(res => {
        if (!res.ok) {
          throw new Error(`Error ${res.status}: ${res.statusText}`);
        }
        return res.json();
      })
      .then(data => {
        if (data && Array.isArray(data)) {
          // If data exists and is valid, use it
          setVideos(data);
        } else {
          // If no data or invalid format, fall back to sample data
          const sampleData: YouTubeVideo[] = [
            {
              keyword: "Walgreens theft",
              title: "Walgreens Shoplifting Incident Caught on Camera",
              channel: "Local News Channel",
              published: "1 week ago",
              url: "https://www.youtube.com/watch?v=example1"
            },
            {
              keyword: "Walgreens robbery",
              title: "Security Camera Footage Shows Walgreens Robbery",
              channel: "Crime Watch",
              published: "3 days ago",
              url: "https://www.youtube.com/watch?v=example2"
            },
            {
              keyword: "Walgreens shoplifting",
              title: "Multiple Individuals Caught Shoplifting at Walgreens",
              channel: "Security Footage Archives",
              published: "2 days ago",
              url: "https://www.youtube.com/watch?v=example3"
            }
          ];
          setVideos(sampleData);
          setError("Using sample data (CSV file not found or empty)");
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to load YouTube feed:", err);
        setError("Failed to load data. Using sample data.");
        
        // Fall back to sample data
        const sampleData: YouTubeVideo[] = [
          {
            keyword: "Walgreens theft",
            title: "Walgreens Shoplifting Incident Caught on Camera",
            channel: "Local News Channel",
            published: "1 week ago",
            url: "https://www.youtube.com/watch?v=example1"
          },
          {
            keyword: "Walgreens robbery",
            title: "Security Camera Footage Shows Walgreens Robbery",
            channel: "Crime Watch",
            published: "3 days ago",
            url: "https://www.youtube.com/watch?v=example2"
          }
        ];
        setVideos(sampleData);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="p-4 text-center text-gray-300">Loading security feed...</div>;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold mb-2 flex items-center text-white">
        <svg viewBox="0 0 24 24" className="w-6 h-6 mr-2 text-red-600 fill-current">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
        Recent Security Incidents
      </h2>
      
      {error && (
        <div className="text-xs text-yellow-500 mb-2">
          Note: {error}
        </div>
      )}
      
      <div className="grid grid-cols-1 gap-3">
        {videos.length > 0 ? (
          videos.map((video, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow bg-gray-700 border-gray-600">
              <CardContent className="p-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-sm text-white">
                      {video.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-1">
                      {video.channel} • {video.published}
                    </p>
                    <span className="inline-block mt-1 text-xs px-2 py-0.5 bg-red-900 text-red-100 rounded-full">
                      {video.keyword}
                    </span>
                  </div>
                  <a 
                    href={video.url}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="text-center text-gray-400 py-4">
            No security incidents found
          </div>
        )}
      </div>
    </div>
  );
}