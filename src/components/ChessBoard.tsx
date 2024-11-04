import { Color, PieceSymbol, Square } from 'chess.js'
import React from 'react'

const ChessBoard = ({board}:{
    board:({
        square:Square;
        type:PieceSymbol;
        color:Color;
    }|null)[][]
}) => {
  return (
    <div className='text-white'>
        {board.map((row,index) => (
            <div key={index} className='flex'>
                {row.map((square,j) => (
                    <div key={j} className={`bg-slate-600 w-20 h-20 ${(index+j)%2===0?'bg-slate-800':'bg-slate-700'}`}>
                        <div className='w-full justify-center items-center flex h-full'>
                        <div className='h-full justify-center flex flex-col'>

                        {square?.type}</div>
                        </div>
                        </div>
                ))}
            </div>
        ))}
    </div>
  )
}

export default ChessBoard
