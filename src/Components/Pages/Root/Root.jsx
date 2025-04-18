import React from 'react';
import Home from '../../Home/Home';
import Footer from '../../Footer/Footer';
import { Outlet } from 'react-router';
import Header from '../../Header/Header';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className='container mx-auto'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;