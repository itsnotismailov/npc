import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';

const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/menu' element={<Menu/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default MyRoutes;