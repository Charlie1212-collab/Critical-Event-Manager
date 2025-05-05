import React from 'react';
import Header from '../../components/AIWebsite/Common/Header';
import Footer from '../../components/AIWebsite/Common/Footer';
import DashboardContent from '../../components/AIWebsite/DashboardContent';
import { NextPage } from 'next';

// Define the custom page type with useMainLayout property
type CustomNextPage = NextPage & {
    useMainLayout?: boolean;
};

const Home: CustomNextPage = () => {
    return (
        <div className="h-screen flex flex-col bg-dark">
            <Header />
            <div className="flex-grow overflow-y-auto">
                <DashboardContent />
            </div>
            <Footer />
        </div>
    );
};

// Opt out of the main layout
Home.useMainLayout = false;

export default Home;