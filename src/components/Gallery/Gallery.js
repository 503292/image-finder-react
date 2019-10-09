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
    page: null,
    error: null,
    query: '',
  };

  componentDidMount() {
    // const { query, page } = this.state;

    // // console.log(query);
    // // console.log(page);

    this.fetchArticles();
  }

  // componentDidUpdate(prevProps, prevState) {
  //   const { query } = this.state;

  //   // if (prevCategory !== nextCategory) {
  //   //   this.fetchArticles(nextCategory);
  //   // }

  //   if (prevState.query !== query) {
  //     this.fetchArticles(query);
  //   }
  // }

  fetchArticles = (query, page) => {
    this.setState({ isLoading: true });

    photoAPI
      .fetchPhoto(query, page)
      .then(({ data }) => this.setState({ imagesInfo: data.hits }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  handelChange = e => {
    console.log(e.target.value);

    this.setState({
      query: e.target.value,
    });
  };

  handleSubmit = e => {
    const { query } = this.state;

    e.preventDefault();

    this.fetchArticles(query);

    this.reset();
  };

  reset = () => this.setState({ query: '' });

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
