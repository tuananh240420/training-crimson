import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
const Dashboard = () => {
    const navigate = useNavigate();
    return (
        <>
            <div>Dashboard</div>
            <button onClick={() => navigate('ade')}>To Ade</button>
            <Outlet />
        </>
    );
};

export default Dashboard;
