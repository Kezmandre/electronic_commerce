import React from 'react'

const Bar = ({bar=true, text}) => {
  return (
    <div>
        {bar ? (
             <div className='w-[20px] h-[50px] rounded-md bg-[#db4444]'></div>
        ): (
            <div className='w-[50px] flex justify-center items-center h-[30px] bg-[#db4444] text-white rounded-md text-sm'>{text ? text : ""}</div>
        )}
       
    </div>
  )
}

export default Bar