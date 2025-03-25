import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeOutlet from "./Outletes/HomeOutlet";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";

function App() {
  return (
<<<<<<< HEAD:Frontend/src/App.jsx
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeOutlet />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
=======
    <>
      <h1 class="text-3xl font-bold underline">Hello world!</h1>
      <h1>Madhvi</h1>
    </>
>>>>>>> 21ee2c7c96d119e56f72e55298b21af23fc19857:Frontend/src/pages/guest/App.jsx
  );
}

export default App;
