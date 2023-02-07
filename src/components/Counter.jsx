import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [timer, setTimer] = useState(0);
  //     getter  setter             initial value

  const decrement = e => {
    // setCounter(counter - 1);
    setCounter(prev => prev - 1);
  };

  const increment = e => {
    setCounter(prev => prev + 1);
  };

  const reset = e => setCounter(0);

  useEffect(() => {
    console.log('run useEffect');
    const intervalId = setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000);
    return () => {
      console.log('run useEffect as componentWillUnmount');
      clearInterval(intervalId);
    };
  }, [counter]);

  return (
    <div>
      <h1>Counter</h1>
      <button className="decrement-btn" onClick={decrement}>
        -
      </button>
      <span>{counter}</span>
      <button className="increment-btn" onClick={increment}>
        +
      </button>
      <br />
      <button className="reset-btn" onClick={reset}>
        Reset
      </button>
      <h1>{timer}</h1>
    </div>
  );
};

export default Counter;
