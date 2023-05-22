import React, { Component } from "react";
import BooksDataService from "../services/books.service";

import Books from "./books.component";
import LikeButton from "./LikeButton";
import Comment from "./comentarios.component"; 
import './books-list.css';

export default class BooksList extends Component {
  constructor(props) {
    super(props);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveTutorial = this.setActiveTutorial.bind(this);
    this.onDataChange = this.onDataChange.bind(this);

    this.state = {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
    };

    this.unsubscribe = undefined;
  }

  componentDidMount() {
    this.unsubscribe = BooksDataService.getAll().orderBy("title", "asc").onSnapshot(this.onDataChange);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onDataChange(items) {
    let tutorials = [];

    items.forEach((item) => {
      let id = item.id;
      let data = item.data();
      tutorials.push({
        id: id,
        title: data.title,
        description: data.description,
        published: data.published,
        url: data.url,
      });
    });

    this.setState({
      tutorials: tutorials,
    });
  }

  refreshList() {
    this.setState({
      currentTutorial: null,
      currentIndex: -1,
    });
  }

  setActiveTutorial(tutorial, index) {
    this.setState({
      currentTutorial: tutorial,
      currentIndex: index,
    });
  }

  render() { 
    const { tutorials, currentTutorial, currentIndex } = this.state;

    return (
      <div className="row">
        <div className="tamano-3">
          <h4>Books List</h4>

          <ul className="list-group">
            {tutorials &&
              tutorials.map((tutorial, index) => (
                <li
                  className={ "list-group-item " + (index === currentIndex ? "active" : "") }
                  onClick={() => this.setActiveTutorial(tutorial, index)}
                  key={index}
                  
                >
                  
                  {tutorial.title}
                  <img src={tutorial.url} alt="" ></img>
                  
                  <LikeButton />
                  <Comment />
                  
                </li>
                
              ))}
          </ul>
        </div>
        <div className="tamano-3">
          {currentTutorial ? (
            <Books
              
              tutorial={currentTutorial}
              refreshList={this.refreshList}
              
            />
          ) : (
            <div>
              <br />
              <p>Please click on a Books...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
