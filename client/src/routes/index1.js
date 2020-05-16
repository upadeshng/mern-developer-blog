import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store from '../redux/store';
import { connect } from 'react-redux';

import { ProtectedRoute } from './protectedRoute';
import { GuestRoute } from './guestRoute';
import Navbar from '../component/layout/Navbar';
import Landing from '../component/layout/Landing';
import Login from '../component/auth/Login';
import Register from '../component/auth/Register';
import Profile from '../features/profile/view';
import ProfileCreate from '../features/profile/create';
import ProfileEdit from '../features/profile/edit';
import ProfileAddEducation from '../features/profile/addEducation';
import ProfileAddExperience from '../features/profile/addExperience';
import ProfileListing from '../features/profiles';
import PostListing from '../features/posts';
import PostView from '../features/post';
import Alert from '../component/layout/Alert';
import Dashboard from '../features/dashboard';
import { Link } from 'react-router-dom';

import { loadUser } from '../redux/action/auth';
import { logout } from '../redux/action/auth';

const Routing = ({ auth, logout }) => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  const onLogout = () => {
    logout();
  };

  // localStorage.removeItem('token');
  // if (!auth.isAuthenticated === false) return <></>;

  return (
    <div>
      <Router>
        {auth.isAuthenticated === false && (
          <Link to='/register' className='btn btn-light'>
            Sign Up
          </Link>
        )}
        {auth.isAuthenticated === false && (
          <Link to='/login' className='btn btn-light'>
            Login
          </Link>
        )}
        {auth.isAuthenticated && (
          <Link to='#' onClick={(e) => onLogout(e)}>
            Logout
          </Link>
        )}
        {auth.isAuthenticated && <Link to='/posts'>Posts</Link>}
        ||
        {auth.isAuthenticated && <Link to='/dashboard'>Dashboard</Link>}
        <ProtectedRoute exact path='/dashboard' component={Dashboard} />
        <ProtectedRoute exact path='/posts' component={PostListing} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.authReducer,
});
export default connect(mapStateToProps, { logout })(Routing);
