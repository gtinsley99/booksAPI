import { useState } from "react";

 export const Booksapi = (setBooks) => {
    const [errors, setErrors] = useState(null);
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
};

export const AddBookapi = () => {
  const [errors, setErrors] = useState(null);
      const addBooks = async () => {
        try {
          const res = await fetch("http://localhost:5001/books/addaBook");
          if (!res.ok) {
            throw new Error(res.statusText);
          }
        } catch (error) {
          setErrors("Failed to fetch data");
          console.log(error);
          console.log(errors);
        }
      };
      addBooks();
};

