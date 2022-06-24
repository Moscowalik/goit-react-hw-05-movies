import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Container from './Container/Container';
import AppBar from './AppBar/AppBar';

const HomePage = lazy(() => import('pages/HomePage/HomePage.jsx'));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage.jsx'));
const MovieDetailsPage = lazy(() =>
  import('pages/MovieDetailsPage/MovieDetailsPage.jsx')
);
const Cast = lazy(() => import('../pages/Cast/Cast.jsx'));
const Reviews = lazy(() => import('../pages/Reviews/Reviews.jsx'));

export default function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 1000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
    </Container>
  );
}
