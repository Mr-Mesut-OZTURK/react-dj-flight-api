import {
    LOGIN_IS_SUCCESS,
    LOGOUT_IS_SUCCESS,
} from "./actionTypes";


export const LoginAction = (token) => {
    return {
        type: LOGIN_IS_SUCCESS,
        payload: token
    }
}

export const LogoutAction = () => {
    return {
        type: LOGOUT_IS_SUCCESS,
        payload: ''
    }
}