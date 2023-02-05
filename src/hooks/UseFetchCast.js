import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../services/api';

export const useFetchCast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const GetDataFromFetchMovieCast = async () => {
      // setIsLoading(true);
      try {
        const cast = await fetchMovieCast(movieId);
        // setCast([...cast]);
        setCast(cast);
      } catch (error) {
        console.error(error);
      } finally {
        // setIsLoading(false);
      }
    };

    GetDataFromFetchMovieCast();
  }, [movieId]);

  // useEffect(() => {
  //   fetchMovieCast(movieId).then(setCast).catch(console.error);
  // }, [movieId]);

  // return cast;

  return cast;
};
