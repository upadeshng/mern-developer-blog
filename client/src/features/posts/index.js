import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getAllPosts } from '../../redux/action/post';
import PostListing from './postListing';

const Posts = ({ posts, getAllPosts }) => {
  useEffect(() => {
    getAllPosts();
  }, []);
  return (
    <>
      <PostListing />
    </>
  );
};

Posts.propTypes = {};

const mapStateToProps = (state) => ({
  posts: state.postReducer.posts,
});
export default connect(mapStateToProps, { getAllPosts })(Posts);
