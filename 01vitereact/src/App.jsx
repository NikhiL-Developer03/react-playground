import React from "react";
import { useState } from "react";
function App() {
  const [counter, setCounter] = useState(15);
  const addValue = () => {
    setCounter(counter+1);
  }
  const removeValue = () => {
    setCounter(counter-1);
  }
  return (
    <>
        <h1>Interview question</h1>
        <h2>Counter value : {counter}</h2>
        <button onClick={addValue}>Add value = {counter}</button>
        <br />
        <br />
        <button onClick={removeValue}>Remove value = {counter}</button>
        <footer><p>Footer : {counter}</p></footer>
    </>
  )
}

export default App
