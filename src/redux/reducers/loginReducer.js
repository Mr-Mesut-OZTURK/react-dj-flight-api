import initialState from '../initialState';
import {
    LOGIN_IS_SUCCESS,
    LOGOUT_IS_SUCCESS,
} from "../actions/actionTypes";


const loginReducer = (state=initialState.isLogin, action) => {
    
    switch(action.type) {
        case LOGIN_IS_SUCCESS:
            localStorage.setItem('isLogin', action.payload)
            return action.payload
        case LOGOUT_IS_SUCCESS:
            localStorage.setItem('isLogin', action.payload)
            return action.payload
        default:
            // console.log(state)
            return state
    }
}

export default loginReducer
