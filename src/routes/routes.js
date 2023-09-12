const { Router } = require("express");
const bookRouter = Router();

const Book = require("../models/bookModel");

const {
  addaBook,
  listAllBooks,
  updateaBookByTitle,
  deleteaBookByTitle,
  deleteaBookById,
  updateaBookById,
  updateanAuthorByTitle,
  listBookByTitle,
  deleteAllBooks,
} = require("../controllers/controllers");

bookRouter.post("/books/addaBook", addaBook);
bookRouter.get("/books/listAllBooks", listAllBooks);
bookRouter.delete("/books/deleteAllBooks", deleteAllBooks);

// Search by id
bookRouter.put("/books/updateaBookById/:id", updateaBookById);
bookRouter.delete("/books/deleteaBookById/:id", deleteaBookById);

// Search by title
bookRouter.put("/books/updateanAuthorByTitle", updateanAuthorByTitle);
bookRouter.put("/books/updateaBookByTitle", updateaBookByTitle);
bookRouter.delete("/books/deleteaBookByTitle", deleteaBookByTitle);
bookRouter.get("/books/listBookByTitle", listBookByTitle);

module.exports = bookRouter;
