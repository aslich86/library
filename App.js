import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import BookList from './BookList';
import BookDetail from './BookDetail';
import Borrowing from './Borrowing';

function App() {
  return (
    <Router>
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/books" component={BookList} />
      <Route path="/books/:id" component={BookDetail} />
      <Route path="/borrow" component={Borrowing} />
    </Router>
  );
}

export default App;