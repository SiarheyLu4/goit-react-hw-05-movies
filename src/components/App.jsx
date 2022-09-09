// import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { Menu } from "./Menu/Menu";
// import { Loader } from "./Loader/Loader";

import { HomePage } from "pages/HomePage/HomePage";
import { MoviesPage } from "pages/MoviesPage/MoviesPage";
import { MovieDetailsPage } from "pages/MovieDetailsPage/MovieDetailsPage";
import { CastPage } from "pages/CastPage/CastPage";
import { ReviewsPages } from "pages/ReviewsPages/ReviewsPages";
import { AboutPage } from "pages/AboutPage/AboutPage";
import { NotFoundPage } from "pages/NotFoundPage/NotFoundPage";


// const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
// const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
// const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage/MovieDetailsPage'));
// const CastPage = lazy(() => import('../pages/CastPage/CastPage'));
// const AboutPage = lazy(() => import('../pages/AboutPage/AboutPage'));
// const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));
// const ReviewsPages = lazy(() => import('../pages/ReviewsPages/ReviewsPages'));

export const App = () => {
  return (
    <div>
      <Menu />
      {/* <Suspense fallback={<p>{<Loader/> }</p>}> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id" element={<MovieDetailsPage />} >
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewsPages />} />
          </Route>
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      {/* </Suspense> */}
    </div>
  );
};
