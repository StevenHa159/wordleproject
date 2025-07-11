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
  function Button({value}){
    return <button> {value} </button>
  };

  return (
    <>
      <div className="App">
        <h1>Wordle Clone</h1>
        <GameBoard guesses={guesses} solution={solution} />
        <Keyboard onGuess={handleGuess} />
      </div>
      <div className = "Row1">
        <Button value = "q"/>
        <Button value = "w"/>
        <Button value = "e"/>
        <Button value = "r"/>
        <Button value = "t"/>
        <Button value = "y"/>
        <Button value = "u"/>
        <Button value = "i"/>
        <Button value = "o"/>
        <Button value = "p"/>
        


      </div>
      <div className = "Row2">
        <Button value = "a"/>
        <Button value = "s"/>
        <Button value = "d"/>
        <Button value = "e"/>
        <Button value = "f"/>
        <Button value = "g"/>
        <Button value = "h"/>
        <Button value = "j"/>
        <Button value = "k"/>
        <Button value = "l"/>

      </div>
      <div className = "Row3">
        <Button value = "enter"/>
        <Button value = "z"/>
        <Button value = "x"/>
        <Button value = "c"/>
        <Button value = "v"/>
        <Button value = "b"/>
        <Button value = "n"/>
        <Button value = "m"/>
        <Button value = "Delete"/>
        
      </div>
    </>
    
  );
}

export default App;

