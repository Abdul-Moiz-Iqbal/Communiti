import React from 'react'

const BlueText = (props) => {
  return (
    <div className={` text-lg font-[400] text-textBlue ${props.styles}`}>
        {props.text}
    </div>
  )
}

export default BlueText