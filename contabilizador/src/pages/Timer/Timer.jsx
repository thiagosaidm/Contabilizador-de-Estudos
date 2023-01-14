import React, { useState, useEffect } from "react";

import Saudacao from "../../Components/Saudacao/Saudacao";
import Assunto from "../../Components/Assunto/Assunto";

function Timer({ nome, assunto }) {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isRunning]);

  return (
    <div className="content">
      <div className="timer">
        <Saudacao nome={nome} />
        <Assunto assunto={assunto} />
        <div className="clock">
          {hours.toString().padStart(2, "0")}:
          {minutes.toString().padStart(2, "0")}:
          {secs.toString().padStart(2, "0")}
        </div>

        <div className="buttons">
          {isRunning ? (
            <button onClick={() => setIsRunning(false)}>Finalizar</button>
          ) : (
            <button onClick={() => setIsRunning(true)}>Iniciar</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Timer;
