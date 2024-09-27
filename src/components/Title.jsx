const Title = ({ gameState }) => {
  return (
    <h3
      style={{
        color:
          gameState === 'GAME_LOSS'
            ? 'red'
            : gameState === 'GAME_WON'
            ? 'green'
            : "black",
      }}
    >
      {gameState === 'GAME_LOSS'
        ? 'GAME OVER'
        : gameState === 'GAME_WON'
        ? 'ALL CLEARED'
        : "LET'S PLAY"}
    </h3>
  );
};
export default Title;
