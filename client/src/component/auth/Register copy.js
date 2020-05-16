import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { postSignup } from './action';

import DisplayValidation from '../DisplayValidation';

class Register extends Component {
  handleSubmit = (e) => {
    this.props.postSignup(this.state, this.props.history);
    // console.log(e);
  };
  render() {
    return (
      <>
        <DisplayValidation validationErrors={this.props.validationData} />

        <h1 className='large text-primary'>Sign Up</h1>
        <p className='lead'>
          <i className='fas fa-user'></i> Create Your Account
        </p>
        <form
          className='form'
          action='create-profile.html'
          onSubmit={this.handleSubmit}
        >
          <div className='form-group'>
            <input
              type='text'
              placeholder='Name'
              name='name'
              required
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              placeholder='Email Address'
              name='email'
              onChange={(e) => this.setState({ email: e.target.value })}
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
              minLength='6'
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              placeholder='Confirm Password'
              name='password2'
              minLength='6'
              onChange={(e) => this.setState({ password2: e.target.value })}
            />
          </div>

          <Button
            className='btn btn-primary submit-btn'
            onClick={(e) => this.handleSubmit(e)}
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
  }
}

const mapStateToProps = (state) => ({
  validationData: state.signupReducer.validationData,
  signupReducer: state.signupReducer.data,
});

export default connect(mapStateToProps, { postSignup })(withRouter(Register));
