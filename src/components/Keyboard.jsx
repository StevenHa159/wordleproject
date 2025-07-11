import React, { useState } from 'react';

function Keyboard({ onGuess }) {
  const [currentGuess, setCurrentGuess] = useState('');

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (currentGuess.length === 5) {
        onGuess(currentGuess.toLowerCase());
        setCurrentGuess('');
      }
    } else if (e.key === 'Backspace') {
      setCurrentGuess(currentGuess.slice(0, -1));
    } else if (/^[A-Za-z]$/.test(e.key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess(currentGuess + e.key.toUpperCase());
      }
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  });

  return (
    <div className="keyboard">
      <p>Your Guess: {currentGuess}</p>
      <button onClick={() => {
        if (currentGuess.length === 5) {
          onGuess(currentGuess.toLowerCase());
          setCurrentGuess('');
        }
      }}>Submit</button>
    </div>
  );
}

export default Keyboard;
