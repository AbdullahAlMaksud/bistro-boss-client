import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/footer/Footer';
import Navbar from '../pages/shared/navbar/Navbar';

const MainLayouts = () => {
    return (
        <main>
            <section className='fixed z-50 w-full'>
                <Navbar />
            </section>
            <section>
                <Outlet />
            </section>
            <section>
                <Footer />
            </section>
        </main>
    );
};

export default MainLayouts;