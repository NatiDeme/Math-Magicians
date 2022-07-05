import React from 'react';
import '../style/Calculator.css';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <div className="Calculator-layout">
        <h2>Lets do some math</h2>
        <input type="number" className="cal-input" id="calculator-input" placeholder="0" />

        <div className="row">
          <button type="button" className="btn btn-outline-primary">AC</button>
          <button type="button" className="btn btn-outline-primary">+/-</button>
          <button type="button" className="btn btn-outline-primary">%</button>
          <button type="button" className="btn btn-outline-primary right">/</button>
        </div>
        <div className="row">
          <button type="button" className="btn btn-outline-primary">7</button>
          <button type="button" className="btn btn-outline-primary">8</button>
          <button type="button" className="btn btn-outline-primary">9</button>
          <button type="button" className="btn btn-outline-primary right">*</button>
        </div>
        <div className="row">
          <button type="button" className="btn btn-outline-primary">4</button>
          <button type="button" className="btn btn-outline-primary">5</button>
          <button type="button" className="btn btn-outline-primary">6</button>
          <button type="button" className="btn btn-outline-primary right">-</button>
        </div>
        <div className="row">
          <button type="button" className="btn btn-outline-primary">1</button>
          <button type="button" className="btn btn-outline-primary">2</button>
          <button type="button" className="btn btn-outline-primary">3</button>
          <button type="button" className="btn btn-outline-primary right">+</button>
        </div>
        <div className="row">
          <button type="button" className="btn btn-outline-primary zero">0</button>
          <button type="button" className="btn btn-outline-primary">.</button>
          <button type="button" className="btn btn-outline-primary right">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
