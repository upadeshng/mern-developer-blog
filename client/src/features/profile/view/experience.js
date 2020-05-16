import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

function Experience({ profile }) {
  if (!profile) return <></>;

  const experienceList = profile.experience;

  return (
    <>
      <div class='profile-exp bg-white p-2'>
        <h2 class='text-primary'>Experience</h2>

        {experienceList.map((experience, index) => (
          <div>
            <h3 class='text-dark'>{experience.company}</h3>
            <p>
              {experience.from}- {experience.to}
            </p>
            <p>
              <strong>Position: </strong>Senior Developer
            </p>
            <p>
              <strong>Description: </strong>Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dignissimos placeat, dolorum ullam
              ipsam, sapiente suscipit dicta eius velit amet aspernatur
              asperiores modi quidem expedita fugit.
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

Experience.propTypes = {
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profileReducer.profile,
});
export default connect(mapStateToProps)(Experience);
