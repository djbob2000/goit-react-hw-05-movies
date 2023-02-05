import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
// import Layout from './Layout/Layout';
// import HomePage from '../pages/HomePage/HomePage';
// import MovieDetailsPage from '../pages/MovieDetailsPage/MovieDetailsPage';
// import MoviesPage from '../pages/MoviesPage/MoviesPage';
import Loader from './Loader/Loader';
import CastPage from '../pages/CastPage/CastPage';
import ReviewsPage from '../pages/ReviewsPage/ReviewsPage';

const Layout = lazy(() => import('./Layout/Layout'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('../pages/MovieDetailsPage/MovieDetailsPage')
);

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />

          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};
export default App;
