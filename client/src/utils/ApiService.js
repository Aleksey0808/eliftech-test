import axios from 'axios';
const API_KEY = '002008aca7b79d6606168d582d26d735';
const BASE_URL = 'https://api.themoviedb.org/3';

const END_POINTS = {
  trending: '/trending/movie/day',
  querySearch: '/search/movie',
  movieDetails: '/movie',
  movieCredits: '/credits',
  movieReviews: '/reviews',
};

export async function popularMovies(page = 1) {
  try {
    return await axios
      .get(`${BASE_URL}${END_POINTS.trending}`, {
        params: {
          api_key: API_KEY,
          page: page,
        },
      })
      .then(response => response.data);
  } catch (error) {
    console.log(error);
  }
}

export async function movieReviews(moviesId) {
  try {
    return await axios
      .get(`${BASE_URL}/movie/${moviesId}${END_POINTS.movieReviews}`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then(response => response.data);
  } catch (error) {
    console.log(error);
  }
}

export async function movieCast(moviesId) {
  try {
    return await axios
      .get(`${BASE_URL}/movie/${moviesId}${END_POINTS.movieCredits}`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then(response => response.data);
  } catch (error) {
    console.log(error);
  }
}

export async function movieDetails(moviesId) {
  try {
    return await axios
      .get(`${BASE_URL}${END_POINTS.movieDetails}/${moviesId}`, {
        params: {
          api_key: API_KEY,
        },
      })
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
