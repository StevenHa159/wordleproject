import React, { useState } from 'react';
import { words } from './words';
import GameBoard from './GameBoard';
import Keyboard from './Keyboard';

function App() {
  const getRandomWord = () => words[Math.floor(Math.random() * words.length)];
  const [solution, setSolution] = useState(getRandomWord());
  const [guesses, setGuesses] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [hasWon, setHasWon] = useState(false);

  const handleGuess = (guess) => {
    if (gameOver || guesses.length >= 6) return;

    const newGuesses = [...guesses, guess];
    setGuesses(newGuesses);

    if (guess === solution) {
      setGameOver(true);
      setHasWon(true);
    } else if (newGuesses.length === 6) {
      setGameOver(true);
      setHasWon(false);
    }
  };

  const resetGame = () => {
    setSolution(getRandomWord());
    setGuesses([]);
    setGameOver(false);
    setHasWon(false);
  };

  return (
    <div className="App">
      <h1>Wordle Clone</h1>
      <GameBoard guesses={guesses} solution={solution} />
      <Keyboard onGuess={handleGuess} />
      
      {gameOver && (
        <div>
          <h2>{hasWon ? "🎉 You Win!" : `😢 You Lose! The word was: ${solution}`}</h2>
        </div>
      )}

      <button onClick={resetGame}>Restart Game</button>
    </div>
  );
}

export default App;
