import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import SearchIcon from "./search.svg";
import MovieCard from "./movieCard";

const Api_Url = "http://www.omdbapi.com/?i=tt3896198&apikey=2622c8e3";
const movie1 = {
  Title: "The Avengers",
  Year: "2012",
  imdbID: "tt0848228",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
};

const App = () => {
  const [movie, setMovie] = useState([]);
  const [search, setsearch] = useState('');


  const searchmovies = async (title) => {
    const response = await fetch(`${Api_Url}&s=${title}`);
    const data = await response.json();
    setMovie(data.Search);
    console.log(data.Search); 
  };

  useEffect(() => {
    searchmovies("avengers");
  }, []);

  return (
    <div className="app">
      <h1> MovieLand </h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search for a movie"
          value={search}
          onChange={(e) => setsearch(e.target.value)}
        />

        <img src={SearchIcon} alt="search" onClick={() => 
        
        searchmovies(search)
        
        } />
      </div>


      {movie?.length > 0 ? (
        <div className="container">
          {movie.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h3> No movies found </h3>
        </div>
      )}
    </div>
  );
};

export default App;
