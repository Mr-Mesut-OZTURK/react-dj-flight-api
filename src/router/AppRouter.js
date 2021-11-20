import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import PrivateRoute from './privateRoute/PrivateRoute'
import PublicRoute from './publicRoute/PublicRoute'

import NavbarMenu from "../components/navbar/Navbar"

import Home from '../pages/home/Home'
import Flights from '../pages/flights/Flights'
import FlightDetail from '../pages/flightDetail/FlightDetail'
import Profile from '../pages/profile/Profile'
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'


const AppRouter = () => {
    return (
        <Router>

            <NavbarMenu />

            <Routes>

                <Route exact path="/" element={<Home />} />
                <Route path="/flights" element={<Flights />} />
                <Route path="/flightDetail" element={<FlightDetail />} />

                <Route path="/login" element={<PublicRoute/>} >
                    <Route path="/login" element={<Login />} />
                </Route>
                <Route path="/register" element={<PublicRoute/>} >
                    <Route path="/register" element={<Register />} />
                </Route>

                <Route path="/profile" element={<PrivateRoute/>} >
                    <Route path="/profile" element={<Profile/>} />
                </Route>

            </Routes>

        </Router>
    )
}

export default AppRouter
