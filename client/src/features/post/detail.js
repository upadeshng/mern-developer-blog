import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getUserById } from '../../redux/action/user';
import { Link } from 'react-router-dom';

const Detail = ({ userId, user, post, getUserById }) => {
  useEffect(() => {
    getUserById(userId);
  }, []);

  if (!user) return <></>;

  return (
    <>
      <div class='post bg-white p-1 my-1'>
        <div>
          <Link to={`/profile/${userId}`}>
            <img class='round-img' src={user.avatar} alt='' />
            <h4>{user.name}</h4>
          </Link>
        </div>
        <div>
          <p class='my-1'>{post.text}</p>
        </div>
      </div>
    </>
  );
};

Detail.propTypes = {};

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
  post: state.postReducer.post,
});
export default connect(mapStateToProps, { getUserById })(Detail);
