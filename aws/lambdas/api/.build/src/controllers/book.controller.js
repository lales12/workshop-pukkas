"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBook = exports.getBooks = exports.getBook = void 0;
const getBook = (req, res) => {
    console.log('requesting for');
    res.status(200).json({
        message: 'Hello World ' + req.params.bookId
    });
};
exports.getBook = getBook;
const getBooks = (req, res) => {
    res.status(200).json({
        message: 'requesting for books'
    });
};
exports.getBooks = getBooks;
const createBook = (req, res) => {
    res.status(200).json({
        message: 'creating a book'
    });
};
exports.createBook = createBook;
//# sourceMappingURL=book.controller.js.map