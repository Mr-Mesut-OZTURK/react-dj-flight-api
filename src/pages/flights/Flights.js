import React from 'react'
import { useSelector } from 'react-redux'

import Lottie from "react-lottie"
import loading from "../../assets/lotti/loading.json"
import FlightCard from '../../components/flightCard/FlightCard';


const Flights = () => {

    const flights = useSelector(state => state.flightReducer)


    if (flights.length === 0) {
        return (

            <div className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
                <Lottie
                    options={{
                        animationData: loading
                    }}
                />
            </div>
        )
    }

    return (
        <div className="container py-4">
            <div className="row mx-1">
                    {
                        flights.map((flight) => (
                            <FlightCard key={flight.id} flight={flight} />
                        ))
                    }
            </div>
        </div>
    )
}

export default Flights
