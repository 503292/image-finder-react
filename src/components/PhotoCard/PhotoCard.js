import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import shortid from 'shortid';
import Modal from '../Modal/Modal';

export default class PhotoCard extends Component {
  state = {
    isModalOpen: false,
    largeImage: '',
  };

  handleOpenModal = e => {
    this.setState({ largeImage: e.currentTarget.value });
    this.setState({ isModalOpen: true });
  };

  handleCloseModal = () => this.setState({ isModalOpen: false });

  render() {
    const { imagesInfo, handleClickBtn } = this.props;
    const { largeImage, isModalOpen } = this.state;
    return (
      <>
        <ul className="gallery">
          {imagesInfo.map(
            ({
              id,
              webformatURL,
              largeImageURL,
              likes,
              views,
              comments,
              downloads,
            }) => (
              <li key={id} className="gallery-item">
                <div className="photo-card">
                  <img
                    className="card-photo"
                    src={webformatURL}
                    data-src={largeImageURL}
                    alt="somesing"
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
                    onClick={this.handleOpenModal}
                    value={largeImageURL}
                    type="button"
                    className="fullscreen-button"
                  >
                    <i className="material-icons">zoom_out_map</i>
                  </button>
                </div>
              </li>
            ),
          )}
          {isModalOpen && (
            <Modal
              className="modal-photo-card"
              handleCloseModal={this.handleCloseModal}
              largeImageURL={largeImage}
            />
          )}
        </ul>

        <div className="wrapBtn">
          <button type="button" onClick={handleClickBtn} className="buttonLoad">
            Load more
          </button>
        </div>
      </>
    );
  }
}

PhotoCard.propTypes = {
  imagesInfo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      comments: PropTypes.number.isRequired,
      downloads: PropTypes.number.isRequired,
    }),
  ).isRequired,
  handleClickBtn: PropTypes.func.isRequired,
};

// const PhotoCard = ({ imagesInfo, handleClickBtn, largeImageURL }) => (
//   <>
//     <ul className="gallery">
//       {imagesInfo.map(
//         ({ id, webformatURL, likes, views, comments, downloads }) => (
//           <li key={id} className="gallery-item">
//             <div className="photo-card">
//               <img src={webformatURL} alt="somesing" />

//               <div className="stats">
//                 <p className="stats-item">
//                   <i className="material-icons">thumb_up</i>
//                   {likes}
//                 </p>
//                 <p className="stats-item">
//                   <i className="material-icons">visibility</i>
//                   {views}
//                 </p>
//                 <p className="stats-item">
//                   <i className="material-icons">comment</i>
//                   {comments}
//                 </p>
//                 <p className="stats-item">
//                   <i className="material-icons">cloud_download</i>
//                   {downloads}
//                 </p>
//               </div>

//               {/* largeImageURL */}
//               <button type="button" className="fullscreen-button">
//                 <i className="material-icons">zoom_out_map</i>
//               </button>

//               {/* {modalOpen && (
//                 <Modal
//                   largeImage={largeImage}
//                   handleCloseModal={this.handleCloseModal}
//                 />
//               )} */}
//             </div>
//           </li>
//         ),
//       )}
//     </ul>
//     <div className="wrapBtn">
//       <button type="button" onClick={handleClickBtn} className="buttonLoad">
//         Load more
//       </button>
//     </div>
//   </>
// );

// PhotoCard.propTypes = {
//   imagesInfo: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       webformatURL: PropTypes.string.isRequired,
//       largeImageURL: PropTypes.string.isRequired,
//       likes: PropTypes.number.isRequired,
//       views: PropTypes.number.isRequired,
//       comments: PropTypes.number.isRequired,
//       downloads: PropTypes.number.isRequired,
//     }),
//   ).isRequired,
//   handleClickBtn: PropTypes.func.isRequired,
// };

// export default PhotoCard;
