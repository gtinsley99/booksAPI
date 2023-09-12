const {Router} = require("express");
const bookRouter = Router();

const Book = require("../models/bookModel");

const {addaBook, listAllBooks, updateanAuthor, updateGenre, deleteaBook} = require ("../controllers/controllers");

bookRouter.post("/books/addaBook", addaBook)
bookRouter.get("/books/listAllBooks", listAllBooks);
// bookRouter.put("books/updateanAuthor", updateanAuthor);bookRouter.put("books/updateGenre", updateGenre);
// bookRouter.delete("/books/deleteaBook", deleteaBook);

module.exports = bookRouter;