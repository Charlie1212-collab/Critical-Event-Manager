import React from 'react';
import { NextPage } from 'next';

type CustomNextPage = NextPage & {
    useMainLayout?: boolean;
};
import Header from '../../components/AIWebsite/Common/Header';

import Footer from '../../components/AIWebsite/Common/Footer';

const Product: CustomNextPage = () => {
    return (
        <div className="h-screen flex flex-col bg-dark">
            <Header />
            <div className="flex-grow flex items-center justify-center">
                <h1 className="text-2xl font-bold text-dark-text-white">Product Page</h1>
            </div>
            <Footer />
        </div>
    );
};

// Opt out of the main layout
Product.useMainLayout = false;

export default Product;