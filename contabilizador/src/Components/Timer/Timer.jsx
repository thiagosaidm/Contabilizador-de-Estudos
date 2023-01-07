import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isRunning]);

  return (
    <div className='content'>
      <div className="timer">
        {hours.toString().padStart(2, '0')}:
        {minutes.toString().padStart(2, '0')}:
        {secs.toString().padStart(2, '0')}
      </div>
      {isRunning ? (
        <button onClick={() => setIsRunning(false)}>Finalizar</button>
      ) : (
        <button onClick={() => setIsRunning(true)}>Iniciar</button>
      )}
    </div>
  );
}

export default Timer;

