import { useState } from "react";
import { Booksapi, AddBookapi, DeleteBookapi, UpdateBookapi } from "../../utils";

const ChangeBookData = (props) => {
  // Add
  const [addTitle, setAddTitle] = useState();
  const [addAuthor, setAddAuthor] = useState();
  const [addGenre, setAddGenre] = useState();
  // Delete
  const [delTitle, setDelTitle] = useState();
  // Update
  const [updTitle, setUpdTitle] = useState();
  const [updAuthor, setUpdAuthor] = useState();
  const [updGenre, setUpdGenre] = useState();

  const addSubmitHandler = async (e) => {
    e.preventDefault();
    AddBookapi(addTitle, addAuthor, addGenre);
    Booksapi(props.setBookList);
  };

  const deleteSubmitHandler = async (e) => {
    e.preventDefault();
    DeleteBookapi(delTitle);
    Booksapi(props.setBookList);
  };

  const updateSubmitHandler = async (e) => {
    e.preventDefault();
    UpdateBookapi(updTitle, updAuthor, updGenre);
    Booksapi(props.setBookList);
  };

  return (
    <div className="formCard">
      <form className="bookForm" onSubmit={deleteSubmitHandler}>
        <input
          placeholder="Insert title to delete..."
          onChange={(e) => setDelTitle(e.target.value)}
        ></input>
        <button className="submitBtn" type="submit">
          Delete book
        </button>
      </form>

      <form className="bookForm" onSubmit={addSubmitHandler}>
        <input
          placeholder="Insert title here..."
          onChange={(e) => setAddTitle(e.target.value)}
        ></input>
        <input placeholder="Insert author here..." onChange={(e) => setAddAuthor(e.target.value)}></input>
        <input placeholder="Insert genre here..." onChange={(e) => setAddGenre(e.target.value)}></input>
        <button className="submitBtn" type="submit">
          Add book
        </button>
      </form>

      <form className="bookForm" onSubmit={updateSubmitHandler}>
        <input
          placeholder="Title of book to update..."
          onChange={(e) => setUpdTitle(e.target.value)}
        ></input>
        <input placeholder="Insert author here..." onChange={(e) => setUpdAuthor(e.target.value)}></input>
        <input placeholder="Insert genre here..." onChange={(e) => setUpdGenre(e.target.value)}></input>
        <button className="submitBtn" type="submit">
          Update book
        </button>
      </form>
    </div>
  );
};

export default ChangeBookData;
