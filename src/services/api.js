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
  //to do зробити
  // const { title, poster_path, vote_average, overview, genres } = data;
  // return { title, poster_path, vote_average, overview, genres };
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
