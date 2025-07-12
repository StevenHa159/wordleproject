import React, { useState } from 'react';
import { words } from './words';
import GameBoard from './components/GameBoard';
import Keyboard from './components/Keyboard';
import trophyImage from './trophy2.jpg'; 

function App() {
  const getRandomWord = () => words[Math.floor(Math.random() * words.length)];

  const [gameId, setGameId] = useState(0); 
  const [solution, setSolution] = useState(getRandomWord());
  const [guesses, setGuesses] = useState([]);
  const [letterColors, setLetterColors] = useState({});
  const [gameOver, setGameOver] = useState(false);
  const [hasWon, setHasWon] = useState(false);

  const updateLetterColors = (guess, solution) => {
    const newColors = { ...letterColors };

    guess.split('').forEach((letter, i) => {
      const isCorrect = solution[i] === letter;
      const isPresent = solution.includes(letter);

      let newColor = 'gray';
      if (isCorrect) newColor = 'green';
      else if (isPresent) newColor = 'gold';

      const current = newColors[letter];
      if (current === 'green') return;
      if (current === 'gold' && newColor === 'gray') return;
      newColors[letter] = newColor;
    });

    setLetterColors(newColors);
  };

  const handleGuess = (guess) => {
    if (gameOver || guesses.length >= 6) return;

    updateLetterColors(guess, solution);
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
    setGameId(prev => prev + 1); // force re-render
    setSolution(getRandomWord());
    setGuesses([]);
    setLetterColors({});
    setGameOver(false);
    setHasWon(false);
  };

  return (
    <div className="App" style={{ textAlign: 'center' }} key={gameId}>
      <h1>Wordle Clone</h1>
      <GameBoard guesses={guesses} solution={solution} />
      <Keyboard onGuess={handleGuess} letterColors={letterColors} />

      {gameOver && (
        <div>
          <h2>{hasWon ? "🎉 You Win!" : `😢 You Lose! The word was: ${solution}`}</h2>
          {hasWon && (
            <img
              src={trophyImage}
              alt="Trophy"
              style={{ width: '150px', marginTop: '10px' }}
            />
          )}
        </div>
      )}

      <button onClick={resetGame} style={{ marginTop: '15px' }}>
        Restart Game
      </button>
    </div>
  );
}

export default App;
