import React from 'react'
import Bar from '../Bar/Bar'
import PS4  from "../Assets/Images/ps5.png"
import Woman from "../Assets/Images/woman.png"
import JBL from "../Assets/Images/speakers.png"
import Perfume from "../Assets/Images/perfume.png"

const Arrivals = () => {
  return (
    <div className='w-full'>
        <div className='flex items-center justify-start mb-6 gap-2'>
            <Bar />
            <p className='font-poppins font-semibold text-sm text-[#db4444]'>Featured</p>
        </div>
        <p className='font-inter font-semibold tracking-wide pb-6 text-2xl'>New Arrival</p>
        <div className='w-full  flex flex-col lg:flex-row justify-center items-center gap-4'>
            <div className='basis-1/2 h-full bg-black  rounded-md'>
                <div className='w-5/6 mx-auto h-5/6 relative my-6'>
                    <img src={PS4} alt="" className='w-full h-full'/>
                    <div className='absolute w-[200px] h-[100px] text-white bottom-4'>
                        <p className='font-inter pb-2 font-semibold text-2xl'>PlayStation 5</p>
                        <p className='font-poppins pb-2 text-xs'>Black and White version of the PS5 coming out on sale</p>
                        <p className='underline font-poppins cursor-pointer underline-offset-4'>Shop Now</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col basis-1/2 h-full gap-4'>
                <div className='w-full h-[210px] bg-black  rounded-md'>
                    <div className='w-[95%] flex text-white justify-between items-center mx-auto h-5/6 my-6'>
                        <div className='basis 1/2'>
                            <p className='font-inter pb-2 text-2xl font-semibold'>Women's Collections</p>
                            <p className='font-poppins text-xs pb-2'>Featured women collections that give you another vibe</p>
                            <p className='underline font-poppins cursor-pointer underline-offset-8'>Shop Now</p>
                        </div>
                        <div className='basis-1/2 h-full'>
                            <img src={Woman} alt="" className='w-full h-full bg-red-400' />
                        </div>
                    </div>
                </div>
                <div className='w-full h-1/2 flex justify-center items-center gap-4'>
                    <div className='w-1/2 h-[280px] bg-black rounded-md'>
                        <div className=' relative w-5/6 h-5/6 mx-auto my-6'>
                            <img src={JBL} alt="" className='w-full h-full'/>
                            <div className='absolute text-white bottom-4 w-[150px] h-[100px]'>
                                <p className='font-inter font-semibold text-2xl pb-2'>Speakers</p>
                                <p className='font-poppins text-xs pb-2'>Amazon wireless speakers</p>
                                <p className='underline font-poppins cursor-pointer underline-offset-8'>Shop Now</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2 h-[280px] bg-black rounded-md'>
                    <div className=' relative w-5/6 h-5/6 mx-auto my-6'>
                            <img src={Perfume} alt="" className='w-full h-full'/>
                            <div className='absolute text-white bottom-4 w-[150px] h-[100px]'>
                                <p className='font-inter font-semibold text-2xl pb-2'>Perfume</p>
                                <p className='font-poppins text-xs pb-2'>Gucci Intense OUD EDP</p>
                                <p className='underline font-poppins cursor-pointer underline-offset-8'>Shop Now</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Arrivals