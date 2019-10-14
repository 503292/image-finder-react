import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

class Modal extends Component {
  overlayRef = createRef();

  componentWillMount() {
    window.removeEventListener('keyup', this.handleBtnModal);
  }

  componentDidMount() {
    window.addEventListener('keyup', this.handleBtnModal);
  }

  handleBtnModal = e => {
    if (e.code !== 'Escape') {
      return;
    }
    this.props.handleCloseModal();
  };

  handleModalOverlay = ({ target }) => {
    const { current } = this.overlayRef;

    if (target !== current) {
      return;
    }
    this.props.handleCloseModal();
  };

  render() {
    const { largeImageURL } = this.props;

    return (
      <>
        <div
          onKeyUp={this.handleBtnModal}
          onClick={this.handleModalOverlay}
          className={css.overlay}
          role="presentation"
          ref={this.overlayRef}
        >
          <div className={css.modal}>
            <img
              className={css.modalPhoto}
              src={largeImageURL}
              alt={largeImageURL}
            />
          </div>
        </div>
      </>
    );
  }
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
};

export default Modal;
