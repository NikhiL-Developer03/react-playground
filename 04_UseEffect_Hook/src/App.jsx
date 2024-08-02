import { useState } from 'react';
import './App.css'

import Counter from './components/Counter';
function App() {
  const [state,setState]=useState(true);
  return (
    <>
    <button onClick={(e) => {setState(!state)}}>Toggle</button>
    {state ? <Counter /> : ""}
    </>
  );
};

export default App
