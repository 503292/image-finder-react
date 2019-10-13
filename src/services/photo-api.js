import axios from 'axios';

const CRIPT_KEY = process.env.REACT_APP_API_KEY;

const API_KEY = `&key=${CRIPT_KEY}`;

/* eslint-disable-next-line */
export const getPhotos = (query = '', page = 1) =>
  axios.get(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12${API_KEY}`,
  );

// 13892199-58c163103ab3e33586f8e4337   DENA
