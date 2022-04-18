import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state

    }
}
export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } });

export const getAuthUserData = () => (dispatch) => {
    return authAPI.me()
        .then(r => {
            if (r.data.resultCode === 0) {
                let { id, login, email } = r.data.data;
                dispatch(setAuthUserData(id, email, login, true))
            }

        })
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(r => {
            if (r.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let errorMessage = r.data.messages.length > 0 ? r.data.messages[0] : 'some error';
                dispatch(stopSubmit('login', { _error: errorMessage }))
            }

        })
}

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(r => {
            if (r.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }

        })
}

export default authReducer;