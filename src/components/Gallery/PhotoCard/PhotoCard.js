import React from 'react';

const PhotoCard = () => (
  <>
    <div>PhotoCard</div>
    <div className="photo-card">
      <img
        src="https://www.zenit.photo/upload/iblock/260/foto_aleksey_lukyanenko_zenitar_16.jpg"
        alt=""
      />

      <div className="stats">
        <p className="stats-item">
          <i className="material-icons">thumb_up</i>
          1108
        </p>
        <p className="stats-item">
          <i className="material-icons">visibility</i>
          320321
        </p>
        <p className="stats-item">
          <i className="material-icons">comment</i>
          129
        </p>
        <p className="stats-item">
          <i className="material-icons">cloud_download</i>
          176019
        </p>
      </div>

      <button type="button" className="fullscreen-button">
        <i className="material-icons">zoom_out_map</i>
      </button>
    </div>
  </>
);

export default PhotoCard;
