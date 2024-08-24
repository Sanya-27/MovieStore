import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MoviesHome from "../src/components/home/MoviesHome";
import TV from "./components/tv-shows/TV-Shows";
import Details from "./components/movies_details/Movie_Details";
import DetailsTV from "./components/tv_details/DetailsTV";
import Search from "../src/components/search/Search";
import Navbarr from "./components/navbar/Navbarr";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbarr />
        <Routes>
          <Route path="/" element={<Navigate to="/MovieStore/Movie" />} />
          <Route
            path="/MovieStore"
            element={<Navigate to="/MovieStore/Movie" />}
          />
          <Route path="/MovieStore/Movie" element={<MoviesHome />} />
          <Route path="/MovieStore/TV" element={<TV />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/detailsTV/:id" element={<DetailsTV />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
