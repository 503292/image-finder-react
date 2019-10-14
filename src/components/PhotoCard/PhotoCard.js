import React from 'react';
import PropTypes from 'prop-types';
import css from './PhotoCard.module.css';

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
  <li className={css.galleryItem}>
    <div className={css.photoCard}>
      <img
        className={css.photo}
        src={webformatURL}
        data-src={largeImageURL}
        alt={id}
      />

      <div className={css.stats}>
        <p className={css.statsItem}>
          <i className="material-icons">thumb_up</i>
          {likes}
        </p>
        <p className={css.statsItem}>
          <i className="material-icons">visibility</i>
          {views}
        </p>
        <p className={css.statsItem}>
          <i className="material-icons">comment</i>
          {comments}
        </p>
        <p className={css.statsItem}>
          <i className="material-icons">cloud_download</i>
          {downloads}
        </p>
      </div>

      <button
        type="button"
        onClick={handleOpenModal}
        className={css.fullscreenButton}
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
