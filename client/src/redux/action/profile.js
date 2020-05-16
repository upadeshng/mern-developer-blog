import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
import { setAlert } from './alert';

import {
  GET_PROFILE,
  PROFILE_ERROR,
  GET_EDUCATION,
  EDUCATION_ERROR,
  EXPERIENCE_ERROR,
  UPDATE_PROFILE,
  CLEAR_ACCOUNT,
  ACCOUNT_DELETED,
  GET_EXPERIENCE,
  GET_ALL_PROFILES,
  GET_GITHUB,
  GITHUB_ERROR,
  GET_ALL_POSTS,
  POST_ERROR,
} from './types';

const url = '';

export const getAllPosts = () => async (dispatch) => {
  try {
    // headers
    const config = { headers: { 'Content-Type': 'application/json' } };

    // get
    const response = await axios.get(`${url}/api/post`, config);

    // dispatch
    dispatch({ type: GET_ALL_POSTS, payload: response.data });
  } catch (err) {
    // dispatch error
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getGithubRepo = (githubusername) => async (dispatch) => {
  try {
    // headers
    const config = { headers: { 'Content-Type': 'application/json' } };

    // get
    const response = await axios.get(
      `${url}/api/profile/github/${githubusername}`,
      config
    );

    // dispatch
    dispatch({ type: GET_GITHUB, payload: response.data });
  } catch (err) {
    // dispatch error
    dispatch({
      type: GITHUB_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getProfileByUserId = (id) => async (dispatch) => {
  try {
    // headers
    const config = { headers: { 'Content-Type': 'application/json' } };

    // get
    const response = await axios.get(`${url}/api/profile/user/${id}`, config);

    // dispatch
    dispatch({ type: GET_PROFILE, payload: response.data });
  } catch (err) {
    // dispatch error
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getAllProfiles = () => async (dispatch) => {
  try {
    // headers
    const config = { headers: { 'Content-Type': 'application/json' } };

    // get
    const response = await axios.get(`${url}/api/profile`, config);

    // dispatch
    dispatch({ type: GET_ALL_PROFILES, payload: response.data });
  } catch (err) {
    // dispatch error
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const deleteAccount = () => async (dispatch) => {
  if (!window.confirm('Are you sure? This can not be undone!')) return;

  try {
    // headers
    const config = { headers: { 'Content-Type': 'application/json' } };

    // get
    const response = await axios.delete(`${url}/api/profile`, config);

    // dispatch
    dispatch({ type: CLEAR_ACCOUNT });
    dispatch({ type: ACCOUNT_DELETED });

    // alert success
    dispatch(setAlert('Your account has been permanently deleted'));
  } catch (err) {
    // dispatch
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const deleteEducation = (id) => async (dispatch) => {
  if (!window.confirm('Are you sure?')) return;

  try {
    // headers
    const config = { headers: { 'Content-Type': 'application/json' } };

    // get
    const response = await axios.delete(
      `${url}/api/profile/education/${id}`,
      config
    );

    // dispatch
    dispatch({ type: UPDATE_PROFILE, payload: response.data });

    // alert success
    dispatch(setAlert('Education removed', 'success'));
  } catch (err) {
    // dispatch
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const deleteExperience = (id) => async (dispatch) => {
  if (!window.confirm('Are you sure?')) return;

  try {
    // headers
    const config = { headers: { 'Content-Type': 'application/json' } };

    // get
    const response = await axios.delete(
      `${url}/api/profile/experience/${id}`,
      config
    );

    // dispatch
    dispatch({ type: UPDATE_PROFILE, payload: response.data });

    // alert success
    dispatch(setAlert('Experience removed', 'success'));
  } catch (err) {
    // dispatch
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const addExperience = (formData, history) => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    // headers
    const config = { headers: { 'Content-Type': 'application/json' } };

    // put
    const response = await axios.put(
      `${url}/api/profile/experience`,
      formData,
      config
    );

    // dispatch
    dispatch({ type: GET_EXPERIENCE, payload: response.data });

    // redirect
    history.push('/dashboard');
  } catch (err) {
    const errors = err.response.data.errors;

    // error alert
    if (errors) {
      errors.filter((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    // dispatch
    dispatch({
      type: EXPERIENCE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const addEducation = (formData, history) => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    // headers
    const config = { headers: { 'Content-Type': 'application/json' } };

    // put
    const response = await axios.put(
      `${url}/api/profile/education`,
      formData,
      config
    );

    // dispatch
    dispatch({ type: GET_EDUCATION, payload: response.data });

    // redirect
    history.push('/dashboard');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: EDUCATION_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const createProfile = (formData, history, edit = false) => async (
  dispatch
) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    // headers
    const config = { headers: { 'Content-Type': 'application/json' } };

    // post
    const response = await axios.post(`${url}/api/profile`, formData, config);

    // dispatch
    dispatch({ type: GET_PROFILE, payload: response.data });

    // redirect
    history.push('/dashboard');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getCurrentProfile = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const config = { headers: { 'Content-Type': 'Application/json' } };

    const response = await axios.get(`${url}/api/profile/me`, config);

    console.log('reppp prof', response);
    dispatch({ type: GET_PROFILE, payload: response.data });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// export const getProfile = (id) => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.get(`${url}/api/profile/user/${id}`, '', {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('jwt')}`,
//           'Content-Type': 'application/json',
//         },
//       });

//       dispatch({ type: GET_PROFILE, payload: response.data });
//     } catch (err) {
//       dispatch({
//         type: PROFILE_ERROR,
//         payload: { msg: err.response.statusText, status: err.response.status },
//       });
//     }
//   };
// };

export const updateBasicProfile = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${url}/api/profile`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwt')}`,
          'Content-Type': 'application/json',
        },
      });

      dispatch({ type: GET_PROFILE, payload: response.data });
    } catch (error) {}
  };
};
