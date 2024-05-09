import React from 'react'

const Input = (props) => {
  return (
    <input type={props.type || "text"} placeholder={props.text} className={`py-4 border-none rounded-lg placeholder:text-[#9D9D9D] placeholder:text-lg text-slate-500  ${props.styles} ${props.bg? 'bg-[#377DFF0D]':'bg-[#F5F5F5]'}`}/>
  )
}

export default Input