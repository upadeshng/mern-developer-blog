import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { addComment } from '../../redux/action/post';

const CommentForm = ({ postId, addComment, auth }) => {
  const [text, setText] = useState('');
  return (
    <>
      <div class='post-form'>
        <div class='bg-primary p'>
          <h3>Leave A Comment</h3>
        </div>
        <form
          class='form my-1'
          onSubmit={(e) => {
            e.preventDefault();
            addComment(postId, { text });
            setText('');
          }}
        >
          <textarea
            name='text'
            cols='30'
            rows='5'
            placeholder='Comment on this post'
            value={text}
            disabled={auth && auth.isAuthenticated ? true : false}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <input
            type='submit'
            class='btn btn-dark my-1'
            value='Submit'
            disabled={auth && auth.isAuthenticated ? true : false}
          />
        </form>
      </div>
    </>
  );
};

CommentForm.propTypes = {};

const mapStateToProps = (state) => ({
  auth: state.authReducer,
  post: state.postReducer.post,
});
export default connect(null, { addComment })(CommentForm);
