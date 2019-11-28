import {
    AUTH_SET_USER,
    AUTH_USER_LOGIN,
    AUTH_USER_LOGOUT,
    AUTH_USER_LOGIN_FAILURE,
    AUTH_USER_LOGIN_SUCCESS,
} from '../actions/auth-actions/types';

const INITIAL_STATE = {
    user: null,
    loading: false,
    errorMessage: '',
};

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case AUTH_USER_LOGIN:
            return {
                ...state,
                loading: true,
                errorMessage: '',
            };
        case AUTH_USER_LOGIN_SUCCESS:
            return {
                ...INITIAL_STATE,
                user: payload,
                loading: false,
            };
        case AUTH_USER_LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: payload,
            };
        case AUTH_USER_LOGOUT:
            return {
                ...INITIAL_STATE,
            };
        case AUTH_SET_USER:
            return {
                ...INITIAL_STATE,
                user: payload,
            };
        default:
            return state;
    }
};
