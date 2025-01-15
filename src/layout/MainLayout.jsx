import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/shared/Footer';
import NavScrollExample from '../components/shared/Navbar';

const MainLayout = () => {
    return (
        <div>
            <NavScrollExample></NavScrollExample>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;