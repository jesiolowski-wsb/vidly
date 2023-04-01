import "./App.css";
import Movies from "./components/movies";
import NewMovie from "./components/newMovie";
import React, { useState } from "react";
import axios from "axios";
import { DATA_ENDPOINT } from "./config";

function App() {
  const [movies, setMovies] = useState([]);

  React.useEffect(() => {
    axios.get(`${DATA_ENDPOINT}/movies`).then((response) => {
      console.log("fetch");
      setMovies(response.data);
    });
  }, []);

  const handleDelete = (movie) => {
    setMovies(movies.filter((m) => m.id !== movie.id));
  };

  const handleLike = (movie) => {
    const moviesLiked = [...movies];
    const index = moviesLiked.indexOf(movie);
    moviesLiked[index] = { ...movies[index] };
    moviesLiked[index].liked = !movies[index].liked;
    setMovies(moviesLiked);
  };

  return (
    <main role="main" className="container">
      <div className="row">
        <div className="col-3">
          <NewMovie setMovies={setMovies} />
        </div>
        <div className="col">
          <Movies
            movies={movies}
            handleLike={handleLike}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
