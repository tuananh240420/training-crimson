import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../header/Header';
const Dashboard = () => {
    const navigate = useNavigate();
    return (
        <>
            <Header></Header>
            <button onClick={() => navigate('ade')}>To Ade</button>
            <Outlet />
        </>
    );
};

export default Dashboard;
