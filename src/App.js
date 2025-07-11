import React, { useState } from 'react';
import { words } from './words';
import GameBoard from './components/GameBoard';
import Keyboard from './components/Keyboard';


function App() {
  const [solution] = useState(words[Math.floor(Math.random() * words.length)]);
  const [guesses, setGuesses] = useState([]);


  
  
  const handleGuess = (guess) => {
    if (guesses.length < 6) {
      setGuesses([...guesses, guess]);
    }
  };
  

  return (
    <>
      <div className="App">
        <h1>Wordle Clone</h1>
        <GameBoard guesses={guesses} solution={solution} />
        <Keyboard onGuess={handleGuess} />
      </div>
      
      
    </>
    
  );
}

export default App;

