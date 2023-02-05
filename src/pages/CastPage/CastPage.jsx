import { useState, useEffect } from 'react';
import Loader from '../../components/Loader/Loader';
import imageNotFound from './ImageNotFound.jpg';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/api';

const posterPathStart = 'https://image.tmdb.org/t/p/w500';

const Cast = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const GetDataFromFetchMovieCast = async () => {
      setIsLoading(true);
      try {
        const cast = await fetchMovieCast(movieId);
        setCast([...cast]);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    GetDataFromFetchMovieCast();
  }, [movieId]);

  return (
    <>
      <ul>
        {isLoading ? (
          <Loader />
        ) : !cast.length ? (
          <p>Sorry, no additional information</p>
        ) : (
          cast?.map(({ id, name, character, profile_path }) => (
            <li key={id}>
              {profile_path ? (
                <img
                  src={posterPathStart + profile_path}
                  alt={name}
                  width={100}
                />
              ) : (
                <img src={imageNotFound} alt="No poster" width={100} />
              )}

              <p>Name: {name}</p>
              <p>Character: {character}</p>
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default Cast;
