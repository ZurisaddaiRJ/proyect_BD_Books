import React, { Component } from "react";
//import React, { TutorialsList } from "react";
//import React, { AddBooks } from "react";
//import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";

import AddBooks from "./components/add-books.component";
import BooksList from "./components/books-list.component";
import Header from './components/Header';
import Post from './components/Post';


class App extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
          <a href="/tutorials" className="navbar-brand">
            <Header />
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                books
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                add
              </Link>
            </li>

          </div>
        </nav>
        <Post />

        <div className="container mt-3">
          <h2></h2>
          <Routes>
            <Route path="/tutorials" element={<BooksList />} />
            <Route path="/add" element={<AddBooks />} />
          </Routes>
        </div>
      </div >
    );
  }

}



export default App;
