import React from 'react';
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
    const navigate = useNavigate();
    return (
        <>
            <button onClick={() => navigate('ade')}>To Ade</button>
        </>
    );
};

export default Dashboard;
