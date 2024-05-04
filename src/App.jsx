import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviesAndShowsPage from "./pages/MoviesAndShowsPage";
import GenreMoviesListPage from "./pages/GenreMoviesListPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/moviesandshows" element={<MoviesAndShowsPage />} />
        <Route path="/genre/:id/:type/list" element={<GenreMoviesListPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
