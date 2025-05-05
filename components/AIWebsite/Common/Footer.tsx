import React from 'react';
import Link from 'next/link';

function Footer() {
    return (
        <footer className="bg-dark-card p-4 text-center border-t border-dark-border">
            <div className="flex flex-col items-center justify-center">
                <p className="text-sm mb-2">© {new Date().getFullYear()} Critical Event Manager. All rights reserved.</p>
                <Link href="/" className="text-sm text-blue-500 hover:text-blue-400">
                    Return to Main Dashboard
                </Link>
            </div>
        </footer>
    );
}

export default Footer;