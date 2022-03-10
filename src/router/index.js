import { Navigate, useRoutes } from 'react-router-dom';
import Login from '../view/Login/Login';
import SignUp from '../view/SignUp/SignUp';
import Dashboard from '../view/Dashboard/Dashboard';
import { useAuthContext } from '../auth/AuthContext';
import Header from '../components/Header/Header';

const Router = () => {
    const { isAuth } = useAuthContext();

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
