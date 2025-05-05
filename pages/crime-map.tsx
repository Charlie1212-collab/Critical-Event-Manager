import React from 'react';
import MainLayout from '../components/MainLayout';
import CrimeMapPanel from '../components/CrimeMapPanel';

export default function CrimeMapsPage() {
    return (
        <MainLayout>
            <div className="container mx-auto px-4 py-6">
                <h1 className="text-2xl font-bold mb-6">Crime Maps</h1>
                <CrimeMapPanel />
            </div>
        </MainLayout>
    );
}