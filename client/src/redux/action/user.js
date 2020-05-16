import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
import { setAlert } from './alert';

import { GET_USER, USER_ERROR } from './types';

const url = '';

export const getUserById = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`${url}/api/users/${id}`);

    dispatch({ type: GET_USER, payload: response.data });
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
