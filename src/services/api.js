import axios from 'axios';

const KEY = '666fcf1ac882b2472afcc20268d5b58b';

const tmdbAxiosApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

export const fetchTrendingMovieDay = async () => {
  const { data } = await tmdbAxiosApi.get(`trending/movie/day`, {
    params: {
      api_key: KEY,
      page: 1,
    },
  });

  return data.results.map(({ id, title, poster_path, vote_average }) => ({
    id,
    title,
    poster_path,
    vote_average,
  }));
};

export const fetchMovieById = async movieId => {
  const { data } = await tmdbAxiosApi.get(`movie/${movieId}`, {
    params: {
      api_key: KEY,
    },
  });

  return data;
};

export const fetchMovieCast = async movieId => {
  const response = await tmdbAxiosApi.get(`movie/${movieId}/credits`, {
    params: {
      api_key: KEY,
    },
  });

  return response.data.cast;
};

export const fetchMovieReviews = async movieId => {
  const response = await tmdbAxiosApi.get(`movie/${movieId}/reviews`, {
    params: {
      api_key: KEY,
    },
  });
  return response.data.results;
};

export const fetchMovieByQuery = async query => {
  const { data } = await tmdbAxiosApi.get(`search/movie`, {
    params: {
      api_key: KEY,
      page: 1,
      include_adult: true,
      query,
    },
  });

  return data.results;
};
