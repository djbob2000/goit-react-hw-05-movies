import React from 'react';
import { useState, useEffect } from 'react';
import Loader from '../../components/Loader/Loader';
import { fetchTrendingMovieDay } from 'services/api';
import MovieList from 'components/MovieList/MovieList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getDataTrendingMovieDay = async ({ page }) => {
      setIsLoading(true);
      try {
        const results = await fetchTrendingMovieDay({ page });
        setMovies([...results]);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    getDataTrendingMovieDay({ page: 1 });
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      {isLoading ? <Loader /> : <MovieList movies={movies} path={'movies/'} />}
    </div>
  );
};

export default HomePage;
