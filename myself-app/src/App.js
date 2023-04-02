import React, { useState, useRef } from 'react';
import './App.css';

const App = () => {
  const [renderer, setRenderer] = useState(0);
  // 아무리 렌더링이되도 마운트가 시작해서 마운트가 해제될때까지 같은값을 유지함
  const countRef = useRef(0);
  // 렌더링 될때마다 초기값 0 으로 돌아감
  let countVar = 0;

  const doRendering = () => {
    setRenderer(renderer + 1);
  };

  const increaseRef = () => {
    countRef.current = countRef.current + 1;
    console.log('ref:', countRef.current);
  };

  const increaseVar = () => {
    countVar = countVar + 1;
    console.log('var:', countVar);
  };

  const printResults = () => {
    console.log(`ref: ${countRef.current}, var: ${countVar}`);
  };
  return (
    <div>
      <p>Ref: {countRef.current}</p>
      <p>Var: {countVar}</p>
      <button onClick={doRendering}>Render!</button>
      <button onClick={increaseRef}>Ref 올려!</button>
      <button onClick={increaseVar}>Var 올려!</button>
      <button onClick={printResults}>Ref, Var 값 출력!</button>
    </div>
  );
};

export default App;
