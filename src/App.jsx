import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviesAndShowsPage from "./pages/MoviesAndShowsPage";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path="/moviesandshows" element={<MoviesAndShowsPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App