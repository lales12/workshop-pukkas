import { Router } from "express";
import { getBook, getBooks, createBook } from "../controllers/book.controller";

const bookRouter = Router();

bookRouter.use('/:bookId', getBook)

bookRouter.use('/list', getBooks)

bookRouter.post('', createBook)

export default bookRouter;