const Book = require("../models/bookModel");

// addaBook, listAllBooks, updateanAuthor, updateGenre, deleteaBook
// find particular book (req.body etc req.params)

const addaBook = async (req, res) => {
    console.log("The req body is:", req.body);
    try {
        const newBook = await Book.create({
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            ISBN: req.body.ISBN
        })

        const successResponse = {
            message: "Book added",
            newBook: newBook
        };

        res.stastus(201).json(successResponse);
    } catch (error) {
        console.log(error);
        const errorResponse = {
            message: "Error Occurred",
            error: error
        };
        res.status(501).json(errorResponse);
    }
}

const listAllBooks = async (req, res) => {
    try {
        const listAllBooks = await Book.find({});

        const successResponse = {
            message: "Success",
            books: listAllBooks
        };
        res.status(200).json(successResponse);
    } catch (error) {
        console.log(error);
        const errorResponse = {
            message: "Error Occurred",
            error: error
        };
        res.status(501).json(errorResponse);
    }
}

module.exports = {addaBook, listAllBooks}