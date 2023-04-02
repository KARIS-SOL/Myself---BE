import {useState, useEffect} from 'react';


export default function Timer() {
const [showTimer, setShowTimer] = useState(false);
// timer 가 시작 될때 mount 되었을때
useEffect(() => {
  const timer = setInterval(()=> {
    console.log('타이머 돌아가는중');
  }, 1000);

  // timer 가 화면에서 사라질때 unmount 되었을때
  return () => {
    clearInterval(timer);
    console.log('타이머가 종료되었습니다');
  }
},[])
  
return (
  <div>
    {showTimer && <Timer />}
    <span>타이머를 시작합니다, 콘솔을 보세요</span>
    <br />
    <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
  </div>
)
}
