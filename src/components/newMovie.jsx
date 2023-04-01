import React from "react";
import axios from "axios";
import { DATA_ENDPOINT } from "../config";

function NewMovie({ setMovies }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`adding: ${e.target.form.title.value}`);

    axios
      .post(`${DATA_ENDPOINT}/movies`, {
        title: e.target.form.title.value,
        genre: { id: "", name: "" },
        numberInStock: e.target.form.stock.value,
        dailyRentalRate: e.target.form.price.value,
      })
      .then((response) => {
        console.log(response);
        e.target.form.title.value = "";
        e.target.form.stock.value = "";
        e.target.form.price.value = "";

        axios.get(`${DATA_ENDPOINT}/movies`).then((response) => {
          console.log("fetch after adding");
          setMovies(response.data);
        });
      });
  };

  return (
    <form>
      <h4>Add new movie</h4>
      <label htmlFor="title">Add new movie:</label>
      <input
        type="text"
        className="form-control"
        id="title"
        placeholder="movie title"
      />

      <label className="mt-2" htmlFor="stock">
        number in stock:
      </label>
      <input
        type="text"
        className="form-control"
        id="stock"
        placeholder="items in stock"
      />

      <label className="mt-2" htmlFor="price">
        daily rental:
      </label>
      <input
        type="text"
        className="form-control"
        id="price"
        placeholder="daily rental rate"
      />

      <button
        type="submit"
        className="btn btn-primary mt-3"
        onClick={(e) => handleSubmit(e)}
      >
        Submit
      </button>
    </form>
  );
}

export default NewMovie;
