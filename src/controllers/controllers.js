const Book = require("../models/bookModel");

const addaBook = async (req, res) => {
  console.log("The req body is:", req.body);
  try {
    const newBook = await Book.create({
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
      ISBN: req.body.ISBN,
    });

    const successResponse = {
      message: "Book added",
      newBook: newBook,
    };

    res.status(201).json(successResponse);
  } catch (error) {
    console.log(error);
    const errorResponse = {
      message: "Error Occurred",
      error: error,
    };
    res.status(501).json(errorResponse);
  }
};

const listAllBooks = async (req, res) => {
  try {
    const listAllBooks = await Book.find({});

    const successResponse = {
      message: "Success",
      books: listAllBooks,
    };
    res.status(200).json(successResponse);
  } catch (error) {
    console.log(error);
    const errorResponse = {
      message: "Error Occurred",
      error: error,
    };
    res.status(501).json(errorResponse);
  }
};

const updateaBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      const noBookResponse = {
        success: false,
        message: "Book not found",
        id: req.params.id,
      };
      res.status(404).json(noBookResponse);
    } else {
      const updateBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      const successResponse = {
        message: "Book updated succesfully",
        book: updateBook,
      };
      res.status(200).json(successResponse);
    }
  } catch (error) {
    console.log(error);
    const errorResponse = {
      message: "Error Occurred",
      error: error,
    };
    res.status(501).json(errorResponse);
  }
};

const deleteaBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      const noBookResponse = {
        success: false,
        message: "Book not found",
        id: req.params.id,
      };
      res.status(204).json(noBookResponse);
    } else {
      const deleteBook = await Book.findByIdAndDelete(req.params.id);

      const successResponse = {
        message: "Book deleted successfully",
        book: deleteBook,
      };
      res.status(200).json(successResponse);
    }
  } catch (error) {
    console.log(error);
    const errorResponse = {
      message: "Error Occurred",
      error: error,
    };
    res.status(501).json(errorResponse);
  }
};

const updateanAuthorByTitle = async (req, res) => {
  try {
    const filter = { title: req.body.title };
    const book = await Book.findOne(filter);

    if (!book) {
      const noBookResponse = {
        success: false,
        message: "Book not found",
        title: req.body.title,
      };
      res.status(404).json(noBookResponse);
    } else {
      const update = { author: req.body.author };
      const newAuthor = await Book.findOneAndUpdate(filter, update, {
        new: true,
      });
      const successResponse = {
        message: "Author updated succesfully",
        book: newAuthor,
      };
      res.status(200).json(successResponse);
    }
  } catch (error) {
    console.log(error);
    const errorResponse = {
      message: "Error Occurred",
      error: error,
    };
    res.status(501).json(errorResponse);
  }
};

const updateaBookByTitle = async (req, res) => {
  try {
    const filter = { title: req.body.title };
    const book = await Book.findOne(filter);

    if (!book) {
      const noBookResponse = {
        success: false,
        message: "Book not found",
        title: req.body.title,
      };
      res.status(404).json(noBookResponse);
    } else {
      const update = req.body;
      const newBook = await Book.findOneAndUpdate(filter, update, {
        new: true,
      });
      const successResponse = {
        message: "Book updated succesfully",
        book: newBook,
      };
      res.status(200).json(successResponse);
    }
  } catch (error) {
    console.log(error);
    const errorResponse = {
      message: "Error Occurred",
      error: error,
    };
    res.status(501).json(errorResponse);
  }
};

const deleteaBookByTitle = async (req, res) => {
  try {
    const filter = { title: req.body.title };
    const book = await Book.findOne(filter);

    if (!book) {
      const noBookResponse = {
        success: false,
        message: "Book not found",
        title: req.body.title,
      };
      res.status(404).json(noBookResponse);
    } else {
      const newBook = await Book.findOneAndDelete(filter);
      const successResponse = {
        message: "Book deleted succesfully",
        book: newBook,
      };
      res.status(200).json(successResponse);
    }
  } catch (error) {
    console.log(error);
    const errorResponse = {
      message: "Error Occurred",
      error: error,
    };
    res.status(501).json(errorResponse);
  }
};

const listBookByTitle = async (req, res) => {
  try {
    const filter = { title: req.body.title };
    const book = await Book.findOne(filter);

    if (!book) {
      const noBookResponse = {
        success: false,
        message: "Book not found",
        title: req.body.title,
      };
      res.status(404).json(noBookResponse);
    } else {
      const successResponse = {
        message: "Book found",
        book: book,
      };
      res.status(200).json(successResponse);
    }
  } catch (error) {
    console.log(error);
    const errorResponse = {
      message: "Error Occurred",
      error: error,
    };
    res.status(501).json(errorResponse);
  }
};

const deleteAllBooks = async (req, res) => {
  try {
    const filter = {"__v": 0};
    const newBook = await Book.collection.deleteMany(filter);
    const successResponse = {
      message: "All books deleted succesfully",
      books: newBook
    };
    res.status(200).json(successResponse);
  } catch (error) {
    console.log(error);
    const errorResponse = {
      message: "Error Occurred",
      error: error,
    };
    res.status(501).json(errorResponse);
  }
};

module.exports = {
  addaBook,
  listAllBooks,
  updateaBookById,
  deleteaBookById,
  updateanAuthorByTitle,
  updateaBookByTitle,
  deleteaBookByTitle,
  listBookByTitle,
  deleteAllBooks,
};
