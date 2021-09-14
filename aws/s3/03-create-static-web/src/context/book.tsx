import { createContext, FC, useState, useContext } from "react"
import {v4} from 'uuid'

export interface IBook {
  id: string
  title: string,
  description: string,
  author: string,
}


interface BookContextValue {
  books: IBook[]
  creatingBook: boolean,
  addBook: (book: IBook) => void
  removeBook: (id: string) => void
}

const BookContext = createContext<BookContextValue>({
  books: [],
  creatingBook: false,
  addBook: () => {},
  removeBook: () => {},
})

export const useBook = () => {
  const context = useContext(BookContext)
  return context
}

export const BookProvider: FC = ({ children }) => {
  const [books, setBooks] = useState<IBook[]>([])
  const [creatingBook, setCreatingBook] = useState(false)

  const addBook = async (book: IBook): Promise<void> => {
    setCreatingBook(true)
    setBooks([...books, {...book, id: v4()}])
    console.log(books)
    setCreatingBook(false)
  }

  const removeBook = (id: string) => {
    setBooks(books.filter(book => book.id !== id))
  }

  return (
    <BookContext.Provider value={{ books, addBook, creatingBook, removeBook }}>
      {children}
    </BookContext.Provider>
  )
}   