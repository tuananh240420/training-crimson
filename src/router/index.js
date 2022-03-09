import { Navigate, useRoutes } from 'react-router-dom';
import Login from '../view/login/Login';
import Dashboard from '../view/dashboard/Dashboard';
import { useAuthContext } from '../auth/AuthContext';
import Header from '../view/header/Header';

const Router = ({ children }) => {
    const { isAuth } = useAuthContext();
    console.log('contex', isAuth);

    return useRoutes([
        {
            path: '/login',
            element: <Login />,
        },

        {
            path: '/',
            element: isAuth ? <Header /> : <Navigate to="/login" />,
            children: [
                { path: 'dashboard', element: <Dashboard /> },
                { path: 'room', element: <Dashboard /> },
                { path: 'report', element: <Dashboard /> },
                { path: 'user', element: <Dashboard /> },
                { path: 'du-managment', element: <Dashboard /> },
            ],
        },
    ]);
};

export default Router;
