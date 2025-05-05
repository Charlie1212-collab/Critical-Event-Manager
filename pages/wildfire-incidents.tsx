import Head from 'next/head';
import MainLayout from '../components/MainLayout';
import WildfireIncidentsMonitor from '../components/WildfireIncidentsMonitor';

export default function WildfireIncidentsPage() {
    return (
        <>
            <Head>
                <title>Wildfire Incidents | Critical Event Manager</title>
                <meta name="description" content="Real-time wildfire incident monitoring from InciWeb" />
            </Head>
            <MainLayout>
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold mb-6">Wildfire Incident Monitoring</h1>
                    <div className="grid grid-cols-1 gap-6">
                        <WildfireIncidentsMonitor />
                    </div>
                </div>
            </MainLayout>
        </>
    );
}