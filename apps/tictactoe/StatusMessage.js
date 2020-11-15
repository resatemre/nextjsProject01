import React from 'react'

const StatusMessage = ({winner,currentHis}) => {

    //every method checks every item in array. if all of them fulfill the logic, it returns true. else false
    const noMove = currentHis.char.every(el=> el!=null)
    
    return (
        <h2>
            {winner && `The Winner : ${winner}`}
            {!winner && !noMove && `Next Player : ${!currentHis.controlState ? "X":"O"}`}
            {noMove && !winner && "X and O tied"}
        </h2>
    )
}

export default StatusMessage
