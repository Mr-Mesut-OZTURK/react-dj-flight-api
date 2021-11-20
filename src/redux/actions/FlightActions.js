import { GET_FLIGHTS_IS_SUCCESS } from "./actionTypes";


export const FlightAction = (data) => {
    return {
        type: GET_FLIGHTS_IS_SUCCESS,
        payload: data
    }
}


