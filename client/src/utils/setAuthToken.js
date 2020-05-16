import axios from 'axios';

const setAuthToken = (token) => {
  /* if has token then add token in headers Else remove header for token */
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

export default setAuthToken;
