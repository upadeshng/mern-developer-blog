import React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import store from './redux/store';
// import Routing from './routes';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ProtectedRoute } from './routes/protectedRoute';

import Login from './component/auth/Login';
import Register from './component/auth/Register';
import Dashboard from './features/dashboard';
import PostListing from './features/posts';
import { Link } from 'react-router-dom';

// import { loadUser } from './component/auth/action';
// import setAuthToken from './utils/setAuthToken';

// if (localStorage.token) {
// setAuthToken(localStorage.token);
// }

const App = () => {
  // localStorage.removeItem('token');
  return (
    <Provider store={store}>
      {/* <Routing /> */}
      <Router>
        <Link to='/register' className='btn btn-primary'>
          Sign Up
        </Link>
        <Link to='/login' className='btn btn-light'>
          Login
        </Link>
        <Link to='/posts'>Posts</Link> ||
        <Link to={'/dashboard'}>Dashboard</Link>
        <ProtectedRoute exact path='/dashboard' component={Dashboard} />
        <ProtectedRoute exact path='/posts' component={PostListing} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
      </Router>
    </Provider>
  );
};

export default App;
