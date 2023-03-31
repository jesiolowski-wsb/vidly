import React from "react";
import Like from "./like";
import Loading from "./loading";

const Movies = ({ movies, handleLike, handleDelete }) => {
  const { length: count } = movies;

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
          {count === 0 && (
            <tr>
              <td colSpan={5}>
                <Loading />
              </td>
            </tr>
          )}
          {movies.map((movie) => (
            <tr key={movie.id}>
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
