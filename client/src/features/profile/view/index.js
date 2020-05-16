import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getProfileByUserId } from '../../../redux/action/profile';

import Top from './top';
import About from './about';
import Education from './education';
import Experience from './experience';
import GithubRepo from './githubRepo';
import { Link } from 'react-router-dom';

const View = ({ getProfileByUserId, profile, match }) => {
  useEffect(() => {
    getProfileByUserId(match.params.id);
  }, []);

  return (
    <>
      <Link to='/profiles' className='btn btn-light'>
        Back To Profiles
      </Link>
      <div class='profile-grid my-1'>
        {/* Top */}
        <Top />

        {/* About */}

        {profile && profile.social && <About />}

        {/* education */}
        <Education />

        {/* experience */}
        <Experience />

        {/* githubRepo */}

        {profile && profile.githubusername && (
          <GithubRepo githubusername={profile.githubusername} />
        )}
      </div>
    </>
  );
};

View.propTypes = {
  getProfileByUserId: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profileReducer.profile,
});
export default connect(mapStateToProps, { getProfileByUserId })(View);
