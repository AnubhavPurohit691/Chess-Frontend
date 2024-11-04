import { useEffect, useState } from 'react'
import ChessBoard from '../components/ChessBoard'
import Button from '../components/Button'
import { useSocket } from '../hooks/useSocket'
import { Chess } from 'chess.js'
export const INIT_GAME="init_game"
export const MOVE="move"
export const GAME_OVER="game_over"

const Game = () => {
    const socket=useSocket()
    const [chess , setchess]=useState(new Chess())
    const [board, setboard]=useState(chess.board())

    useEffect(() => {
       if(!socket) return
       socket.onmessage=(e) => {
          const message=JSON.parse(e.data)
       switch (message.type) {
        case INIT_GAME:
            setchess(new Chess())
            setboard(chess.board())
            break;
        case MOVE:
            const move=message.payload
            chess.move(move)
            setboard(chess.board())
            break;
        case GAME_OVER:
            
            break;
       
        default:
            break;
       }
       
        }

    },[socket])
    if(!socket) return <div>Loading...</div>
  return (
    <div className='justify-center flex '>
      <div className='pt-8 max-w-screen-lg w-full'>
        <div className='grid grid-cols-6 gap-4 w-full  '>
            <div className='col-span-4 w-full'>
            <ChessBoard board={board} />
            </div>
            <div>
                <Button onClick={() => {
                    socket.send(JSON.stringify({type:INIT_GAME}))
                }}> Play Online</Button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Game
