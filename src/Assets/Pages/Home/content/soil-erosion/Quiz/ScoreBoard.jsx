// ScoreBoard.js
import React from 'react';
import { useScore } from './MarcadorContext'; // Importa el hook de contexto

const ScoreBoard = () => {
  const { score } = useScore(); // Accede al puntaje

  return (
    <div className="scoreboard">
      <p>Puntaje: {score}</p>
    </div>
  );
};

export default ScoreBoard;
