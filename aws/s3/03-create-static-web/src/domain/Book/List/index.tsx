import React from "react";
import styled from "styled-components";
import { useBook } from "../../../context/book";

export const BookList = () => {
  const { books } = useBook();

  return <div>
    <h2>BookList</h2>

    <BookListContainer>

      {books.map( book => {
        return <BookItem key={book.id} >
          <h3>{book.title}</h3>
          <p>Author: {book.author}</p>
          <p>Id: {book.id}</p>
          <p>Description: {book.description}</p>
        </BookItem>
        })}
    </BookListContainer>
  </div>;
};

const BookListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  max-width: 400px;
`;

const BookItem = styled.div`
  background-color: #f5f5f5;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0.5rem;
  padding: 1rem;
  width: 20rem;
`;