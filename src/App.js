import React from 'react';
import 'antd/dist/antd.css';
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
