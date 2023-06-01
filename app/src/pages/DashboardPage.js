import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BookCard from "./BookCard";

function DashboardPage() {
  const [currentlyReading, setCurrentlyReading] = useState(null);
  const [socialCards, setSocialCards] = useState([]);
  const { userId } = useParams();

  useEffect(() => {
    // Fetch the user's currently reading book and social cards from the server here
    // and update the state variables accordingly
    // You will need to implement the server-side functionality separately
  }, [userId]);

  return (
    <div>
      <h1>Dashboard</h1>
      {currentlyReading && (
        <div>
          <h2>Currently Reading</h2>
          <BookCard book={currentlyReading} />
          {/* Include a progress bar or input field to update the completion progress */}
        </div>
      )}
      {socialCards.length > 0 && (
        <div>
          <h2>Social Activity</h2>
          {socialCards.map((card) => (
            <div key={card.id}>
              {/* Render each social card using the BookCard component */}
              <BookCard book={card.book} />
              <p>{card.content}</p>
              {/* Include other relevant information such as the user who posted the card and the date/time */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DashboardPage;
