import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";
import axios from "axios";

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
        <Route render = {() => (
          <div>Wrong path!!</div>
        )} />
        </Switch>
      </div>
    );
  }
}

export default App;
