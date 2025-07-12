import React from 'react';

function GameBoard({ guesses, solution }) {

  return (
    <div className="game-board" style={{  
      textAlign: 'center'}}>
      {guesses.map((guess, i) => (
        <div key={i} className="guess-row">
          {guess.split('').map((letter, j) => {
            let color = 'gray';
            if (solution[j] === letter) color = 'green';
            else if (solution.includes(letter)) color = 'gold';

            return (
              <span key={j} className="letter-box" style={{ backgroundColor: color }}>
                {letter}
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default GameBoard;
