import React from 'react';
import PropTypes from 'prop-types';
import PhotoCard from '../PhotoCard/PhotoCard';
import Button from '../Button/Button';

const Gallery = ({ imagesInfo, handleClickBtn, handleOpenModal }) => (
  <>
    {' '}
    <ul className="gallery">
      {imagesInfo.map((el, index) => (
        <PhotoCard
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          id={el.id}
          webformatURL={el.webformatURL}
          largeImageURL={el.largeImageURL}
          likes={el.likes}
          views={el.views}
          comments={el.comments}
          downloads={el.downloads}
          handleOpenModal={handleOpenModal}
        />
      ))}
    </ul>
    <Button handleClickBtn={handleClickBtn} />
  </>
);

Gallery.propTypes = {
  imagesInfo: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  handleClickBtn: PropTypes.func.isRequired,
  handleOpenModal: PropTypes.func.isRequired,
};

export default Gallery;
