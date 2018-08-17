import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Api from "../Api/Api";

import Convertor from "../Convertor/Convertor";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          component = {Convertor}
        />
        <Route 
          exact
          path="/api/convert"
          component = {Api}
        />
        <Route render = {() => (
          <div><h1>404 Page Not Found</h1>
            <p>The page you're looking for doesnt exist. Please click <Link to = "/">here</Link> to go back to the main page.</p>
          </div>
        )} />
        </Switch>
      </div>
    );
  }
}

export default App;
