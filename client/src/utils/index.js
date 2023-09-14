import { useEffect, useState } from "react";

export const Booksapi = (setBooks) => {
  const [errors, setErrors] = useState(null);
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch("http://localhost:5001/books/listAllBooks");
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const data = await res.json();
        setBooks(data);
      } catch (error) {
        setErrors("Failed to fetch data");
        console.log(error);
        console.log(errors);
      }
    };
    fetchBooks();
  }, []);
  return;
};

export const AddBookapi = async (addTitle, addAuthor, addGenre, setResponse) => {
    try {
      const res = await fetch("http://localhost:5001/books/addaBook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: addTitle,
          author: addAuthor,
          genre: addGenre,
        })
      });
      if (!res.ok) {
        throw new Error(res.statusText);
      };
    } catch (error) {
      console.log(error);
    }
};

export const DeleteBookapi = async (delTitle) => {
    try {
      const res = await fetch(
        "http://localhost:5001/books/deleteaBookByTitle",
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: delTitle,
          })
        }
      );
      if (!res.ok) {
        throw new Error(res.statusText);
       
      };
    } catch (error) {
      console.log(error);
    }
};

export const UpdateBookapi = async (updTitle, updAuthor, updGenre, setResponse) => {
    try {
      const res = await fetch(
        "http://localhost:5001/books/updateaBookByTitle",
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: updTitle,
            author: updAuthor,
            genre: updGenre,
          }),
        }
      );
      if (!res.ok) {
        throw new Error(res.statusText);
      };
    } catch (error) {
      console.log(error);
    }
};
