import React, { Component } from "react";
import axios from "axios";
import Footer from "../Footer/Footer";
import "./Convertor.css";

class Convertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      send: {
        input: "",
        unit: "gal"
      },
      recieve: {
        input: "",
        unit: ""
      }
    };
  }
  handleChange = event => {
    let val = event.target;
    let node = event.target.nodeName;
    if (node === "INPUT") {
      this.setState(prevState => ({
        send: {
          input: val.value,
          unit: prevState.send.unit
        }
      }));
    } else {
      this.setState(prevState => ({
        send: {
          input: prevState.send.input,
          unit: val.value
        }
      }));
    }
    axios
      .get("/api/convert", {
        params: {
          input: node === "INPUT" ? event.target.value : this.state.send.input,
          unit: node === "INPUT" ? this.state.send.unit : event.target.value
        }
      })
      .then(res =>
        this.setState({
          recieve: {
            input: res.data.returnNum,
            unit: res.data.returnUnit
          }
        })
      )
      .catch(err => console.log(err));
  };
  render() {
    const option = ["gal", "L", "lbs", "kg", "mi", "km"].map(unit => (
      <option key={unit} value={unit}>
        {unit}
      </option>
    ));
    return (
      <div id="convertor">
        <h1>Metric-Imperial Converter</h1>
        <main>
          <form onChange={this.handleChange}>
            <div>
              <input
                value={this.state.input}
                type="text"
                placeholder="🔍"
                onFocus={e => (e.target.placeholder = "")}
                onBlur={e => (e.target.placeholder = "🔍")}
              />
            </div>
            <div className="unit">
              <select name="" id="">
                {option}
              </select>
            </div>
            <div className="result">
              <div>
                {this.state.recieve.input} - {this.state.recieve.unit}
              </div>
            </div>
          </form>
        </main>
        <section>
          <div className="example-usage">
            <details>
              <summary>Example usage:</summary>
              <ul>
                <li>/api/convert?input=4gal</li>
                <li>/api/convert?input=1/2km</li>
                <li>/api/convert?input=5.4/3lbs</li>
                <li>/api/convert?input=kg</li>
              </ul>
            </details>
          </div>
          <div className="example-return">
            <details>
              <summary>Example return:</summary>
              {`{initNum: 3.1, initUnit: 'mi', returnNum: 5, returnUnit: 'km', string: '3.1 miles converts to 5.00002 kilometers'}`}
            </details>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
export default Convertor;
