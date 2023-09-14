import "./App.css";
import { useState, useEffect } from "react";

// API routes
import { Booksapi } from "./utils/index";

// components
import Title from "./components/title/Title";
import AllBooks from "./components/allBooks/AllBooks";
import ChangeBookData from "./components/changeBookData/ChangeBookData";

function App() {
  const [showAll, setShowAll] = useState(false);
  const [showButton, setShowButton] = useState("Show");
  const [bookList, setBookList] = useState(false);

  useEffect(() => {Booksapi(setBookList)});

  return (
    <div className="App">
      <Title />
      <AllBooks
        showAll={showAll}
        showButton={showButton}
        setShowAll={setShowAll}
        setShowButton={setShowButton}
        bookList = {bookList}
      />
      <ChangeBookData setBookList={setBookList}/>
    </div>
  );
}

export default App;
