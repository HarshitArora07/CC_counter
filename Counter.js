// src/components/Counter.js
import React, { useState } from 'react';
import Button from './Button';

const Counter = () => {
  // State to hold the count value
  const [count, setCount] = useState(0);

  // Increment function
  const increment = () => setCount(count + 1);

  // Decrement function
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h1>Current Count: {count}</h1>
      <Button label="Increment" onClick={increment} />
      <Button label="Decrement" onClick={decrement} />
    </div>
  );
};

export default Counter;
