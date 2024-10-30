import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment,incrementByAmount,reset } from './features/counter/counterSlice';
import { useState } from 'react';

function App() {
  const [amount,setAmount]=useState(0);
const count = useSelector((state)=> state.counter.value);
const dispatch = useDispatch();

  function handleIncreamentClick(){
    dispatch(increment())
  }
  function handleDecreamentClick(){
    dispatch(decrement())
  }
  function handleReset(){
    dispatch(reset());
  }
  function handleIncAmount(){
    dispatch(incrementByAmount (amount));
  }

  return (
    <>
      <div className="container">
        <button onClick={handleIncreamentClick}>+</button>
        <p>Count: {count}</p>
        <button onClick={handleDecreamentClick}>-</button>
        <br />
        <br />
        <button onClick={handleReset}>Reset</button>
        <br />
        <br />
        <input 
        type="Number"
        value={amount}
        placeholder='Enter your amount'
        onChange={(e)=>setAmount(e.target.value)}  />
        <br />
        <br />
        <button onClick={handleIncAmount} >Inc by Amount</button>
      </div>
    </>
  )
}

export default App
