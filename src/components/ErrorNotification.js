import React from 'react';
import PropTypes from 'prop-types';

const ErrorNotification = ({ text }) => (
  <h1>Some trouble with server. Please try layter ... {text}</h1>
);

ErrorNotification.defaultProps = {
  text: '',
};

ErrorNotification.propTypes = {
  text: PropTypes.string,
};

export default ErrorNotification;
