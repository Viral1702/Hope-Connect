import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeOutlet from "./Outletes/HomeOutlet";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeOutlet />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
