import { Navigate, useRoutes } from 'react-router-dom';
import { useAuthContext } from '../auth/AuthContext';
import Login from '../view/Login/Login';
import SignUp from '../view/SignUp/SignUp';
import Dashboard from '../view/Dashboard/Dashboard';
import Header from '../components/Header/Header';
import Room from '../view/Room/Room';
import User from '../view/User/User';
import Report from '../view/Report/Report';
import Du from '../view/Du/Du';
import { Staff, Assets, DeliveryUnit, DeviceType, Owner, Project } from '../view/Du/pages';

const Router = () => {
    const { isAuth } = useAuthContext();

    return useRoutes([
        {
            path: '/login',
            element: <Login />,
        },

        {
            path: '/',
            // TODO: Set tạm để code
            // element: isAuth ? <Header /> : <Navigate to="/login" />,
            element: <Header />,
            children: [
                { path: 'dashboard', element: <Dashboard /> },
                { path: 'room', element: <Room /> },
                { path: 'report', element: <Report /> },
                { path: 'user', element: <User /> },
                {
                    path: 'dumanagement',
                    element: <Du />,
                    children: [
                        { path: 'staff', element: <Staff /> },
                        { path: 'assets', element: <Assets /> },
                        { path: 'devicetype', element: <DeviceType /> },
                        { path: 'owner', element: <Owner /> },
                        { path: 'project', element: <Project /> },
                        { path: 'deliveryunit', element: <DeliveryUnit /> },
                    ],
                },
            ],
        },
        {
            path: '/signup',
            element: <SignUp />,
        },
    ]);
};

export default Router;
