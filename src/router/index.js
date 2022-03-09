import { Navigate, useRoutes } from 'react-router-dom';
import Login from '../view/login/Login';
import SignUp from '../view/SignUp/SignUp';
import Dashboard from '../view/dashboard/Dashboard';
import { useAuthContext } from '../auth/AuthContext';
import Header from '../components/header/Header';

const Router = () => {
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
                { path: 'dumanagement', element: <Dashboard /> },
            ],
        },
        {
            path: '/signup',
            element: <SignUp />,
        },
    ]);
};

export default Router;
