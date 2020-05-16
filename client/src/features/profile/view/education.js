import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

function Education({ profile }) {
  if (!profile) return <></>;

  const educationList = profile.education;

  return (
    <>
      <div class='profile-edu bg-white p-2'>
        <h2 class='text-primary'>Education</h2>

        {educationList.map((education, index) => (
          <div key={index}>
            <h3>{education.school}</h3>
            <p>
              {education.from} - {education.to}
            </p>
            <p>
              <strong>Degree: </strong>
              {education.degree}
            </p>
            <p>
              <strong>Field Of Study: </strong>
              {education.fieldofstudy}
            </p>
            <p>
              <strong>Description: </strong>
              {education.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

Education.propTypes = {
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profileReducer.profile,
});
export default connect(mapStateToProps)(Education);
