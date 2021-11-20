import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux'

const PublicRoute = () => {

    const isLogin = useSelector(state => state.loginReducer)

    return (isLogin.length ? <Navigate to="/" /> : <Outlet />)

};

export default PublicRoute;