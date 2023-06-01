import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BookCard from "./BookCard";

function BookClubPage() {
  const [books, setBooks] = useState([]);
  const { clubId } = useParams();

  useEffect(() => {
    // Fetch the books in the book club from the server here
    // and update the state variable accordingly
    // You will need to implement the server-side functionality separately
  }, [clubId]);

  return (
    <div>
      <h1>Book Club</h1>
      <p>Here are the books we're reading this month:</p>
      {books.map((book) => (
        <div key={book.id}>
          {/* Render each book using the BookCard component */}
          <BookCard book={book} />
        </div>
      ))}
    </div>
  );
}

export default BookClubPage;
