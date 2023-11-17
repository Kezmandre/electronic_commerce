import React from 'react'
import Bar from '../Bar/Bar'

const Arrivals = () => {
  return (
    <div className='w-full'>
        <div className='flex items-center justify-start mb-6 gap-2'>
            <Bar />
            <p className='font-poppins font-semibold text-sm text-[#db4444]'>Featured</p>
        </div>
        <p className='font-inter font-semibold tracking-wide pb-6 text-2xl'>New Arrival</p>
        <div className='w-full h-[500px] flex justify-center items-center gap-4'>
            <div className='basis-1/2 h-full bg-red-400 rounded-md'></div>
            <div className='flex flex-col basis-1/2 h-full gap-4'>
                <div className='w-full h-1/2 bg-purple-400 rounded-md' ></div>
                <div className='w-full h-1/2 flex justify-center items-center gap-4'>
                    <div className='w-1/2 h-full bg-[grey] rounded-md'></div>
                    <div className='w-1/2 h-full bg-green-400 rounded-md'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Arrivals