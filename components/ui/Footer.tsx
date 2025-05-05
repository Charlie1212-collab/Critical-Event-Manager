import React from "react";
import Link from "next/link";

function Footer() {
    return (
        <footer className="bg-dark-card border-t border-dark-border py-4 px-6">
            <div className="flex justify-between items-center">
                <div>
                    <p className="text-sm text-dark-text-gray">© 2025 Critical Event Manager. All rights reserved.</p>
                </div>
                <div className="flex space-x-4">
                    <Link href="#" className="text-sm text-dark-text-gray hover:text-dark-text-white">Privacy Policy</Link>
                    <Link href="#" className="text-sm text-dark-text-gray hover:text-dark-text-white">Terms of Service</Link>
                    <Link href="#" className="text-sm text-dark-text-gray hover:text-dark-text-white">Contact</Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;