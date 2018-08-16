import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={() => (
            <div>
              This is the main path
              <Link to="/about">about</Link>
            </div>
          )}
        />
        <Route
          exact
          path="/about"
          render={() => (
            <div>
              this is about section
              <Link to="/">Home</Link>
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
