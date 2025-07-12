import React, { useState } from 'react';
import { words } from './words';
import GameBoard from './components/GameBoard';
import Keyboard from './components/Keyboard';

function App() {
  const getRandomWord = () => words[Math.floor(Math.random() * words.length)];
  const [solution, setSolution] = useState(getRandomWord());
  const [guesses, setGuesses] = useState([]);
  const [letterColors, setLetterColors] = useState({});
  const [gameOver, setGameOver] = useState(false);
  const [hasWon, setHasWon] = useState(false);
  

  function updateLetterColors(guess, solution) {
  const newColors = { ...letterColors };

  guess.split('').forEach((letter, i) => {
    const isCorrect = solution[i] === letter;
    const isPresent = solution.includes(letter);

    let newColor = 'gray';
    if (isCorrect) newColor = 'green';
    else if (isPresent) newColor = 'gold';

    // Keep the highest priority color (green > gold > gray)
    const current = newColors[letter];
    if (current === 'green') return; // already correct
    if (current === 'gold' && newColor === 'gray') return; // don't downgrade
    newColors[letter] = newColor;
  });

  setLetterColors(newColors);
}
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
    setSolution(getRandomWord());
    setGuesses([]);
    setGameOver(false);
    setHasWon(false);
    window.location.reload();
  };
  

  return (
    <div className="App">
      <h1>Wordle Clone</h1>
      <GameBoard guesses={guesses} solution={solution} />
      <Keyboard onGuess={handleGuess} letterColors={letterColors} />
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