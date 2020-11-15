import { useState } from 'react'
import calculateFun from './calculateFun'
import History from './History'
import StatusMessage from './StatusMessage'

export default function tictactoe() {

    const newGame = [{char:Array(9).fill(null), controlState:false}]
    const [history,setHistory] = useState(newGame)
    const [curMove,setCurMove] = useState(0)
    const currentHis = history[curMove]

    // const [controlState, setControl] = useState(false)
    // const [char,setChar] = useState(Array(9).fill(null))

    const {calWinner,winningSquares} = calculateFun(currentHis.char)

    const handleClick = (pos) => {

        if(currentHis.char[pos] || calWinner){return }

        setHistory(prev=>{
            const last = prev[prev.length-1]

            const newChar = last.char.map((square,index)=>{
                if(last.controlState===false ){
                    if(pos===index ){
                        return "X"
                    }
                    
                }else if(last.controlState===true ){
                    if(pos===index  ){
                        return "O"
                    }
                }
                
                return( square)
            })
            return prev.concat({char:newChar, controlState:!last.controlState})
        })
        setCurMove(prev=>prev+1)
    }
    
    // function theWinner(){
    //     return(<h2>The Winner : {calWinner}</h2>)
    // }
    // {calWinner!==null ? theWinner():null}
    

    const buttonF = (pos) =>{
        const isWinningSquares =winningSquares.includes(pos)
        let styles1 = {backgroundColor: "purple",width: "40px", height:"40px" ,display: "flex",alignItems:"center",justifyContent: 'center',color: "white",margin: "5px",cursor: 'pointer'}
        if(isWinningSquares){
            styles1 = {fontWeight:"bold",fontSize:"larger",backgroundColor: "purple",width: "40px", height:"40px" ,display: "flex",alignItems:"center",justifyContent: 'center',color: "white",margin: "5px",cursor: 'pointer'}
        }
        return(
        <button style={styles1} onClick={()=>handleClick(pos)}>{currentHis.char[pos]}</button>
        )
    }

    const moveTo = (move)=>{
        setCurMove(move)
    }

    const styles2 = {display: "flex",width: "180px",flexWrap: "wrap"}
    
    const handlerNewGame = () => {
        setHistory(newGame)
        setCurMove(0)
    }


    return (
        <div style={styles2}>
            
            <StatusMessage winner={calWinner} currentHis={currentHis}/>
            
            {buttonF(0)}
            {buttonF(1)}
            {buttonF(2)}
            {buttonF(3)}
            {buttonF(4)}
            {buttonF(5)}
            {buttonF(6)}
            {buttonF(7)}
            {buttonF(8)}
            <button type="button" onClick={handlerNewGame}>New Game</button>

            <History history={history} moveTo={moveTo} char={currentHis.char} curMove={curMove}/>

        </div>

    )
}




/*

- write useState for switch inside of switchState
- construct x_o_image and inside of x_o_image , write a state to control the turn of x or o to switch the turn
- write a component in ticCom to use for 9 parts
- name these parts
- container in tictactoeApp with 9 parts and write logic for who win

*/