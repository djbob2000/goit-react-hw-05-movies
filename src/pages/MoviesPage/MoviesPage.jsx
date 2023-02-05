import { useState, useEffect } from 'react';
import { useSearchParams, useLocation, Link } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { fetchMovieByQuery } from '../../services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MoviesPage = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const queryParam = searchParams.get('query') ?? '';

  useEffect(() => {
    if (queryParam === '' || !queryParam) {
      return;
    }

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const results = await fetchMovieByQuery(queryParam);
        if (!results.length) {
          toast.error('Nothing find. Try another keywords.', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
        }
        const movies = results.map(
          ({ id, title, poster_path, vote_average }) => ({
            id,
            title,
            poster_path,
            vote_average,
          })
        );
        setMovies(movies);
      } catch (error) {
        console.error(error);
        toast.error('Fetch error!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [queryParam]);

  const handleSubmit = event => {
    event.preventDefault();
    const { value } = event.target.elements.query;
    console.log(value);
    if (value === '') {
      return;
    }

    setMovies(null);
    setSearchParams({ query: value });
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" placeholder="Type keyword" />
        <button type="submit">Search</button>
      </form>

      {isLoading ? (
        <Loader />
      ) : (
        movies?.length > 0 && (
          <ul>
            {movies.map(({ id, title }) => (
              <li key={id}>
                <Link state={{ from: location }} to={`${id}`}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        )
      )}
      <ToastContainer />
    </section>
  );
};

export default MoviesPage;
