import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

function HomeLayout({ children }) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
            <NavBar />
            <main className="pt-16">
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default HomeLayout;