import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
  overlayRef = createRef();

  componentWillMount() {
    window.removeEventListener('keyup', this.handleListenerClickButton);
  }

  componentDidMount() {
    window.addEventListener('keyup', this.handleListenerClickButton);
  }

  handleListenerClickButton = e => {
    if (e.code !== 'Escape') {
      return;
    }
    this.props.handleCloseModal();
  };

  handleClickOverlay = ({ target }) => {
    const { current } = this.overlayRef;

    if (target !== current) {
      return;
    }
    this.props.handleCloseModal();
  };

  render() {
    // const { largeImageURL } = this.state;
    const { largeImageURL } = this.props;

    return (
      <>
        <div
          onKeyUp={this.handleListenerClickButton}
          onClick={this.handleClickOverlay}
          className="overlay"
          role="presentation"
          ref={this.overlayRef}
        >
          <div className="modal">
            <img
              className="modal-photo"
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
