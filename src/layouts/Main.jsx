import React from 'react';
import Navigation from '../components/Navigation';
import { Outlet } from 'react-router-dom';
import FooterBottom from '../components/Footer';
import { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <div>
            <Toaster />
            {/* navbar */}
            <Navigation />
            {/* outlet */}
            <div className='min-h-[calc(100vh-306px)]'><Outlet /></div>
            {/* footer */}
            <FooterBottom />

        </div>
    );
};

export default Main;