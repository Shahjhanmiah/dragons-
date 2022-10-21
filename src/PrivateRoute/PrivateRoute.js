import React, { useContext, useState } from 'react';
import { Nav, Spinner } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const PrivateRoute = ({childern}) => {
    const {user,loading}  = useContext(AuthContext);
    const location = useState();

    if(loading){
        return <Spinner animation='border' variant='primary'></Spinner>
    }

    if(!user){
        return <Navigate to ="/login"state={{from:location}} replace></Navigate>
    }
    return childern;
};

export default PrivateRoute;