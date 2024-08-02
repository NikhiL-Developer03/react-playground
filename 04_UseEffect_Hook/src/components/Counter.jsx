import React, { Component } from 'react'
import { useState,useEffect } from 'react';

const Counter = () => {
  //useSatet Hook
  const [counter,setCounter] = useState(0);
  //useEffect Hook - mounted
  useEffect( () => {
    console.log("Counter Mounted");

    return function () {
        console.log("UnMount Counter");
    }
  } , [])
// Empty dependencies Array means -> Whole Component
// if dep has some values

  //useEffect hook -updation
  useEffect( () => {
    console.log("Counter updation")
  } , [counter])

  const handleIncrement = () => {
  setCounter(counter + 1);
  }
  const handledecrement = () => {
  if(counter===0) return ;
    setCounter(counter - 1);
  }
  return (
    <>
      <div className="counter-container text-3xl font-bold ">
      <h1>Conter</h1>
        <h1>{counter}</h1>
        <br />
        <button onClick={handleIncrement} className='bg-green-500 mx-3'>Inc</button>
        <button onClick={handledecrement} className='bg-red-600 mx-3'>Dec</button>
      </div>
    </>
  )
}

export default Counter