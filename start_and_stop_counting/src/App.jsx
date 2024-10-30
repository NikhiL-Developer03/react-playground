import { useState } from 'react'
import './App.css'
import { useRef } from 'react';
// a clock with start and stop functionality
function App() {
  const[currentCount, setCurrentCount] = useState(0);
  const[counter, setCounter] = useState(1);
  const timer = useRef();
  function startClock(){
    let value = setInterval(function(){
      setCurrentCount(c => c + 1);
      setCounter(counter=>counter+1);
      },1000)
      timer.current = value;
  }
  function stopClock(){
    clearInterval(timer.current);
    console.log(timer.current)
  }
  return <div>
  {currentCount}
  <br />
  <button onClick={startClock}>Satrt</button>
  <button onClick={stopClock}>Stop</button>
  </div>
}

export default App
