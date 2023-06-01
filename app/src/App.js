import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation.js";
import HomePage from "./pages/HomePage.js";
import BookshelfPage from "./pages/BookshelfPage.js";
import DashboardPage from "./pages/DashboardPage.js";
import BookClubPage from "./pages/BookClubPage.js";
import LoginPage from "./pages/LoginPage.js";
import SignupPage from "./pages/SignupPage.js";

function App() {
  return (
    <div className="main">
      <Router>
        <div className="App">
          <Navigation />
          <div className="main-body">
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/bookshelf" element={<BookshelfPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/bookclub" element={<BookClubPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
