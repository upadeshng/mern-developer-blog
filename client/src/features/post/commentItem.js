import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { deleteComment } from '../../redux/action/post';

function commentItem({ postId, comment, auth, user, deleteComment }) {
  return (
    <>
      <div class='post bg-white p-1 my-1'>
        <div>
          <Link to={`/user/${comment.user}`}>
            <img class='round-img' src={comment.avatar} alt='' />
            <h4>{comment.name}</h4>
          </Link>
        </div>
        <div>
          <p class='my-1'>{comment.text}</p>
          <p class='post-date'>
            Posted on <Moment format='YYYY-MM-DD'>{comment.date}</Moment>
          </p>

          <button
            type='button'
            class='btn btn-danger'
            style={user && user._id === comment.user ? {} : { display: 'none' }}
            onClick={(e) => deleteComment(postId, comment._id)}
          >
            <i class='fas fa-times'></i>
          </button>
        </div>
      </div>
    </>
  );
}

commentItem.propTypes = {
  comment: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.authReducer,
  user: state.authReducer.user,
});
export default connect(mapStateToProps, { deleteComment })(commentItem);
