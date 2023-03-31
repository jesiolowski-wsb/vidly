import React from "react";

function NewMovie() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.form.title.value);
  };

  return (
    <form>
      <h4>Add new movie</h4>
      <label htmlFor="title">Add new movie: </label>
      <input
        type="text"
        className="form-control"
        id="title"
        placeholder="movie title"
      />

      <label htmlFor="stock">number in stock: </label>
      <input
        type="text"
        className="form-control"
        id="stock"
        placeholder="items in stock"
      />

      <label htmlFor="price">daily rental: </label>
      <input
        type="text"
        className="form-control"
        id="price"
        placeholder="daily rental rate"
      />

      <button
        type="submit"
        className="btn btn-primary mt-2"
        onClick={(e) => handleSubmit(e)}
      >
        Submit
      </button>
    </form>
  );
}

export default NewMovie;
