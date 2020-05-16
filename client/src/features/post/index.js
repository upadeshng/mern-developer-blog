import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import CommentForm from './commentForm';

import { connect } from 'react-redux';
import { getPost } from '../../redux/action/post';

import Detail from './detail';
import { Link } from 'react-router-dom';
import CommentItem from './commentItem';

const View = ({ post, getPost, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, []);

  if (post === null) return <>Loading..</>;

  return (
    <>
      <Link to='/posts' className='btn'>
        Back To Posts
      </Link>

      {post && post.user && <Detail userId={post.user} />}
      {post && post._id && <CommentForm postId={post._id} />}

      <div class='comments'>
        {post.comments.map((comment) => {
          return <CommentItem postId={post._id} comment={comment} />;
        })}
      </div>
    </>
  );
};

View.propTypes = {};

const mapStateToProps = (state) => ({
  post: state.postReducer.post,
});

export default connect(mapStateToProps, { getPost })(View);
