import { useState } from 'react';
import Board from './Board';
import Message from './Message';
import { calculater } from './calculater';

const TicTacToe = () => {
   //
   const boardValues = [
      { characters: Array(9).fill(null), controlNext: false },
   ];
   const [xo, setXO] = useState(boardValues);
   const [isNext, setIsNext] = useState(0);
   const currentXO = xo[isNext];

   const { theWinner, winningLines } = calculater(currentXO.characters);

   const handleClick = (squarePosition) => {
      if (currentXO.characters[squarePosition] || theWinner) {
         return;
      }

      setXO((prev) => {
         const last = prev[prev.length - 1];

         const newCharacter = last.characters.map((sq, index) => {
            if (last.controlNext === false) {
               if (index === squarePosition) {
                  return 'X';
               }
            } else if (last.controlNext === true) {
               if (index === squarePosition) {
                  return 'O';
               }
            }
            return sq;
         });
         return prev.concat({
            characters: newCharacter,
            controlNext: !last.controlNext,
         });
      });
      setIsNext((prev) => prev + 1);
   };

   const boardFunction = (squarePosition) => {
      const theWinnerLine = winningLines.includes(squarePosition);
      let boardStyle;
      if (theWinnerLine) {
         boardStyle = 'buttonT bold';
      } else {
         boardStyle = 'buttonT';
      }

      return (
         <div>
            <Board
               handleClick={() => handleClick(squarePosition)}
               squarePosition={currentXO.characters[squarePosition]}
               boardStyle={boardStyle}
            />
         </div>
      );
   };
   return (
      <div>
         <Message theWinner={theWinner} currentXO={currentXO} />
         <div className="divT">
            {boardFunction(0)}
            {boardFunction(1)}
            {boardFunction(2)}
            {boardFunction(3)}
            {boardFunction(4)}
            {boardFunction(5)}
            {boardFunction(6)}
            {boardFunction(7)}
            {boardFunction(8)}
         </div>

         <style jsx>{`
            .divT {
               width: 400px;
               height: 400px;
               margin: 30px;
               display: flex;
               flex-wrap: wrap;
            }
         `}</style>
      </div>
   );
};

export default TicTacToe;
