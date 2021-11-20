import { combineReducers } from 'redux'
import loginReducer from './reducers/loginReducer'
import flightReducer from './reducers/flightReducer'

export default combineReducers({
    loginReducer,
    flightReducer,
})