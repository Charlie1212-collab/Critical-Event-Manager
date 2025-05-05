import React from 'react';

interface CrimeMapEmbedProps {
    location: string;
}

const CrimeMapEmbed = ({ location }: CrimeMapEmbedProps) => {
    const embedUrl = `https://communitycrimemap.com/?address=${encodeURIComponent(location)}`;

    return (
        <div className="w-full h-[600px] border rounded-xl shadow-md overflow-hidden">
            <iframe
                title={`LexisNexis Crime Map for ${location}`}
                src={embedUrl}
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                allowFullScreen
            />
        </div>
    );
};

export default CrimeMapEmbed;