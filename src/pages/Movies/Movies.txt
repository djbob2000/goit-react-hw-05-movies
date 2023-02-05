import Loader from '../../components/Loader/Loader';
// import { MovieItem } from 'components/MovieItem/MovieItem';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchTrendingMovieDay } from 'services/api';

const Movies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const results = await fetchTrendingMovieDay(searchQuery);
        setMovies([...results]);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchQuery]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const { value } = evt.target.elements.search;
    setMovies([]);
    setSearchParams({ query: value });
  };

  return <>======MOVIES</>;
};

export default Movies;
