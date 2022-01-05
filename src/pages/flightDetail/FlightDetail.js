import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import axios from 'axios'

import {
    Card,
    CardBody,
    CardHeader,
} from 'reactstrap'

import Lottie from "react-lottie"
import loading from "../../assets/lotti/loading.json"
import Dropdown from "../../components/dropdown"



const FlightDetail = () => {

    const { id } = useParams()
    const flight = useSelector(state => state.flightReducer).filter(item => item.id.toString() === id)[0]
    const key = useSelector(state => state.loginReducer)
    console.log(key)

    const [userType, setUserType] = useState(1)
    const [data, setData] = useState([
        {
            "id": 1,
            "type": "Normal",
            "price_multiplier": 1.0
        }
    ])

    // const [userType, setUserType] = useState(
    //     {
    //         "id": 1,
    //         "type": "Normal",
    //         "price_multiplier": 1.0
    //     }
    // )

    useEffect(() => {
        hadleFetch()
    }, [])

    const hadleFetch = () => {
        axios.get('https://react-dj-flight-api.herokuapp.com/api/user-types/')
            .then((response) => setData(response.data))
            .catch((error) => console.log(error))
    }

    const handleClick = () => {
        const data = {
            // "user": key,
            // "user_type": userType,
            // "flight": flight.id,
            // "checkin": false
            "checkin": false,
            "user": 1,
            "user_type": 1,
            "flight": 3
        }
        axios.post('https://react-dj-flight-api.herokuapp.com/api/reservations/', data)
            .then((response) => alert(response))
            .catch((error) => console.log(error))
    }



    if (!flight) {
        return (

            <div className="d-flex justify-content-center align-items-center w-50 mx-auto mt-5">
                <Lottie
                    options={{
                        animationData: loading
                    }}
                />
            </div>
        )
    }

    return (
        <div className="container">

            <Card className="mt-3 px-0 border-0">
                <CardHeader className="alert alert-primary text-center">
                    <h3>
                        {flight.departure_city.name}
                        -
                        {flight.arrive_city.name}
                    </h3>
                </CardHeader>
                <CardBody className="alert alert-primary" >
                    <h5 className="d-flex justify-content-around">
                        <span>
                            {flight.departure_airport.name}
                        </span>
                        <span>
                            {flight.arrive_airport.name}
                        </span>
                    </h5>
                    <p className="d-flex flex-column justify-content-center align-items-strech gap-2">
                        <span className="text-nowrap badge bg-primary py-2">
                            {flight.flight_day}
                        </span>

                        <span className="text-nowrap badge bg-success py-2">
                            {flight.flight_time}
                        </span>
                    </p>
                </CardBody>
            </Card>

            <div className="d-flex align-items-center justify-content-center">
                <span className="badge bg-secondary d-flex align-items-center fs-6 p-2">
                    {flight.price * userType.price_multiplier}$
                </span>
                <Dropdown
                    setUserType={setUserType}
                    data={data}
                />
                <span className="alert alert-primary py-2">
                    {userType.type}
                </span>
            </div>
            <button
                className="btn btn-warning text-dark fw-bold w-100"
                onClick={handleClick}
            >
                BUY
            </button>

        </div>


    )
}

export default FlightDetail
