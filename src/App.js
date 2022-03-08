import React, { useContext } from 'react';
import 'antd/dist/antd.css';
import Button from './components/Button/Button';
import AuthProvider from './auth/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';
const App = () => {
    // const { isAuth, setIsAuth } = useContext(AuthContext);
    // console.log({ isAuth, setIsAuth });
    return (
        <BrowserRouter>
            <AuthProvider>
                <Router>
                    <div></div>
                </Router>
            </AuthProvider>
        </BrowserRouter>
    );
};

export default App;
