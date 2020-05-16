import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import post from '../../redux/reducer/post';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const PostListing = ({ posts }) => {
  if (!posts) return <></>;

  return (
    <>
      <div class='posts'>
        {posts.map((post) => (
          <div class='post bg-white p-1 my-1'>
            <div>
              <Link to={`/post/${post._id}`}>
                <img class='round-img' src={post.avatar} alt='' />
                <h4>{post.name}</h4>
              </Link>
            </div>
            <div>
              <p class='my-1'>{post.text}</p>

              <p class='post-date'>
                Posted on <Moment format='YYYY/MM/DD'>{post.date}</Moment>
              </p>

              <button type='button' class='btn btn-light'>
                <i class='fas fa-thumbs-up'></i>

                <span>
                  {post.likes.length > 0 && <span>post.likes.length</span>}
                </span>
              </button>
              <button type='button' class='btn btn-light'>
                <i class='fas fa-thumbs-down'></i>
              </button>

              <Link to={`/post/${post._id}`} className='btn btn-primary'>
                Discussion{' '}
                <span class='comment-count'>{post.comments.length}</span>
              </Link>

              <button type='button' class='btn btn-danger'>
                <i class='fas fa-times'></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

PostListing.propTypes = {};

const mapStateToProps = (state) => ({
  posts: state.postReducer.posts,
});
export default connect(mapStateToProps)(PostListing);
