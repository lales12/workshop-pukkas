import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import './App.css';

import { Home } from './domain/Home';
import { BookSection } from './domain/Book';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/book/list">Book list</Link>
            </li>
            <li>
              <Link to="/book">Book</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/book">
            <BookSection />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
