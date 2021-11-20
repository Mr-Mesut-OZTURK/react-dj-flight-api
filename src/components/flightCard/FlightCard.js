import React from 'react'
import {
    Card,
    CardBody,
    CardHeader
} from 'reactstrap'

const FlightCard = ({ flight }) => {
    console.log(flight)
    return (
        <Card className="my-3 px-0">
            <CardHeader className="alert alert-primary">
                <h3>
                    {flight.departure_city.name}
                    -
                    {flight.arrive_city.name}
                </h3>
            </CardHeader>
            <CardBody className="d-flex justify-content-around align-items-center" >
                <h5>
                    {flight.departure_airport.name}
                    -
                    {flight.arrive_airport.name}
                </h5>
                <p className="d-flex flex-column justify-content-center align-items-center">
                    <span>
                        {flight.flight_day}
                    </span>

                    <span>
                        {flight.flight_time}
                    </span>
                </p>
            </CardBody>
        </Card>
    )
}

export default FlightCard
