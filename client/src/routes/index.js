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

import { loadUser } from '../redux/action/auth';

const Routing = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  // localStorage.removeItem('token');

  return (
    <div>
      <Router>
        <div className='App'>
          <Navbar />
          <Route exact path='/' component={Landing} />

          <section className='container'>
            <Alert />

            <Switch>
              {/* <GuestRoute exact path='/register' component={Register} /> */}
              {/* <GuestRoute exact path='/login' component={Login} /> */}

              <ProtectedRoute exact path='/dashboard' component={Dashboard} />
              <ProtectedRoute
                exact
                path='/profile/create'
                component={ProfileCreate}
              />

              <ProtectedRoute
                exact
                path='/profile/edit'
                component={ProfileEdit}
              />

              <ProtectedRoute
                exact
                path='/profile/add-education'
                component={ProfileAddEducation}
              />

              <ProtectedRoute
                exact
                path='/profile/add-experience'
                component={ProfileAddExperience}
              />

              <Route exact path='/posts' component={PostListing} />

              <Route exact path='/profile/:id' component={Profile} />

              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/profiles' component={ProfileListing} />
              <Route exact path='/post/:id' component={PostView} />
            </Switch>
          </section>
        </div>
      </Router>
    </div>
  );
};

export default connect(null)(Routing);
