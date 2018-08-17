import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
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
          <div>Wrong path!!</div>
        )} />
        </Switch>
      </div>
    );
  }
}

export default App;
