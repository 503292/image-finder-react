import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  fontSize: 40,
  position: 'absolute',
};

const ErrorNotification = ({ text }) => (
  <h1 style={styles}>Some trouble with server. Please try layter ... {text}</h1>
);

ErrorNotification.defaultProps = {
  text: '',
};

ErrorNotification.propTypes = {
  text: PropTypes.string,
};

export default ErrorNotification;
