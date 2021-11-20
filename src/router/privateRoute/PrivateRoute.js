import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'


const PrivateRoute = () => {

    const isLogin = useSelector(state => state.loginReducer)

    return (isLogin.length ? <Outlet /> : <Navigate to="/"/>)


};

export default PrivateRoute;