import React, { Component } from 'react';
import Gallery from './Gallery/Gallery';
import SearchForm from './SearchForm/SearchForm';
import Modal from './Modal/Modal';
import { getPhotos } from '../services/photo-api';
import pathImg from '../image/Moogle.jpg';

class App extends Component {
  state = {
    imagesInfo: [],
    query: '',
    page: 1,
    isModalOpen: false,
    largeImage: '',
  };

  componentDidMount() {
    const { query, page } = this.state;
    getPhotos(query, page)
      .then(({ data: { hits } }) =>
        this.setState({
          query,
          imagesInfo: hits,
          page: 2,
        }),
      )
      .catch(error => error);
  }

  componentDidUpdate(prevState) {
    const { query } = this.state;

    if (prevState.query !== query) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  handleSubmitForm = ({ query, page }) => {
    getPhotos(query, page)
      .then(({ data: { hits } }) =>
        this.setState({
          query,
          imagesInfo: hits,
          page: 2,
        }),
      )
      .catch(error => error);
  };

  handleClickBtn = () => {
    const { query, page } = this.state;
    getPhotos(query, page)
      .then(({ data }) =>
        this.setState(prevState => ({
          imagesInfo: [...prevState.imagesInfo, ...data.hits],
          page: prevState.page + 1,
        })),
      )
      .catch(error => error.message);
  };

  handleOpenModal = e => {
    const { src } = e.currentTarget.parentElement.firstChild.dataset;
    this.setState({ isModalOpen: true, largeImage: src });
  };

  handleCloseModal = () => this.setState({ isModalOpen: false });

  render() {
    const { isModalOpen, imagesInfo, query, largeImage } = this.state;
    return (
      <>
        <img src={pathImg} alt="top-moogle" className="topImage" />

        <SearchForm handleSubmitForm={this.handleSubmitForm} query={query} />

        <Gallery
          imagesInfo={imagesInfo}
          handleClickBtn={this.handleClickBtn}
          handleOpenModal={this.handleOpenModal}
        />

        {isModalOpen && (
          <Modal
            className="modal-photo-card"
            handleCloseModal={this.handleCloseModal}
            largeImageURL={largeImage}
          />
        )}
      </>
    );
  }
}

export default App;
