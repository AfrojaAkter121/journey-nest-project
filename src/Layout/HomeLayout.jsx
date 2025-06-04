import React from 'react';
import Home from '../Pages/Home';
import { Outlet } from 'react-router';

const HomeLayout = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default HomeLayout;