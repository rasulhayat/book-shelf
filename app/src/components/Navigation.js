import React from "react";
import { Button, Divider, IconButton, InputBase, Paper } from "@mui/material";
import { Search, Directions } from "@mui/icons-material";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    // <Navbar bg="light" expand="lg">
    //   <Container>
    //     <Navbar.Brand href="/">Bookshelf</Navbar.Brand>
    //     {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
    //     {/* <Navbar.Collapse id="basic-navbar-nav"> */}
    //     <Nav className="me-auto">
    //       <Nav.Link href="/">
    //         Home</Button>
    //       </Nav.Link>
    //       <Nav.Link href="/bookshelf">My Bookshelf</Nav.Link>
    //       <Nav.Link href="/dashboard">Dashboard</Nav.Link>
    //       <Nav.Link href="/bookclub">Book Club</Nav.Link>
    //       <Nav.Link href="/login">Login</Nav.Link>
    //       <Nav.Link href="/signup">Signup</Nav.Link>
    //     </Nav>
    //     {/* </Navbar.Collapse> */}
    //   </Container>
    // </Navbar>
    <div className="navbar">
      <div className="main-name">
        <Link to={"/"} className="link">
          <span>book</span>shelf
        </Link>
      </div>
      <div>
        <Link to={"/"} className="link">
          <Button className="navbar-btn" variant="container">
            Home
          </Button>
        </Link>
        <Link to={"/bookshelf"} className="link">
          <Button className="navbar-btn" variant="container">
            My Bookshelf
          </Button>
        </Link>
        <Link to={"/dashboard"} className="link">
          <Button className="navbar-btn" variant="container">
            Dashboard
          </Button>
        </Link>
        <Link to={"/bookclub"} className="link">
          <Button className="navbar-btn" variant="container">
            Book Club
          </Button>
        </Link>
      </div>
      <div className="nav-search">
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 300,
            height: 25,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Books"
            inputProps={{ "aria-label": "search books" }}
          />
          <IconButton type="button" sx={{ p: "2px" }} aria-label="search">
            <Search />
          </IconButton>
        </Paper>
      </div>
      <div>
        <Link to={"/login"} className="link">
          <Button className="navbar-btn" variant="container">
            Login
          </Button>
        </Link>
        <Link to={"/signup"} className="link">
          <Button className="navbar-btn" variant="container">
            Signup
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
