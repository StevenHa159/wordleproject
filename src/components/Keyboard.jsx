import React, { useState } from 'react';



function Keyboard({ onGuess}) {
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

  function Button({value}){

    return (<button id = "keys" onClick={() => handleKeyPress({ key: value })}> {value} </button>);
  };


  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  });
//add buttons here, and in this function. 
  return (
    <>
    <div className="keyboard">
      <p>Your Guess: {currentGuess}</p>
      <button onClick={() => {
        if (currentGuess.length === 5) {
          onGuess(currentGuess.toLowerCase());
          setCurrentGuess('');
        }
      }}>Submit</button>
    </div>


<div className = "Row1">
        <Button value = "q" />
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

export default Keyboard;
