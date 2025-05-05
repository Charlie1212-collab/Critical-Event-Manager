import React from "react";
import Header from "./ui/Header";
import Footer from "./ui/Footer";

interface MainLayoutProps {
    children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="flex flex-col min-h-screen bg-dark-background">
            <Header />

            <main className="flex-grow">
                {children}
            </main>

            <Footer />
        </div>
    );
}

export default MainLayout;