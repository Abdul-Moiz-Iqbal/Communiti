import React from 'react'

const H2 = ({children,text='',styles}) => {
  return (
    <div className={`text-[22px] leading-6 font-[600] ${styles}`}>{text}{children}</div>
  )
}

export default H2