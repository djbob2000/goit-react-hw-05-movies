// import { useState } from 'react';
// import Loader from '../../components/Loader/Loader';
import imageNotFound from './ImageNotFound.jpg';
import { useFetchCast } from '../../hooks/UseFetchCast';

const posterPathStart = 'https://image.tmdb.org/t/p/w500';

const CastPage = () => {
  const cast = useFetchCast();

  return (
    <>
      {cast?.length === 0 && <p>Sorry, no additional information</p>}
      {cast && (
        <ul>
          {cast.map(({ id, name, character, profile_path }) => (
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
          ))}
        </ul>
      )}
    </>
  );
};
export default CastPage;
