import { GET_USER, USER_ERROR } from '../action/types';

const initialState = {
  user: null,
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER: {
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    }

    case USER_ERROR: {
      return {
        ...state,
        user: null,
        loading: false,
      };
    }

    default: {
      return state;
    }
  }
};
