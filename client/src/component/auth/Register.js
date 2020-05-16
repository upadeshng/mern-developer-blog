import React, { useState } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { Button } from 'react-bootstrap';

import { register } from '../../redux/action/auth';
import { setAlert } from '../../redux/action/alert';
import PropTypes from 'prop-types';

import DisplayValidation from '../DisplayValidation';

const Register = ({ setAlert, register, history, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      setAlert('password do not match', 'danger');
    } else {
      register({ name, email, password }, history);
    }
  };

  // Redirect to Dashboard after register
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <>
      {/* <DisplayValidation validationErrors={this.props.validationData} /> */}

      <h1 className='large text-primary'>Sign Up</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Create Your Account
      </p>
      <form
        className='form'
        action='create-profile.html'
        onSubmit={(e) => onSubmit(e)}
      >
        <div className='form-group'>
          <input
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={(e) => onChange(e)}
          />
        </div>
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
        <div className='form-group'>
          <input
            type='password'
            placeholder='Confirm Password'
            name='password2'
            value={password2}
            minLength='6'
            onChange={(e) => onChange(e)}
          />
        </div>

        <Button
          className='btn btn-primary submit-btn'
          onClick={(e) => onSubmit(e)}
        >
          Register
        </Button>
      </form>
      <p className='my-1'>
        Already have an account?
        <Link to='/login' className='login-link'>
          Sign In
        </Link>
      </p>
    </>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  validationData: state.authReducer.validationData,
  isAuthenticated: state.authReducer.isAuthenticated,
});

export default connect(mapStateToProps, { register, setAlert })(
  withRouter(Register)
);
