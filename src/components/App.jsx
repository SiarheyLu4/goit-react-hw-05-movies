import { Routes, Route } from "react-router-dom";

import { Menu } from "./Menu/Menu";

import { HomePage } from "pages/HomePage/HomePage"; 
import { MoviesPage } from "pages/MoviesPage/MoviesPage";
import { MovieDetailsPage } from "pages/MovieDetailsPage/MovieDetailsPage";
import { CastPage } from "pages/CastPage/CastPage";
import { AboutPage } from "pages/AboutPage/AboutPage";
import { NotFoundPage } from "pages/NotFoundPage/NotFoundPage";



export const App = () => {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<MovieDetailsPage />} >
          <Route path="cast" element={<CastPage />} />
        </Route>
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </div>
  );
};
