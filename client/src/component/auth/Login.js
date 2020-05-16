import React, { useState } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { Button } from 'react-bootstrap';

import { login } from '../../redux/action/auth';
import { setAlert } from '../../redux/action/alert';

import PropTypes from 'prop-types';

import DisplayValidation from '../DisplayValidation';

const Login = ({ login, history, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: 'upadesh.ng@gmail.com',
    password: '123456',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    login(email, password, history);
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }
  return (
    <>
      {/* <DisplayValidation validationErrors={this.props.validationData} /> */}

      <h1 className='large text-primary'>Sign In</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Sign Into Your Account
      </p>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            minLength='6'
            onChange={(e) => onChange(e)}
          />
        </div>

        <Button
          className='btn btn-primary submit-btn'
          onClick={(e) => onSubmit(e)}
        >
          Login
        </Button>
      </form>
      <p className='my-1'>
        Create an account{' '}
        <Link to='/register' className='login-link'>
          Sign Up
        </Link>
      </p>
    </>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
});

export default connect(mapStateToProps, { login })(withRouter(Login));
