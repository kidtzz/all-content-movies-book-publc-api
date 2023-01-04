import "./styles/css/navbar.min.css";
import "./styles/css/heroku.min.css";
import "./styles/css/app.min.css";
import "./styles/css/movie.min.css";
import "./styles/css/component.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./layouts/footer";
import Navbar from "./layouts/navbar";
import Book from "./pages/book";
import Movie from "./pages/movie";
import Quran from "./pages/quran/quran";
import DetailQuran from "./pages/quran/detailQuran";
import Random from "./pages/random/random";
import Skyshi from "./pages/Skyshi/Skyshi";
import DetailActivity from "./pages/Skyshi/detailActivity";
import Trycatch from "./pages/Temp/Trycatch";

// import Heroku from "./components/heroku";

function App() {
    return (
        <div>
            <Router>
                <ToastContainer />
                <Navbar />
                {/* <Heroku /> */}
                <Routes>
                    <Route path="/" element={<Movie />} />
                    <Route path="/Book" element={<Book />} />
                    <Route path="/Quran" element={<Quran />} />
                    <Route path="/Quran/:number" element={<DetailQuran />} />
                    <Route path="/random" element={<Random />} />
                    <Route path="/Skyshi" element={<Skyshi />} />
                    <Route path="/DetailSky/:id" element={<DetailActivity />} />
                    <Route path="/Trycatch" element={<Trycatch />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
