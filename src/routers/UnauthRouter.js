import React from 'react';
import { Route, Routes } from 'react-router';
import Home from '../pages/public/Home';
import Auth from '../pages/public/Auth';

const UnauthRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='auth' element={<Auth/>}></Route>
        </Routes>
    )
}

export default UnauthRouter
