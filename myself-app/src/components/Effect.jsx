import {useState, useEffect } from 'react';

export default function Effect() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState('');

  const handleCountUpdate = () => {
    setCount(count + 1);
  }

  const handleInputChange = (e) => {
    setName(e.target.value);
  }


  // 렌더링 될때마다 매번 실행됨
  useEffect(() => {
    console.log('매번 렌더링🐈‍⬛');
  })


  //마운트 +  [defendency array] 변경될때만 실행
  useEffect(() => {
    console.log('name 변화!✌️');
  },[name]);

    //마운트 +  [defendency array] 변경될때만 실행
    useEffect(() => {
      console.log('count 변화!😃');
    },[count]);

  return(
    <div>
      <button onClick={handleCountUpdate}>Update 되라!</button>
      <span>count: {count}</span>
      <br />
      <input type="text" value={name} onChange={handleInputChange}/>
      <span>name: {name}</span>
    </div>

  )
}

