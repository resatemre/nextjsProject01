import React from 'react'

const History = ({char,history,moveTo,curMove}) => {

    
    return (
        <div>
            <h3 >History</h3>
            {history.map((_,index)=>{
                return(
                    <p style={{fontWeight: index === curMove?"bold":"normal"}} type="button" onClick={()=>moveTo(index)} key={index}> {index === 0 ? "Start Game" : `Next Move #${index}`} </p>
                )
            })}
        </div>
    )
}

export default History
