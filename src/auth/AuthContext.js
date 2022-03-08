import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import { createContext } from 'react';

const AuthContext = createContext();
export const useAuthContext = () => {
    return useContext(AuthContext);
};
const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState();
    return <AuthContext.Provider value={{ isAuth, setIsAuth }}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
    children: PropTypes.any,
};

export default AuthProvider;
