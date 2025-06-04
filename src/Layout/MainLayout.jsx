import React from 'react';

import { Outlet } from 'react-router';
import Navbar from '../Component/Navbar';

const MainLayout = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <div className='max-w-7xl mx-auto'>
            <Outlet></Outlet>
            </div>

        </div>
    );
};

export default MainLayout;