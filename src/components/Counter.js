import React from 'react';

const Counter = ({ count, onDecrement, onIncrement, onInputNumberChange, numberInputted, onInputNumber, clicks }) => {

  return (
    <div>
      <div>
        <button onClick={onDecrement}>-</button>
        <span>{count}</span>
        <button onClick={onIncrement}>+</button>
        <hr />
        <h3>Amount of times the increment and decrement numbers have been clicked: {clicks} </h3>
        <input type='text' onChange={event => onInputNumberChange(event.target.value)} value={numberInputted} />
        <button onClick={onInputNumber}>Change Count Number</button>
      </div>
    </div>
  );
}


export default Counter;