import { Routes, Route } from "react-router-dom";

import { Menu } from "./Menu/Menu";

import { HomePage } from "pages/HomePage/HomePage"; 
import { MoviesPage } from "pages/MoviesPage/MoviesPage";
import { AboutPage } from "pages/AboutPage/AboutPage";
import { NotFoundPage } from "pages/NotFoundPage/NotFoundPage";



export const App = () => {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </div>
  );
};
