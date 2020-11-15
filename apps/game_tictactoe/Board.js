const Board = ({ squarePosition, handleClick, boardStyle }) => {
   return (
      <div style={{ marginBottom: '0' }}>
         <button className={boardStyle} type="button" onClick={handleClick}>
            {squarePosition}
         </button>
         <style jsx>
            {`
               .buttonT {
                  width: 133px;
                  height: 133px;
                  color: white;
                  margin: 10;
                  outline: none;
                  display: flex;
                  background: rgb(44, 130, 156);
                  cursor: pointer;
                  font-size: 50px;
                  justify-content: center;
                  align-items: center;
               }
               .buttonT:hover {
                  background: rgb(55, 159, 190);
               }
               .bold {
                  font-weight: bold;
               }
            `}
         </style>
      </div>
   );
};

export default Board;
