import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
const PublicRoute = ({ children, isAuth, ...rest }) => {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                !isAuth ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/home',
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};

PublicRoute.propTypes = {
    children: PropTypes.any,
    isAuth: PropTypes.bool,
};

export default PublicRoute;
