import { useState, useEffect } from 'react';

const GameControl = ({ setPoint, gameState, setGameState }) => {
  const [timer, setTimer] = useState(0);
  const handleStart = () => {
    const point = document.querySelector('#point').value;
    setPoint(point);
    setGameState('NEW_GAME');
  };

  useEffect(() => {
    if (gameState === 'NEW_GAME') {
      setTimer(0)
      setGameState('GAME_START');
    }
    if (gameState === 'GAME_START') {
      const intervalId = setInterval(() => {
        setTimer((c) => c + 1);
      }, 100);

      return () => clearInterval(intervalId);
    }
  }, [gameState, setGameState]);

  return (
    <section>
      <div>
        <span>Points:</span>
        <input id="point" defaultValue={0} />
      </div>
      <div>
        <span>Time:</span>
        <span>{timer / 10}s</span>
      </div>
      <button type="button" onClick={handleStart}>
        {gameState === 'FRESH_GAME' ? 'Play' : 'Restart'}
      </button>
    </section>
  );
};
export default GameControl;
