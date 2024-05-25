import React, { useState, useEffect } from 'react';
import pool from './db';
import { Document, Page } from 'react-pdf';

const BookDetail = (props) => {
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const result = await pool.execute('SELECT * FROM books WHERE id = ?', [props.match.params.id]);
        setBook(result[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBook();
  }, [props.match.params.id]);

  return (
    <div>
      <h1>Book Detail</h1>
      {book ? (
        <div>
          <h2>{book.title}</h2>
          <p>by {book.author}</p>
          <Document file={book.pdf}>
            <Page pageNumber={1} />
          </Document>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BookDetail;