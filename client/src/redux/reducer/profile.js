import {
  GET_PROFILE,
  PROFILE_ERROR,
  GET_EDUCATION,
  EDUCATION_ERROR,
  EXPERIENCE_ERROR,
  UPDATE_PROFILE,
  CLEAR_ACCOUNT,
  GET_ALL_PROFILES,
  GET_GITHUB,
  GITHUB_ERROR,
  GET_ALL_POSTS,
  POST_ERROR,
} from '../action/types';

const initialState = {
  loading: true,
  profile: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GITHUB: {
      return {
        ...state,
        github: action.payload,
        loading: false,
      };
    }

    case GITHUB_ERROR: {
      return {
        ...state,
        github: null,
        loading: false,
      };
    }

    case GET_ALL_PROFILES: {
      return {
        ...state,
        profileListing: action.payload,
        loading: false,
      };
    }

    case GET_EDUCATION: {
      return {
        ...state,
        education: action.payload,
        loading: false,
      };
    }

    case GET_PROFILE: {
      return {
        ...state,
        profile: action.payload,
        loading: false,
      };
    }

    case UPDATE_PROFILE: {
      return {
        ...state,
        profile: action.payload,
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

    case PROFILE_ERROR: {
      return {
        ...state,
        error: action.payload,
        loading: false,
        profile: null,
      };
    }

    default: {
      return state;
    }
  }
};
