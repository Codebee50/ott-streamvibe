import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviesAndShowsPage from "./pages/MoviesAndShowsPage";
import SupportPage from "./pages/SupportPage";
import SubscriptionPage from "./pages/SubscriptionPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/moviesandshows" element={<MoviesAndShowsPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/subscription" element={<SubscriptionPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
