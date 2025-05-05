import React, { useState } from 'react';
import CrimeMapEmbed from './CrimeMapEmbed';

const walgreensLocations = [
    { name: 'Walgreens - Downtown Chicago', address: '2 N State St, Chicago, IL 60602' },
    { name: 'Walgreens - Los Angeles', address: '1501 Vine St, Los Angeles, CA 90028' },
    { name: 'Walgreens - San Francisco', address: '825 Market St, San Francisco, CA 94103' },
    { name: 'Walgreens - New York City', address: '300 Canal St, New York, NY 10013' }
];

const CrimeMapPanel = () => {
    const [selectedAddress, setSelectedAddress] = useState(walgreensLocations[0].address);

    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Live Crime Map Near Walgreens</h2>

            <select
                className="mb-4 p-2 rounded border shadow"
                value={selectedAddress}
                onChange={(e) => setSelectedAddress(e.target.value)}
            >
                {walgreensLocations.map((loc) => (
                    <option key={loc.address} value={loc.address}>
                        {loc.name}
                    </option>
                ))}
            </select>

            <CrimeMapEmbed location={selectedAddress} />
        </div>
    );
};

export default CrimeMapPanel;