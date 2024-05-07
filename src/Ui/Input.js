import React from 'react'

const Input = (props) => {
  return (
    <input type={props.type || "text"} placeholder={props.text} className={`px-5 py-4 border-none rounded-lg placeholder:text-[#9D9D9D] placeholder:text-lg text-slate-500 bg-[#F5F5F5] ${props.styles}`}/>
  )
}

export default Input