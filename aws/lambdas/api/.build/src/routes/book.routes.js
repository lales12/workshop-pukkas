"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const book_controller_1 = require("../controllers/book.controller");
const bookRouter = (0, express_1.Router)();
bookRouter.use('/:bookId', book_controller_1.getBook);
bookRouter.use('/list', book_controller_1.getBooks);
bookRouter.post('', book_controller_1.createBook);
exports.default = bookRouter;
//# sourceMappingURL=book.routes.js.map