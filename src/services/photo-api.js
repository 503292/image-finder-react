import axios from 'axios';

const BASE_URL =
  'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=';
const API_KEY = '&key=13631456-c9d9ce7db3701f221793ce82d';

/* eslint-disable-next-line */
export const fetchArticles = (query = 'react', page) =>
  axios.get(BASE_URL + query + `&page=${page}&per_page=12` + API_KEY);

// 13631456-c9d9ce7db3701f221793ce82d
