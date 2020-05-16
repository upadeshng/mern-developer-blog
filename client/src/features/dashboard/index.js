import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
// import { loadUser } from '../../redux/action/auth';
import { getCurrentProfile, deleteAccount } from '../../redux/action/profile';

import LinkAction from './linkAction';
import ListExperience from './listExperience';
import ListEducation from './listEducation';

function Dashboard({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile,
}) {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  return (
    <>
      <h1 class='large text-primary'>Dashboard</h1>
      <p class='lead'>
        <i class='fas fa-user'></i> Welcome {user && user.name}
      </p>

      {profile !== null ? (
        <>
          <LinkAction />
          <ListExperience />
          <ListEducation />

          <div class='my-2'>
            <button class='btn btn-danger' onClick={(e) => deleteAccount()}>
              <i class='fas fa-user-minus'></i>
              Delete My Account
            </button>
          </div>
        </>
      ) : (
        <>
          <p>You have not yet setup a profile, please add some info</p>
          <Link to='/profile/create' className='btn btn-primary'>
            Create Profile
          </Link>
        </>
      )}
    </>
  );
}

Dashboard.propTypes = {
  loadUser: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.authReducer,
  profile: state.profileReducer.profile,
});
export default connect(mapStateToProps, {
  getCurrentProfile,
  deleteAccount,
})(Dashboard);
