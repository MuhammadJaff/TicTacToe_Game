import React from 'react'
import Board from './Board'
import { useState } from 'react';

function Game() {
    const [history,setHistory] = useState([Array(9).fill(null)]);
    const [currentMove,setCurrentMove] = useState(0);  // new
    const currentSquare = history[currentMove];
    const xIsNext = currentMove % 2 === 0;

    // console.log(currentSquare);
    // console.log(history);
    
    const handlePlay = (nextSquare)=>{
      const nextHistory = [...history.slice(0,currentMove+1),nextSquare]
      setHistory(nextHistory);
      setCurrentMove(nextHistory.length-1);
    }
    
    const moves = history.map((square,move)=>{
      let description;
      move > 0 ?
        description = 'Go to back move #'+ move:
        description = 'Go to game start';

      const JumpTo = (nextmove)=>{
        setCurrentMove(nextmove); // new
      }

      return(
        <>
          <li key={move}>
            <button onClick={()=>JumpTo(move)}>{description}</button>
          </li>
        </>
      )

    });
    // console.log(moves);


  return (
    <>
      <Board xIsNext={xIsNext} square={currentSquare} onPlay={handlePlay} />
      <ol>{moves}</ol>
    </>
    
  )
}
export default Game

// setHistory([...history,nextSquare]); hoop bu orqali, boshida birinchi turgan historyni yoniga 
// har button bosilganda nextSquare qoshilib boradi va tarihi ketma ketligi bilan bob chiqadi.
// currentSquare bosa Boardga square bolib har btn bosilganda yengiladi shuni hisobiga bosilgan button
// qayta bosilmiydi, oyin tugagani bilinadi.
// currentSquare buni ishida historyni ichidagi 9li array groupladan oxirgisi boladi