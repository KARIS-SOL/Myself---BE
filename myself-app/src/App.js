import React, { useState, useRef } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  console.log(countRef);
  console.log('렌더링~~');

  const increaseCountState = () => {
    setCount(count + 1);
  };

  const increaseRefState = () => {
    countRef.current = countRef.current + 1;
  };

  return (
    <div>
      <p>State: {count}</p>
      <button onClick={increaseCountState}>State 올려!</button>
      <br />
      <p>Ref: {countRef.current}</p>
      <button onClick={increaseRefState}>Ref 올려!!</button>
    </div>
  );
};

export default App;
