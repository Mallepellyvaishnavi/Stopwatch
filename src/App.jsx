import React, { useState, useEffect } from 'react';
import './App.css'

const Stopwatch = () => {
  const [time, setTime] = useState(0); 
  const [isRunning, setIsRunning] = useState(false); 

  useEffect(() => {
    let timer;
    if (isRunning) {

      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
     
      clearInterval(timer);
    }

   
    return () => clearInterval(timer);
  }, [isRunning]);

  
    const formatTime = (time) => {
      const milliseconds = `0${(time % 1000) / 10}`.slice(-2);
      const seconds = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
      const minutes = `0${Math.floor((time / 60000) % 60)}`.slice(-2);
      return `${minutes}:${seconds}:${milliseconds}`;
    };

 
  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    
    <div className='container'>
      <h1>Stopwatch App</h1>
      <h2>{formatTime(time)}</h2>
      <button onClick={handleStart} disabled={isRunning}>
        Start
      </button>
      <button onClick={handleStop} disabled={!isRunning}>
        Stop
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Stopwatch;
