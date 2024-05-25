import React, { useState, useEffect } from 'react';
import pool from './db';

const Borrowing = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [borrowed, setBorrowed] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const result = await pool.execute('SELECT * FROM books WHERE available = true');
        setBooks(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBooks();
  }, []);

  const handleSelectBook = (event) => {
    setSelectedBook(event.target.value);
  };

  const handleBorrowBook = async () => {
    try {
      await pool.execute('UPDATE books SET available = false WHERE id = ?', [selectedBook]);
      setBorrowed(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Borrow a Book</h1>
      <select onChange={handleSelectBook}>
        {books.map((book) => (
          <option key={book.id} value={book.id}>
            {book.title} by {book.author}
          </option>
        ))}
      </select>
      <button onClick={handleBorrowBook}>Borrow</button>
      {borrowed ? <p>Book borrowed successfully!</p> : <p>Not borrowed</p>}
    </div>
  );
};

export default Borrowing;