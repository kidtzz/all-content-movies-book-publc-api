import "./styles/css/navbar.min.css";
import "./styles/css/heroku.min.css";
import "./styles/css/app.min.css";
import "./styles/css/movie.min.css";
import "./styles/css/component.min.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./layouts/footer";
import Navbar from "./layouts/navbar";
import Book from "./pages/book";
import Movie from "./pages/movie";
import Quran from "./pages/quran/quran";
import DetailQuran from "./pages/quran/detailQuran";
import Random from "./pages/random/random";
import Skyshi from "./pages/Skyshi/Skyshi";

// import Heroku from "./components/heroku";

function App() {
    return (
        <div>
            <Router>
                <Navbar />
                {/* <Heroku /> */}
                <Routes>
                    <Route path="/" element={<Movie />} />
                    <Route path="/Book" element={<Book />} />
                    <Route path="/Quran" element={<Quran />} />
                    <Route path="/Quran/:number" element={<DetailQuran />} />
                    <Route path="/random" element={<Random />} />
                </Routes>

                <Routes>
                    <Route path="/Skyshi" element={<Skyshi />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
