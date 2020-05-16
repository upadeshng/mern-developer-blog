import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { addComment } from '../../redux/action/post';

const commentForm = ({ postId, addComment }) => {
  const [text, setText] = useState({});

  return <>xx</>;
};

commentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default connect(null, { addComment })(commentForm);
