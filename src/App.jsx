import { useState } from 'react'
import Gameboard from '../src/components/Gameboard';
import GameControl from './components/GameControl';
import Title from '../src/components/Title'

import './App.css'

function App() {
  const [point, setPoint] = useState(0);
  const [gameState, setGameState] = useState('FRESH_GAME');

  return (
    <main>
      <Title gameState={gameState}/>
      <GameControl setPoint={setPoint} gameState={gameState} setGameState={setGameState}/>
      <Gameboard point={point} gameState={gameState} setGameState={setGameState}/>
    </main>
  )
}

export default App
