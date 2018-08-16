import React, { Component } from "react";
import axios from "axios";
import "./Convertor.css";

class Convertor extends Component {
  constructor(props) {
    super(props);
  }
  handleInput = e => {
    console.log(e.target.value);

  };
  render() {
    const option = Array("gal", "L", "lbs", "kg", "mi", "km").map(unit => (
      <option key={unit} value={unit}>
        {unit}
      </option>
    ));
    return (
      <div id="convertor">
        <h1>Metric-Imperial Converter</h1>
        <main>
          <form onChange={this.handleInput}>
            <div>
              <input
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
              <div>The result will be shown here</div>
            </div>
          </form>
        </main>
        <section>
          <div className="example-usage">
            <details>
              <summary>Example usage:</summary>
              /api/convert?input=4gal /api/convert?input=1/2km
              /api/convert?input=5.4/3lbs /api/convert?input=kg
            </details>
          </div>
          <div className="example-return">
            <details>
              <summary>Example return:</summary>
              {`{initNum: 3.1, initUnit: 'mi', returnNum: 5, returnUnit: 'km', string: '3.1 miles converts to 5.00002 kilometers'}`}
            </details>
          </div>
        </section>
      </div>
    );
  }
}
export default Convertor;
