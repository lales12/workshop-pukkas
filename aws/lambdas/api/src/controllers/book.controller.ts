import { Request, Response } from "express-serve-static-core";

export const getBook = (req: Request, res: Response) => {
  console.log('requesting for')

  res.status(200).json({
    message: 'Hello World ' + req.params.bookId
  })
}

export const getBooks = (req: Request, res: Response) => {
  res.status(200).json({
    message: 'requesting for books'
  }) 
}

export const createBook = (req: Request, res: Response) => {
  res.status(200).json({
    message: 'creating a book'
  })
}
