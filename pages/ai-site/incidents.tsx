import React from 'react';
import { NextPage } from 'next';
import Header from '../../components/AIWebsite/Common/Header'; // Corrected import path
import Footer from '../../components/AIWebsite/Common/Footer';

type NextPageWithLayout = NextPage & {
    useMainLayout?: boolean;
};

const Incidents: NextPageWithLayout = () => {
    return (
        <div className="h-screen flex flex-col bg-dark">
            <Header />
            <div className="flex-grow flex items-center justify-center">
                <h1 className="text-2xl font-bold text-dark-text-white">Incidents Page</h1>
            </div>
            <Footer />
        </div>
    );
};

// Opt out of the main layout
Incidents.useMainLayout = false;

export default Incidents;