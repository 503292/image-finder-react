import React from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({ handleClickBtn }) => (
  <div className={css.wrapBtn}>
    <button className={css.buttonLoad} type="button" onClick={handleClickBtn}>
      Load more
    </button>
  </div>
);

Button.propTypes = {
  handleClickBtn: PropTypes.func.isRequired,
};

export default Button;
