import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

function Top({ profile }) {
  if (!profile) return <></>;

  const user = profile.user;

  return (
    <>
      <div class='profile-about bg-light p-2'>
        <h2 class='text-primary'>{user.name} Bio</h2>
        <p>{profile.bio}</p>
        <div class='line'></div>
        <h2 class='text-primary'>Skill Set</h2>
        <div class='skills'>
          {profile.skills.map((skill, index) => (
            <div key={index} class='p-1'>
              <i className='fa fa-check'></i> {skill}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

Top.propTypes = {
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profileReducer.profile,
});
export default connect(mapStateToProps)(Top);
