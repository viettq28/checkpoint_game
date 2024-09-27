import { useState, useEffect } from 'react';

const Point = ({ point, pos, next, setNext, handleSetPointsArray, gameState, setGameState }) => {
  const [stt, setStt] = useState('');
  const handleSetNext = () => {
    if (+point === +next) {
      setStt('correct');
      setNext((n) => n + 1);
    } else {
      setGameState('GAME_LOSS');
      setNext(1);
    }
  };
  useEffect(() => {
    if (stt === 'correct') {
      setTimeout(handleSetPointsArray, 600);
    }
  }, [stt, handleSetPointsArray]);

  return (
    <div
      className={`number ${stt}`}
      style={{ ...pos }}
      onClick={gameState === 'GAME_LOSS' ? undefined : handleSetNext}
    >
      {point}
    </div>
  );
};
export default Point;
