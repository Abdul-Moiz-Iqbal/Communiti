import React from 'react'

const H4 = ({children,styles,text=''}) => {
  return (
    <div className={`text-xl font-[500] ${styles}`}>{text}{children}</div>
  )
}

export default H4