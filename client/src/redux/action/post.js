import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
import { setAlert } from './alert';

import {
  GET_POST,
  GET_ALL_POSTS,
  POST_ERROR,
  ADD_COMMENT,
  REMOVE_COMMENT,
} from './types';

const url = '';

// Delete comment
export const deleteComment = (postId, commentId) => async (dispatch) => {
  if (!window.confirm('Are you sure?')) return;

  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    // headers
    const config = { headers: { 'Content-Type': 'application/json' } };

    // get
    const response = await axios.delete(
      `${url}/api/posts/comment/${postId}/${commentId}`
    );

    // dispatch
    dispatch({ type: REMOVE_COMMENT, payload: commentId });

    // alert
    dispatch(setAlert('Comment added', 'success'));
  } catch (err) {
    // dispatch error
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add comment
export const addComment = (postId, formData) => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    // headers
    const config = { headers: { 'Content-Type': 'application/json' } };

    // get
    const response = await axios.put(
      `${url}/api/posts/comment/${postId}`,
      formData,
      config
    );

    // dispatch
    dispatch({ type: ADD_COMMENT, payload: response.data });

    // alert
    dispatch(setAlert('Comment added', 'success'));
  } catch (err) {
    // dispatch error
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getPost = (id) => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    // headers
    const config = { headers: { 'Content-Type': 'application/json' } };

    // get
    const response = await axios.get(`${url}/api/posts/${id}`, config);

    // dispatch
    dispatch({ type: GET_POST, payload: response.data });
  } catch (err) {
    // dispatch error
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getAllPosts = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    // headers
    const config = { headers: { 'Content-Type': 'application/json' } };

    // get
    const response = await axios.get(`${url}/api/posts`, config);

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
