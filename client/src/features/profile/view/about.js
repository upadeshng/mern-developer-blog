import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

function About({ profile }) {
  if (!profile) return <></>;

  const user = profile.user;

  return (
    <>
      <div class='profile-top bg-primary p-2'>
        <img class='round-img my-1' src={user.avatar} alt='' />
        <h1 class='large'>{user.name}</h1>
        <p class='lead'>Developer at Microsoft</p>
        <p>{profile.location}</p>
        <div class='icons my-1'>
          <a href={profile.website} target='_blank' rel='noopener noreferrer'>
            <i class='fas fa-globe fa-2x'></i>
          </a>
          <a
            href={profile.social.twitter}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i class='fab fa-twitter fa-2x'></i>
          </a>
          <a
            href={profile.social.facebook}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i class='fab fa-facebook fa-2x'></i>
          </a>
          <a
            href={profile.social.linkedin}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i class='fab fa-linkedin fa-2x'></i>
          </a>
          <a
            href={profile.social.youtube}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i class='fab fa-youtube fa-2x'></i>
          </a>
          <a
            href={profile.social.instagram}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i class='fab fa-instagram fa-2x'></i>
          </a>
        </div>
      </div>
    </>
  );
}

About.propTypes = {
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profileReducer.profile,
});
export default connect(mapStateToProps)(About);
