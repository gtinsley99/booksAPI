import "./App.css";
import { useState } from "react";

// API routes
import { Booksapi, AddBookapi } from "./utils/index";

// components
import Title from "./components/title/Title";
import AllBooks from "./components/allBooks/AllBooks";
import ChangeBookData from "./components/changeBookData/ChangeBookData";

function App() {
  const [books, setBooks] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [showButton, setShowButton] = useState("Show");

  Booksapi(setBooks);

  return (
    <div className="App">
      <Title />
      <AllBooks
        showAll={showAll}
        showButton={showButton}
        bookList={books}
        setShowAll={setShowAll}
        setShowButton={setShowButton}
      />
      <ChangeBookData />
    </div>
  );
}

export default App;
