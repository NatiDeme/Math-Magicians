import React, { useState } from 'react';
import '../style/Calculator.css';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const afterClick = (e) => {
    const buttonName = e.target.innerText;
    setState(calculate({
      ...state,
    }, buttonName));
  };

  const { total, operation, next } = state;

  const result = (
    <p>
      {total}
      {' '}
      {operation}
      {' '}
      {next}
    </p>
  );

  return (
    <div className="Calculator-layout">
      <div className="cal-input">{result}</div>
      <div className="row">
        <button type="button" className="btn btn-outline-primary" onClick={afterClick}>AC</button>
        <button type="button" className="btn btn-outline-primary" onClick={afterClick}>+/-</button>
        <button type="button" className="btn btn-outline-primary" onClick={afterClick}>%</button>
        <button type="button" className="btn btn-outline-primary right" onClick={afterClick}>/</button>
      </div>
      <div className="row">
        <button type="button" className="btn btn-outline-primary" onClick={afterClick}>7</button>
        <button type="button" className="btn btn-outline-primary" onClick={afterClick}>8</button>
        <button type="button" className="btn btn-outline-primary" onClick={afterClick}>9</button>
        <button type="button" className="btn btn-outline-primary right" onClick={afterClick}>*</button>
      </div>
      <div className="row">
        <button type="button" className="btn btn-outline-primary" onClick={afterClick}>4</button>
        <button type="button" className="btn btn-outline-primary" onClick={afterClick}>5</button>
        <button type="button" className="btn btn-outline-primary" onClick={afterClick}>6</button>
        <button type="button" className="btn btn-outline-primary right" onClick={afterClick}>-</button>
      </div>
      <div className="row">
        <button type="button" className="btn btn-outline-primary" onClick={afterClick}>1</button>
        <button type="button" className="btn btn-outline-primary" onClick={afterClick}>2</button>
        <button type="button" className="btn btn-outline-primary" onClick={afterClick}>3</button>
        <button type="button" className="btn btn-outline-primary right" onClick={afterClick}>+</button>
      </div>
      <div className="row">
        <button type="button" className="btn btn-outline-primary zero" onClick={afterClick}>0</button>
        <button type="button" className="btn btn-outline-primary" onClick={afterClick}>.</button>
        <button type="button" className="btn btn-outline-primary right" onClick={afterClick}>=</button>
      </div>
    </div>
  );
};

export default Calculator;