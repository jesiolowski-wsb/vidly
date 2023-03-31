import React, { useState } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./like";

const Movies = () => {
  const [movies, setMovies] = useState(getMovies());

  const handleDelete = (movie) => {
    setMovies(movies.filter((m) => m._id !== movie._id));
  };

  const handleLike = (movie) => {
    const moviesLiked = [...movies];
    const index = moviesLiked.indexOf(movie);
    moviesLiked[index] = { ...movies[index] };
    moviesLiked[index].liked = !movies[index].liked;
    setMovies(moviesLiked);
  };

  const { length: count } = movies;

  if (count === 0) return <p>There are no movies in the database</p>;

  return (
    <>
      <p>Showing {count} movies in the database.</p>

      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like liked={movie.liked} onClick={() => handleLike(movie)} />
              </td>
              <td>
                <button
                  onClick={() => {
                    handleDelete(movie);
                  }}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Movies;
