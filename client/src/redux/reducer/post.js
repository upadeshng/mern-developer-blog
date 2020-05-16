import {
  GET_POST,
  GET_ALL_POSTS,
  POST_ERROR,
  ADD_COMMENT,
  REMOVE_COMMENT,
} from '../action/types';

const initialState = {
  loading: true,
  posts: [],
  post: null,
  comment: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT: {
      return {
        ...state,
        post: { ...state.post, comments: action.payload }, // whatever post is, just replace new comment
        loading: false,
      };
    }

    case REMOVE_COMMENT: {
      return {
        ...state,
        post: {
          ...state.post,
          comments: state.post.comments.filter(
            (comment) => comment._id != action.payload // for each comment, read all comment except deleted one
          ),
          loading: false,
        },
      };
    }

    case GET_ALL_POSTS: {
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    }

    case GET_POST: {
      return {
        ...state,
        post: action.payload,
        loading: false,
      };
    }

    case POST_ERROR: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }

    default: {
      return state;
    }
  }
};
