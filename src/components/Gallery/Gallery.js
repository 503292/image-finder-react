import React, { Component } from 'react';
import PhotoCard from './PhotoCard/PhotoCard';
import axios from 'axios';
// import * as photoAPI from '../services/photo-api';

class Gallery extends Component {
  state = {
    imagesInfo: [],
    page: 1,
  };

  componentDidMount() {
    axios
      .get(
        'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=cat&page=1&per_page=12&key=13631456-c9d9ce7db3701f221793ce82d',
      )
      .then(({ data }) => {
        this.setState({ imagesInfo: data.hits });
      })
      .catch(error => alert('Some trouble with server. Please try layter ...'));
  }
  componentDidUpdate(prevProps, prevState) {}

  render() {
    const { imagesInfo } = this.state;
    return (
      <>
        <ul className="gallery">
          <PhotoCard imagesInfo={imagesInfo} />
        </ul>
      </>
    );
  }
}

export default Gallery;
