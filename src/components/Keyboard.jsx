
import React, { useState } from 'react';



function Keyboard({ onGuess, letterColors}) {
  const [currentGuess, setCurrentGuess] = useState('');
  

  const handleKeyPress = (e) => {
    
    if (e.key === 'Enter') {
      if (currentGuess.length === 5) {
        onGuess(currentGuess.toLowerCase());
        setCurrentGuess('');
        console.log("game over"); 
      }
    } else if (e.key === 'Backspace') {
      setCurrentGuess(currentGuess.slice(0, -1));
    } else if (/^[A-Za-z]$/.test(e.key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess(currentGuess + e.key.toUpperCase());
      }
    }
  };

  function Button({value, letterColors}){
    const color = letterColors[value] || 'lightgray';

    return (<button id = "keys" onClick={() => handleKeyPress({ key: value })} style={{ backgroundColor: color }}> {value} </button>);
  };


  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  });
//add buttons here, and in this function. 
  return (
    <>
    <div className="keyboard" style={{  
      textAlign: 'center'}}>
      <p >Your Guess: {currentGuess}</p>
      <button onClick={() => {
        if (currentGuess.length === 5) {
          onGuess(currentGuess.toLowerCase());
          setCurrentGuess('');
        }
      }}>Submit</button>
    </div>


<div className = "Row1" style={{
      textAlign: 'center'
    }}>
        <Button value = "q" letterColors={letterColors}/>
        <Button value = "w" letterColors={letterColors}/>
        <Button value = "e" letterColors={letterColors}/>
        <Button value = "r" letterColors={letterColors}/>
        <Button value = "t" letterColors={letterColors}/>
        <Button value = "y" letterColors={letterColors}/>
        <Button value = "u" letterColors={letterColors}/>
        <Button value = "i" letterColors={letterColors}/>
        <Button value = "o" letterColors={letterColors}/>
        <Button value = "p" letterColors={letterColors}/>
        


      </div>
      <div className = "Row2" style={{  
      textAlign: 'center'}}>
        <Button value = "a" letterColors={letterColors}/>
        <Button value = "s" letterColors={letterColors}/>
        <Button value = "d" letterColors={letterColors}/>
        <Button value = "f" letterColors={letterColors}/>
        <Button value = "g" letterColors={letterColors}/>
        <Button value = "h" letterColors={letterColors}/>
        <Button value = "j" letterColors={letterColors}/>
        <Button value = "k" letterColors={letterColors}/>
        <Button value = "l" letterColors={letterColors}/>

      </div>
      <div className = "Row3" style={{
      textAlign: 'center'}}>
        <Button value = "Enter" letterColors={letterColors}/>
        <Button value = "z" letterColors={letterColors}/>
        <Button value = "x" letterColors={letterColors}/>
        <Button value = "c" letterColors={letterColors}/>
        <Button value = "v" letterColors={letterColors}/>
        <Button value = "b" letterColors={letterColors}/>
        <Button value = "n" letterColors={letterColors}/>
        <Button value = "m" letterColors={letterColors}/>
        <Button value = "Backspace" letterColors={letterColors}/>
        
      </div>
      </>
  );
}

export default Keyboard;
