import axios from 'axios';

const CRIPT_KEY = process.env.REACT_APP_API_KEY;

const BASE_URL =
  'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=';
const API_KEY = `&key=${CRIPT_KEY}`;

/* eslint-disable-next-line */
export const fetchPhoto = (query = '', page = 1) =>
  axios.get(`${BASE_URL + query}&page=${page}&per_page=12${API_KEY}`);
