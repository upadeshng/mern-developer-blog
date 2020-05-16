import { combineReducers } from 'redux';

import authReducer from './reducer/auth';
import profileReducer from './reducer/profile';
import alertReducer from './reducer/alert';
import postReducer from './reducer/post';
import userReducer from './reducer/user';

export default combineReducers({
  authReducer: authReducer,
  profileReducer: profileReducer,
  alertReducer: alertReducer,
  postReducer: postReducer,
  userReducer: userReducer,
});
