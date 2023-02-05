import { UseFetchMovieDetails } from '../../hooks/UseFetchMovieDetails';
import { useNavigate, useLocation, NavLink, Outlet } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { Suspense } from 'react';
import css from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const movie = UseFetchMovieDetails();
  const navigate = useNavigate();
  const location = useLocation();
  const posterPathStart = 'https://image.tmdb.org/t/p/w500';

  return (
    <>
      {movie && (
        <section>
          <button
            type="button"
            onClick={() => navigate(location?.state?.from ?? '/')}
          >
            🔙Go back
          </button>

          <div className={css.MovieDetailsPageWrapper}>
            <div>
              <img
                className={css.MovieDetailsPageImg}
                src={posterPathStart + movie.poster_path}
                alt={movie.title}
                width={200}
              />
            </div>

            <div>
              <h3>
                {movie.title} ({movie.release_date.slice(0, 4)})
              </h3>
              <p>User scores: {Math.round(movie.vote_average * 10)}%</p>
              <h4>Overview</h4>
              <p>{movie.overview}</p>
              <h4>Genres</h4>
              <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
            </div>
          </div>

          <div>
            <div className={css.line}></div>

            <h4>Additional information</h4>
            <ul>
              <li>
                <NavLink state={{ from: location.state?.from }} to="cast">
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink state={{ from: location.state?.from }} to="reviews">
                  Reviews
                </NavLink>
              </li>
            </ul>
            <div className={css.line}></div>
          </div>

          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </section>
      )}
    </>
  );
};

export default MovieDetailsPage;
