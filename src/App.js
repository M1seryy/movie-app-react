import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { Card } from "./cardComponent/Card";
import MovieList from "./MovieList";
import "../src/cardComponent/card.css";
import SearchBox from "./SearchBox";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getPosters = async (searchValue) => {
    const BASE_URL = `http://www.omdbapi.com/?s=${searchValue}&apikey=c2e9880c`;
    const response = await fetch(BASE_URL);
    const resJson = await response.json();

    if (resJson.Search) {
      setMovies(resJson.Search);
    }
  };

  useEffect(() => {
    getPosters(searchValue);
  }, [searchValue]);

  return (
    <div className="App">
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="main_content">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
