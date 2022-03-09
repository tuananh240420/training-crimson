import React from 'react';
import 'antd/dist/antd.css';
import AuthProvider from './auth/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import './i18next';

const App = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Router></Router>
            </AuthProvider>
        </BrowserRouter>
    );
};

export default App;
