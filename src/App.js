import React, { useState } from 'react';
import { words } from './words';
import GameBoard from './components/GameBoard';
import Keyboard from './components/Keyboard';


function App() {
  const [solution] = useState(words[Math.floor(Math.random() * words.length)]);
  const [guesses, setGuesses] = useState([]);
  const [letterColors, setLetterColors] = useState({});
  

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
    if (guesses.length < 6) {
      setGuesses([...guesses, guess]);
      updateLetterColors(guess, solution);
    }
  };
  

  return (
    <>
      <div className="App">
        <h1>Wordle Clone</h1>
        <GameBoard guesses={guesses} solution={solution} />
        <Keyboard onGuess={handleGuess} letterColors={letterColors}/>
      </div>
      
      
    </>
    
  );
}

export default App;

