import React from 'react';

const PhotoCard = ({ imagesInfo }) => (
  <>
    {imagesInfo.map(
      ({ id, webformatURL, likes, views, comments, downloads }) => (
        <div key={id} className="photo-card">
          <img src={webformatURL} alt="img-photo" />
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
  </>
);

export default PhotoCard;
