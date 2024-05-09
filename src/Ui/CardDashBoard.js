import React from 'react'

const CardDashBoard = ({children,styles}) => {
  return (
    <div className={`w-fit  rounded-xl bg-white ${styles} px-5 py-6 `}>{children}</div>
  )
}

export default CardDashBoard