import axios from 'axios';
const API_KEY = '002008aca7b79d6606168d582d26d735';
const BASE_URL = 'http://localhost:3001';

const END_POINTS = {
  all: '/api/shop/',
  // querySearch: '/search/movie',
  goodsShop: '/api/shop',
  // movieCredits: '/credits',
  // movieReviews: '/reviews',
};

export async function allShop() {
  try {
    return await axios
      .get(`${BASE_URL}${END_POINTS.all}`, {})
      .then(response => response.data);
  } catch (error) {
    console.log(error);
  }
}

export async function goodsShop(id) {
  try {
    return await axios
      .get(`${BASE_URL}${END_POINTS.goodsShop}/${id}`, {})
      .then(response => response.data);
  } catch (error) {
    console.log(error);
  }
}

export async function searchMovies(query) {
  try {
    return await axios
      .get(`${BASE_URL}${END_POINTS.querySearch}`, {
        params: {
          api_key: API_KEY,
          query: query,
        },
      })
      .then(response => response.data);
  } catch (error) {
    console.log(error);
  }
}
