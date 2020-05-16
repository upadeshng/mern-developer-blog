import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
import { setAlert } from './alert';

// import constants
import {
  SIGNUP,
  GET_TEST,
  VALIDATION_ERROR,
  USER_LOADED,
  GET_AUTH,
  AUTH_ERROR,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ACCOUNT,
  ACCOUNT_DELETED,
} from './types';

// const url = 'http://localhost:5000';
const url = '';

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const response = await axios.get(`${url}/api/auth`);

    dispatch({ type: GET_AUTH, payload: response.data });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const register = ({ name, email, password }) => async (dispatch) => {
  try {
    const config = { headers: { 'Content-Type': 'Application/json' } };

    const body = JSON.stringify({ name, email, password });

    const response = await axios.post(`${url}/api/users`, body, config);

    dispatch({ type: REGISTER_SUCCESS, payload: response.data });

    // load user after register
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({ type: REGISTER_FAIL });
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    const config = { headers: { 'Content-Type': 'Application/json' } };

    const body = JSON.stringify({ email, password });

    const response = await axios.post(`${url}/api/auth`, body, config);

    dispatch({ type: LOGIN_SUCCESS, payload: response.data });

    // load user after login
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({ type: LOGIN_FAIL });
  }
};

// Logout / clear profile
export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};

// post signup
export const postSignup = (data, history) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${url}/api/users`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      dispatch({ type: GET_TEST, payload: { data: 'succeess' } });
      dispatch({ type: VALIDATION_ERROR, payload: { errors: null } });

      // store in local storage
      localStorage.setItem('jwt', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));

      // redirect to profile
      history.push('/profile');

      // Success 🎉
    } catch (error) {
      //   console.error(error.message);

      // validation errors
      if (error.response && error.response.data.errors) {
        console.error(error.response.data.errors);
        dispatch({
          type: VALIDATION_ERROR,
          payload: { errors: error.response.data.errors },
        });
      }
    }
  };
};
