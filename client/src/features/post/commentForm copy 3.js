import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getUserById } from '../../redux/action/user';
import { addComment } from '../../redux/action/post';

const Detail = ({ addComment }) => {
  const [text, setText] = useState('');
  return (
    <>
      <div class='post bg-white p-1 my-1'>
        <div></div>
        <div>dddd</div>
      </div>
    </>
  );
};

Detail.propTypes = {};

const mapStateToProps = (state) => ({
  post: state.postReducer.post,
});
export default connect(mapStateToProps, { addComment })(Detail);
