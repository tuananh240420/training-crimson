import { Navigate, useRoutes } from 'react-router-dom';
import Login from '../view/login/Login';
import Dashboard from '../view/dashboard/Dashboard';
import { useAuthContext } from '../auth/AuthContext';

const Div = () => {
    return <div>Test</div>;
};

const Router = ({ children }) => {
    const { isAuth } = useAuthContext();
    console.log('contex', isAuth);

    return useRoutes([
        {
            path: '/login',
            element: <Login />,
            // children: [{ path: 'login', element: <Login /> }],
        },
        {
            path: '/dashboard',
            element: isAuth ? <Dashboard /> : <Navigate to="/login" />,
            children: [{ path: 'ade', element: <Div /> }],
        },
        {
            path: '/',
            element: isAuth ? <Navigate to="/dashboard" /> : <Navigate to="/login" />,
        },
    ]);
};

export default Router;
