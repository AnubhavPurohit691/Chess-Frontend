import { Chess, Color, PieceSymbol, Square } from 'chess.js'
import React, { useState } from 'react'
import { MOVE } from '../pages/Game'

const ChessBoard = ({chess,board ,socket,setboard}:{
    chess:any
    setboard:any
    board:({
        square:Square;
        type:PieceSymbol;
        color:Color;
    }|null)[][];
    socket:WebSocket
}) => {
    const [from,setFrom]=useState<Square|null>(null)    
    const [to,setTo]=useState<Square|null>(null)
  return (
    <div className='text-white'>
        {board.map((row,index) => (
            <div key={index} className='flex'>
                {row.map((square,j) => {
                    const squarerepresentation=String.fromCharCode(97+(j%8))+""+(8-1) as Square
                    return<>
                    <div
                    onClick={()=>{
                        if(!from){
                            setFrom(squarerepresentation)
                        }
                        else{
                            socket.send(JSON.stringify({type:MOVE,payload:{move:{
                                from,to:squarerepresentation
                            }
                                
                               }}))
                        }
                        setFrom(null)
                        chess.move({
                            from,
                            to:squarerepresentation
                        })
                        setboard(chess.board())
                        console.log({
                            from,
                            to:squarerepresentation
                        })
                    }}
                    key={j} className={`bg-slate-600 w-20 h-20 ${(index+j)%2===0?'bg-slate-800':'bg-slate-700'}`}>
                        <div className='w-full justify-center items-center flex h-full'>
                        <div className='h-full justify-center flex flex-col'>

                        {square?.type}</div>
                        </div>
                        </div>
                        </>
})}
            </div>
        ))}
    </div>
  )
}

export default ChessBoard
