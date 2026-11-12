
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Explore from "./pages/Explore";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Explore />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
