import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LinkAction = (props) => {
  return (
    <>
      <div class='dash-buttons'>
        <Link to='/profile/edit' className='btn btn-light'>
          <i className='fas fa-user-circle text-primary'></i> Edit Profile
        </Link>

        <Link to='/profile/add-experience' className='btn btn-light'>
          <i className='fab fa-black-tie text-primary'></i> Add Experience
        </Link>

        <Link to='/profile/add-education' className='btn btn-light'>
          <i className='fab fa-graduation-cap text-primary'></i> Add Education
        </Link>
      </div>
    </>
  );
};

LinkAction.propTypes = {};

export default LinkAction;
