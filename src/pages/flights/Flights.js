import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FlightAction } from '../../redux/actions/FlightActions'
import { useSelector, useDispatch } from 'react-redux'

import Lottie from "react-lottie"
import loading from "../../assets/lotti/loading.json"
import FlightCard from '../../components/flightCard/FlightCard';


const Flights = () => {

    const dispatch = useDispatch()
    const flights = useSelector(state => state.flightReducer)
    console.log(flights)
    // const [flights, setData] = useState({})

    useEffect(() => {
        setTimeout(() => {
            fetchData()
        }, 5000)
    }, [])


    const fetchData = () => {
        axios.get('https://react-dj-flight-app.herokuapp.com/api/flights/')
            .then(({ data }) => {
                // console.log("axios", data)
                dispatch(FlightAction(data))
            })
            .catch(error => console.error(error))
    }

    if (flights.length == 0) {
        return (

            <div className="d-flex justify-content-center align-items-center">
                <Lottie
                    options={{
                        animationData: loading
                    }}
                />
            </div>
        )
    }

    return (
        <div className="container pt-4">
            <div className="row">
                {/* <div> */}
                    {
                        flights.map((flight, index) => (
                            <FlightCard key={index} flight={flight} />
                        ))
                    }
                {/* </div> */}
            </div>
        </div>
    )
}

export default Flights
