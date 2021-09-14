import React, {useState} from 'react'
import { Switch, useRouteMatch, Route } from 'react-router-dom';
import styled from 'styled-components'
import { BookProvider } from '../../context/book';
import { BookForm } from './BookForm';

import { BookList } from './List'

export const BookSection = () => {
  let { path, url } = useRouteMatch();

  return (
    <BookProvider>
      <Switch>
        <Route exact path={path}>
          <BookForm />
          </Route>
        <Route path={`${path}/list`}>
          <BookList />
        </Route>
      </Switch>
    </BookProvider>
  )
}
