import React, { Children, useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);  //object of location data, state, pathname

    if (user) {
        return children;
    }

    else {
        return <Navigate to='/auth/login' replace state={{ from: location }} />   //set state as an object
    }
};

export default PrivateRoute;