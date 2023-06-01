import React from "react";
import PropTypes from "prop-types";

const BookCard = ({ book }) => {
  const thumbnail = book.volumeInfo.imageLinks?.thumbnail || "/no-image.jpg";

  return (
    <div className="book-card">
      <img src={thumbnail} alt={book.volumeInfo.title} />
      <div>
        <h2>{book.volumeInfo.title}</h2>
        <p>{book.volumeInfo.authors?.join(", ")}</p>
        <p>{book.volumeInfo.publishedDate}</p>
        <p>{book.volumeInfo.description}</p>
      </div>
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.shape({
    volumeInfo: PropTypes.shape({
      title: PropTypes.string.isRequired,
      authors: PropTypes.arrayOf(PropTypes.string),
      publishedDate: PropTypes.string,
      description: PropTypes.string,
      imageLinks: PropTypes.shape({
        thumbnail: PropTypes.string,
      }),
    }).isRequired,
  }).isRequired,
};

export default BookCard;
