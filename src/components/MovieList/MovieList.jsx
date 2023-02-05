import { Link } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

const MovieList = ({ movies, path }) => {
  // const location = useLocation();

  console.log('movies=====', movies);

  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link to={`${path}${id}`}>
            {title}
            {/* state={{ from: location } */}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
