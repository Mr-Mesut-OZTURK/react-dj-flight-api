import React from 'react'
import {
    Card,
    CardBody,
    CardHeader,
} from 'reactstrap'
import { Link } from 'react-router-dom'

const FlightCard = ({ flight }) => {


    return (
        <Card className="my-3 px-0 shadow">
            <CardHeader className="alert alert-primary d-flex flex-row justify-content-between">
                <h3>
                    {flight.departure_city.name}
                    -
                    {flight.arrive_city.name}
                </h3>
                <span className="badge bg-secondary d-flex align-items-center fs-6">
                    {flight.price}$
                </span>
                <Link
                    to={`/flightdetail/${flight.id}`}
                    className="btn btn-warning text-dark fw-bold"
                >
                    DETAIL
                </Link>

            </CardHeader>
            <CardBody className="d-flex justify-content-between align-items-center" >
                <h5>
                    {flight.departure_airport.name}
                    <br />
                    {flight.arrive_airport.name}
                </h5>
                <p className="d-flex flex-column justify-content-center align-items-strech gap-2">
                    <span className="text-nowrap badge bg-primary">
                        {flight.flight_day}
                    </span>

                    <span className="text-nowrap badge bg-success">
                        {flight.flight_time}
                    </span>
                </p>
            </CardBody>
        </Card>
    )
}

export default FlightCard
