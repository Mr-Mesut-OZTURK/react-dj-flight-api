import { GET_FLIGHTS_IS_SUCCESS } from '../actions/actionTypes'
import initialState from '../initialState'

const flightReducer = (state=initialState.flights, action) => {
    
    
    switch (action.type) {
        case GET_FLIGHTS_IS_SUCCESS:
            return action.payload
        default:
            return state
    }
}

export default flightReducer
