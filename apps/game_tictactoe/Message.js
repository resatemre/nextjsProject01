const Message = ({ theWinner, currentXO }) => {
   const noMove = currentXO.characters.every((e) => e != null);

   return (
      <div>
         <h2>
            {theWinner && `The Winner : ${theWinner}`}
            {!theWinner &&
               !noMove &&
               `Next Player : ${currentXO.controlNext ? 'O' : 'X'}`}
            {noMove && 'X and O tied'}
         </h2>
      </div>
   );
};

export default Message;
