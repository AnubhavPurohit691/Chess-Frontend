import React from 'react'

const Button = ({onClick,children}:{onClick:()=>void,children:React.ReactNode}) => {
  return (
    <button className='bg-blue-500 rounded-sm hover:bg-blue-200 hover:text-black  text-white py-2 px-4' onClick={onClick}>{children}</button>
  )
}

export default Button
