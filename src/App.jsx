import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App