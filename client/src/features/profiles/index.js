import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllProfiles } from '../../redux/action/profile';

const ProfileListing = ({ getAllProfiles, profileListing }) => {
  useEffect(() => {
    getAllProfiles();
  }, []);

  if (!profileListing) return <>Loading..</>;

  return (
    <>
      <h1 class='large text-primary'>Developers</h1>
      <p class='lead'>
        <i class='fab fa-connectdevelop'></i> Browse and connect with developers
      </p>
      <div class='profiles'>
        {profileListing.map((profile) => (
          <>
            <div class='profile bg-light'>
              <img class='round-img' src={profile.user.avatar} alt='' />
              <div>
                <h2>{profile.user.name}</h2>
                <p>{profile.bio}</p>
                <p>{profile.location}</p>

                <Link
                  to={`/profile/${profile.user._id}`}
                  className='btn btn-primary'
                >
                  View profile
                </Link>
              </div>

              <ul>
                {profile.skills.map((skill, index) => (
                  <li key={index} class='text-primary'>
                    <i class='fas fa-check'></i> {skill}
                  </li>
                ))}
              </ul>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

// ProfileListing.propTypes = {};

const mapStateToProps = (state) => ({
  profileListing: state.profileReducer.profileListing,
});

export default connect(mapStateToProps, { getAllProfiles })(ProfileListing);
