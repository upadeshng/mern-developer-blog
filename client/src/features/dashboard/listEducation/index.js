import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import Moment from 'react-moment';

import { deleteEducation } from '../../../redux/action/profile';

const ListEducation = ({ profile, deleteEducation }) => {
  if (!profile.education) return <></>;

  return (
    <>
      <h2 class='my-2'>Education Credentials</h2>
      <table class='table'>
        <thead>
          <tr>
            <th>School</th>
            <th class='hide-sm'>Degree</th>
            <th class='hide-sm'>Years</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {profile.education.map((education) => (
            <tr>
              <td>{education.school}</td>
              <td class='hide-sm'>{education.degree}</td>
              <td class='hide-sm'>
                <Moment format='YYYY/MM/DD'>{education.from}</Moment> -{' '}
                {education.to === null ? (
                  ' Now'
                ) : (
                  <Moment format='YYYY/MM/DD'>{education.to}</Moment>
                )}
              </td>
              <td>
                <button
                  class='btn btn-danger'
                  onClick={() => deleteEducation(education._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

ListEducation.propTypes = {
  deleteEducation: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profileReducer.profile,
});
export default connect(mapStateToProps, { deleteEducation })(ListEducation);
