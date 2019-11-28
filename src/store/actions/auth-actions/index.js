import User from '../../../mocks'
import {
  AUTH_SET_USER,
  AUTH_USER_LOGIN,
  AUTH_USER_LOGOUT,
  AUTH_USER_LOGIN_FAILURE,
  AUTH_USER_LOGIN_SUCCESS,
} from './types';

import { AsyncStorage } from 'react-native'
// export const resetFields = () => ({ type: AUTH_RESET_FIELDS });

export const setUser = user =>
  ({ type: AUTH_SET_USER, payload: getUserMinified(user) });

export const login =
  ({ email, password, navigate }) => (dispatch, getState) => {


    dispatch({ type: AUTH_USER_LOGIN });
    User.find(email).then(user => {
      if (user) {
        if (user.password === password) {

          const userMinified = getUserMinified(user);
          dispatch({ type: AUTH_USER_LOGIN_SUCCESS, payload: userMinified });
          AsyncStorage.setItem('movieUser', JSON.stringify(userMinified)).then(_ => {
            navigate('home');
          })
        } else {
          var errorMessage = 'invalid password.';
          dispatch({ type: AUTH_USER_LOGIN_FAILURE, payload: errorMessage });
        }

      } else {
        var errorMessage = 'User not found.';
        dispatch({ type: AUTH_USER_LOGIN_FAILURE, payload: errorMessage });

      }
    })

  };

export const logout = ({ navigate }) => (dispatch) => {
  dispatch({ type: AUTH_USER_LOGOUT });
  AsyncStorage.removeItem('movieUser').then(_ => {
    navigate('auth');
  })
};

const getUserMinified = (user) => {
  const {
    uid,
    email,
    name,
  } = user;

  return {
    uid,
    name,
    email
  };
};
