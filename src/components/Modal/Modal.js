import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
  overlayRef = createRef();

  state = {
    largeImageURL: '',
  };

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

  handelPhoto = e => {
    this.setState({ largeImageURL: e.target.value });
  };

  render() {
    const { largeImageURL } = this.state;
    console.log(largeImageURL);
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
  // largeImageURL: PropTypes.string.isRequired,
  // children: PropTypes.oneOfType([
  //   PropTypes.arrayOf(PropTypes.node),
  //   PropTypes.node,
  // ]).isRequired,
  handleCloseModal: PropTypes.func.isRequired,
};

export default Modal;
