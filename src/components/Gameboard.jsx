import { useState, useEffect } from 'react';
import Point from '../components/Point';

const Gameboard = ({ point, gameState, setGameState }) => {
  const [pointsArray, setPointsArray] = useState([]);
  const [pos, setPos] = useState([]);
  const [next, setNext] = useState(1);

  useEffect(() => {
    if (gameState === 'NEW_GAME') {
      const pointsArr = [];
      const posArr = [];
      for (let i = point; i > 0; i--) {
        const newPos = {
          top: `${Math.random() * 85 + 1}%`,
          left: `${Math.random() * 85 + 1}%`,
        };
        pointsArr.push(i);
        posArr.push(newPos);
      }
      setPointsArray(pointsArr);
      setPos(posArr);
    }
  }, [point, gameState]);

  useEffect(() => {
    if (!pointsArray.length && gameState === 'GAME_START') {
      setGameState('GAME_WON');
      setNext(1);
    }
  }, [pointsArray, gameState, setGameState]);

  const handleSetPointsArray = () => {
    setPointsArray(pointsArray.slice(0, pointsArray.length - 1));
  };

  return (
    <section>
      <div className="board">
        {!!pos.length &&
          pointsArray.map((point, i) => {
            return (
              <Point
                key={i}
                point={point}
                pos={pos[i]}
                next={next}
                setNext={setNext}
                gameState={gameState}
                setGameState={setGameState}
                handleSetPointsArray={handleSetPointsArray}
              />
            );
          })}
      </div>
    </section>
  );
};
export default Gameboard;
