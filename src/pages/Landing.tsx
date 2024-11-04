import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

const Landing = () => {
   const navigate= useNavigate()
  return (
    <div className='p-10 flex flex-col md:flex-row justify-center gap-10 text-white'>
        <div className='max-w-96 '>
            <img src='/chess.png'></img>
        </div>
        <div className='flex flex-col gap-10'>
            <h1 className='text-4xl font-bold'>Chess</h1>
            <Button onClick={() => navigate('/game')}>Play</Button>
        </div>
      
    </div>
  )
}

export default Landing
