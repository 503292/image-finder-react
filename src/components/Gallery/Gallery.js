import React, { Component } from 'react';
import PhotoCard from '../PhotoCard/PhotoCard';
import Loader from '../Loader';
import SearchForm from '../SearchForm/SearchForm';
import ErrorNotification from '../ErrorNotification';
import * as photoAPI from '../../services/photo-api';
import pathImg from '../../image/Moogle.jpg';

class Gallery extends Component {
  state = {
    imagesInfo: [],
    isLoading: false,
    error: null,
    page: 1,
    query: '',
    // isModalOpen: false,
  };

  handleSubmitGalery = ({ query, page }) => {
    photoAPI
      .fetchPhoto(query, page)
      .then(({ data }) =>
        this.setState({
          imagesInfo: data.hits,
          query,
          page: 2,
        }),
      )
      .catch(error => error.message);
  };

  handleClickBtn = () => {
    const { query, page } = this.state;
    photoAPI
      .fetchPhoto(query, page)
      .then(({ data }) =>
        this.setState(prevState => ({
          imagesInfo: [...prevState.imagesInfo, ...data.hits],
          page: prevState.page + 1,
        })),
      )
      .catch(error => error.message);
  };

  render() {
    const { error, isLoading, imagesInfo } = this.state;

    return (
      <>
        <img src={pathImg} alt="moogle" className="topImage" />
        <SearchForm handleSubmitGalery={this.handleSubmitGalery} />

        {error && <ErrorNotification text={error.message} />}
        {isLoading && <Loader />}
        {imagesInfo.length > 0 && (
          <PhotoCard
            handleClickBtn={this.handleClickBtn}
            imagesInfo={imagesInfo}
          />
        )}
      </>
    );
  }
}

export default Gallery;
