import React from 'react';
import PropTypes from 'prop-types';

const PhotoCard = ({
  id,
  webformatURL,
  largeImageURL,
  likes,
  views,
  comments,
  downloads,
  handleOpenModal,
}) => (
  <li className="gallery-item">
    <div className="photo-card">
      <img
        className="card-photo"
        src={webformatURL}
        data-src={largeImageURL}
        alt={id}
      />

      <div className="stats">
        <p className="stats-item">
          <i className="material-icons">thumb_up</i>
          {likes}
        </p>
        <p className="stats-item">
          <i className="material-icons">visibility</i>
          {views}
        </p>
        <p className="stats-item">
          <i className="material-icons">comment</i>
          {comments}
        </p>
        <p className="stats-item">
          <i className="material-icons">cloud_download</i>
          {downloads}
        </p>
      </div>

      <button
        type="button"
        onClick={handleOpenModal}
        className="fullscreen-button"
      >
        <i className="material-icons">zoom_out_map</i>
      </button>
    </div>
  </li>
);

PhotoCard.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  downloads: PropTypes.number.isRequired,
  handleOpenModal: PropTypes.func.isRequired,
};

export default PhotoCard;
