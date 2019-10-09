import React, { Component } from 'react';
import PhotoCard from './PhotoCard/PhotoCard';
import Loader from '../Loader';
import SearchForm from './SearchForm/SearchForm';
import ErrorNotification from '../ErrorNotification';
import * as photoAPI from '../../services/photo-api';

class Gallery extends Component {
  state = {
    imagesInfo: [],
    isLoading: false,
    // page: 1,
    error: null,
    query: '',
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    photoAPI
      .fetchPhoto()
      .then(({ data }) => this.setState({ imagesInfo: data.hits }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  // componentDidUpdate(prevProps, prevState) {}

  handelChange = e => {
    console.log(e.target.value);

    this.setState({
      query: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.query);
  };

  render() {
    const { query, error, isLoading, imagesInfo } = this.state;
    return (
      <>
        <hr />
        <SearchForm
          handelChange={this.handelChange}
          handleSubmit={this.handleSubmit}
          query={query}
        />
        <hr />

        {error && <ErrorNotification text={error.message} />}
        {isLoading && <Loader />}
        {imagesInfo.length > 0 && <PhotoCard imagesInfo={imagesInfo} />}
      </>
    );
  }
}

export default Gallery;
