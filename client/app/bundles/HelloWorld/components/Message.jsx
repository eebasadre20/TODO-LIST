import PropTypes from 'prop-types';
import React from 'react';

const Message = (props) => (
  <div>
    Message: { props.text };
  </div>
);

export default Message;
