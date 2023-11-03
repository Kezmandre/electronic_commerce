import React from 'react'

const Button = ({text}) => {
  return (
    <div className='border-2 bg-purple-600 w-40 text-center text-white'>{text ? text : "Na button i be"}</div>
  )
}

export default Button