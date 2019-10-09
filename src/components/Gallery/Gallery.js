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
    error: null,
    page: 1,
    query: '',
  };

  componentDidMount() {
    this.fetchArticles();
  }

  // componentDidUpdate(prevProps, prevState) {}

  fetchArticles = (query, page) => {
    this.setState({ isLoading: true });

    photoAPI
      .fetchPhoto(query, page)
      .then(({ data }) =>
        // this.setState(prevState => ({
        //     imagesInfo: [...prevState.imagesInfo, data.hits],
        //   }))

        this.setState({ imagesInfo: data.hits }),
      )

      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  // this.setState(prevState => ({
  //   imagesInfo: [...prevState.imagesInfo, data.hits],
  // }))

  handelChange = e => {
    this.setState({
      query: e.target.value,
    });
  };

  handleSubmitGalery = ({ query }) => {
    photoAPI
      .fetchPhoto(query)
      .then(({ data }) =>
        this.setState({
          query,
          imagesInfo: data.hits,
          page: 2,
        }),
      )
      .catch(error => error);

    // e.preventDefault();
    // const { imagesInfo, query, page } = this.state;
    // console.log(page);
    // this.setState({ imagesInfo: [], page: 2 });
    // this.fetchArticles(query, page + 1);
    // this.setState({ page: page + 1 });
    // console.log(imagesInfo);
    // console.log(page);
    // this.resetQuery();
  };

  handleClickBtn = e => {
    const { imagesInfo, query, page } = this.state;
    console.log(page);
    // this.setState({ page: page + 1 });

    e.preventDefault();
    console.log(page);
    if (query === '') {
      this.fetchArticles(page + 1);

      this.setState(prevState => ({
        imagesInfo: [...prevState.imagesInfo, ...imagesInfo],
      }));
    } else {
      this.fetchArticles(query, page + 1);
    }
    this.setState({ page: page + 1 });

    console.log(page);

    // this.resetQuery();
  };

  resetQuery = () => this.setState({ query: '' });

  render() {
    const { error, isLoading, imagesInfo } = this.state;
    return (
      <>
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
