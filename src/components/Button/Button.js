import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ handleClickBtn }) => (
  <div className="wrapBtn">
    <button type="button" onClick={handleClickBtn} className="buttonLoad">
      Load more
    </button>
  </div>
);

Button.propTypes = {
  handleClickBtn: PropTypes.func.isRequired,
};

export default Button;
