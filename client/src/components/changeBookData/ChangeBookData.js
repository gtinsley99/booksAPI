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

  // Activate buttons
  // del
  const [delButton, setDelButton] = useState(true);
  // add
  const [addButton, setAddButton] = useState(true);
  const [addTitleInput, setAddTitleInput] = useState(false);
  const [addAuthorInput, setAddAuthorInput] = useState(false);
  // Update
  const [updButton, setUpdButton] = useState(true);
  const [updTitleInput, setUpdTitleInput] = useState(false);
  const [updAuthorInput, setUpdAuthorInput] = useState(false);
  const [updGenreInput, setUpdGenreInput] = useState(false);

  const delActivate = (e) => {
    setDelTitle(e.target.value);
    if (e.target.value !== ""){
      setDelButton(false);
    } else {
      setDelButton(true);
    };
  }

  const addTitleActivate = (e) => {
    setAddTitle(e.target.value);
    if (e.target.value !== "" && addAuthorInput === true){
      setAddTitleInput(true);
      setAddButton(false);
    }else if (e.target.value !== ""){
      setAddTitleInput(true);
      setAddButton(true);
    } else {
      setAddTitleInput(false);
      setAddButton(true);
    };
  }

  const addAuthorActivate = (e) => {
    setAddAuthor(e.target.value);
    if (e.target.value !== "" && addTitleInput === true){
      setAddAuthorInput(true);
      setAddButton(false);
    } else if(e.target.value !== ""){
      setAddAuthorInput(true);
      setAddButton(true);
    }else{
      setAddAuthorInput(false);
      setAddButton(true);
    }
  }

  const updTitleActivate = (e) => {
    setUpdTitle(e.target.value);
    if (e.target.value !== "" && (updAuthorInput === true || updGenreInput === true)){
      setUpdTitleInput(true);
      setUpdButton(false);
    } else if (e.target.value !== ""){
      setUpdTitleInput(true);
      setUpdButton(true);
    } else {
      setUpdTitleInput(false)
      setUpdButton(true);
    };
  }

  const updAuthorActivate = (e) => {
    setUpdAuthor(e.target.value);
    if (e.target.value !== "" && updTitleInput === true){
      setUpdAuthorInput(true);
      setUpdButton(false);
    } else if (e.target.value !== ""){
      setUpdAuthorInput(true);
      setUpdButton(true);
    } else {
      setUpdAuthorInput(false)
      setUpdButton(true);
    };
  }

  const updGenreActivate = (e) => {
    setUpdGenre(e.target.value);
    if (e.target.value !== "" && updTitleInput === true){
      setUpdGenreInput(true);
      setUpdButton(false);
    } else if (e.target.value !== ""){
      setUpdGenreInput(true);
      setUpdButton(true);
    } else {
      setUpdGenreInput(false)
      setUpdButton(true);
    };
  }


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
          onChange={delActivate}
        ></input>
        <button className="submitBtn" type="submit" disabled={delButton}>
          Delete book
        </button>
      </form>

      <form className="bookForm" onSubmit={addSubmitHandler}>
        <input
          placeholder="Insert title here..."
          onChange={addTitleActivate}
        ></input>
        <input placeholder="Insert author here..." onChange={addAuthorActivate}></input>
        <input placeholder="Insert genre here..." onChange={(e) => setAddGenre(e.target.value)}></input>
        <button className="submitBtn" type="submit" disabled={addButton}>
          Add book
        </button>
      </form>

      <form className="bookForm" onSubmit={updateSubmitHandler}>
        <input
          placeholder="Title of book to update..."
          onChange={updTitleActivate}
        ></input>
        <input placeholder="Insert author here..."  onChange={updAuthorActivate}></input>
        <input placeholder="Insert genre here..."  onChange={updGenreActivate}></input>
        <button className="submitBtn" type="submit" disabled={updButton}>
          Update book
        </button>
      </form>
    </div>
  );
};

export default ChangeBookData;
