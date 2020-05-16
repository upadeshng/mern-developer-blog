import {
  SIGNUP,
  GET_TEST,
  VALIDATION_ERROR,
  USER_LOADED,
  AUTH_ERROR,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ACCOUNT,
  ACCOUNT_DELETED,
} from './action.js';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADED: {
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        loading: false,
      };
    }

    case LOGIN_SUCCESS: {
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };
    }

    case LOGIN_FAIL: {
      // localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    }

    case REGISTER_SUCCESS: {
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };
    }

    case REGISTER_FAIL: {
      // localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    }

    case AUTH_ERROR: {
      // localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    }

    case LOGOUT: {
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    }

    case SIGNUP: {
      return {
        ...state,
        data: { data: 123 },
        loading: false,
      };
    }

    case CLEAR_ACCOUNT: {
      return {
        ...state,
        profile: null,
        repos: [],
        loading: false,
      };
    }
    case ACCOUNT_DELETED: {
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    }

    case VALIDATION_ERROR: {
      return {
        ...state,
        validationData: action.payload,
        loading: false,
      };
    }

    case GET_TEST: {
      return {
        ...state,
        data: { data: 123 },
        loading: false,
      };
    }

    default: {
      return state;
    }
  }
};
