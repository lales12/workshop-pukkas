import React, { useState } from "react"
import styled from "styled-components"
import { IBook, useBook } from "../../../context/book"

export const BookForm = () => {
  const {creatingBook, addBook } = useBook()
  const [book, setBook] = useState<IBook>({
    id: '',
    title: '',
    description: '',
    author: ''
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setBook({ ...book, [name]: value })
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await addBook(book)
    setBook({
      id: '',
      title: '',
      description: '',
      author: ''
    })
  }


  return (
    <div>
      <BookFieldSet disabled={creatingBook}>
        <legend>Book</legend>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="title" name="title" value={book.title} onChange={handleChange}/>
          <input type="text" placeholder="description" name="description" value={book.description} onChange={handleChange}/>
          <input type="text" placeholder="author" name="author" value={book.author} onChange={handleChange}/>

          <button type="submit">Create book</button>
        </form>
      </BookFieldSet>
    </div>
  )
}

const BookFieldSet = styled.fieldset`
  margin: auto;
  max-width: 500px;

  & > form > input {
    margin: 10px 0;
    display: block;
    width: 100%;
  }
`
