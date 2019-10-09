import React from 'react';
import PropTypes from 'prop-types';

const PhotoCard = ({ imagesInfo }) => (
  <>
    <ul className="gallery">
      {imagesInfo.map(
        ({ id, webformatURL, likes, views, comments, downloads }) => (
          <div key={id} className="photo-card">
            <img src={webformatURL} alt="somesing" />
            {/* largeImageURL */}
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

            <button type="button" className="fullscreen-button">
              <i className="material-icons">zoom_out_map</i>
            </button>
          </div>
        ),
      )}
    </ul>
  </>
);

PhotoCard.propTypes = {
  imagesInfo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      comments: PropTypes.number.isRequired,
      downloads: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default PhotoCard;
