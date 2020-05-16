import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteExperience } from '../../../redux/action/profile';

const ListExperience = ({ profile, deleteExperience }) => {
  if (!profile.experience) return <></>;

  return (
    <>
      <h2 class='my-2'>Experience Credentials</h2>
      <table class='table'>
        <thead>
          <tr>
            <th>Company</th>
            <th class='hide-sm'>Title</th>
            <th class='hide-sm'>Years</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {profile.experience.map((experience) => (
            <tr>
              <td>{experience.company}</td>
              <td class='hide-sm'>{experience.title}</td>
              <td class='hide-sm'>
                <Moment format='YYYY/MM/DD'>{experience.from}</Moment> -{' '}
                {experience.to === null ? (
                  ' Now'
                ) : (
                  <Moment format='YYYY/MM/DD'>{experience.to}</Moment>
                )}
              </td>
              <td>
                <button
                  class='btn btn-danger'
                  onClick={() => deleteExperience(experience._id)}
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

ListExperience.propTypes = {};

const mapStateToProps = (state) => ({
  profile: state.profileReducer.profile,
  deleteExperience: PropTypes.func.isRequired,
});
export default connect(mapStateToProps, { deleteExperience })(ListExperience);
