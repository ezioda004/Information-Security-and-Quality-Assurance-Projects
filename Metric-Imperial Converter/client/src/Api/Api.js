import React, { Component } from "react";
import axios from "axios";

class Api extends Component {
    constructor(props){
        super(props);
        this.state = {
            res: ""
        }
    }
  componentDidMount() {
    let URL = new URLSearchParams(this.props.location.search);
    let query = URL.get("input").match(/[0-9]+|[a-z]+/gi);
    axios
      .get("/api/convert", {
        params: {
          input: query[0] || 1,
          unit: query[1] || "gal"
        }
      })
      .then(res => this.setState({
          res: res.data
      }));
  }
  handleRes(){
    return Object.keys(this.state.res).map(key => <div key = {key}>{key}: {this.state.res[key]}</div>)
  }
  render() {
    return <div>{this.state.res && this.handleRes()}</div>;
  }
}

export default Api;
