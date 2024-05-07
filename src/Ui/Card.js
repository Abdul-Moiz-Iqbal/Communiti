import React from 'react'

const Card = (props) => {
  return (
    <div className='w-full p-6 rounded-2xl border-2 border-gray-300 '>
        <p className='text-lg text-gray-400'>{props.title}</p>
        <h1 className='text-2xl font-semibold'>{props.description}</h1>
    </div>
  )
}

export default Card