import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviesAndShowsPage from "./pages/MoviesAndShowsPage";
import SupportPage from "./pages/SupportPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/moviesandshows" element={<MoviesAndShowsPage />} />
        <Route path="/support" element={<SupportPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
