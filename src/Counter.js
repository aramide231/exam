import React, { useState } from 'react';
import './style.css';
import useCounter from './useCounter';
import Ages from './Ages';
import NotFoundPage from './404';
import Header from "./Header";

function Counter() {
  const { count, increment, decrement, reset, setValue } = useCounter(0);
  const [figure, setFigure] = useState('');

  const handleIncrement = (event) => {
    event.preventDefault();
    increment();
  };

  const handleDecrement = (event) => {
    event.preventDefault();
    decrement();
  };

  const handleReset = (event) => {
    event.preventDefault();
    reset();
  };

  const appendFigure = () => {
    setValue(Number(String(count) + figure));
  };

  const handleFigureChange = (event) => {
    setFigure(event.target.value);
  };


    


  return (
    <section className="center">
      <Header/>
      <h1 className="people">{count}</h1>
      <h1 className="handle">
        <button onClick={handleIncrement}>increment</button>
        <button onClick={handleDecrement}>decrement</button>
        <button onClick={handleReset}>reset</button>
      </h1>
      <section className="form">
        <input
          type="text"
          placeholder="Enter a figure"
          value={figure}
          onChange={handleFigureChange}
        />
        <button className="submit" onClick={appendFigure}>
          append
        </button>
      
      </section> 
     
        <Ages/>
    
      
      <a href="./update">Error 404</a>
    </section>
       
    
  );
}

export default Counter;
