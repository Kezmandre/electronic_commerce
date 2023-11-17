import React from 'react'
import Bar from '../Bar/Bar'
import { CiHeart } from "react-icons/ci";
import { BsEye } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import Canon from "../Assets/Images/Canon.png"

const Collections = () => {
  return (
    <div>
        <div className='flex justify-start items-center mb-6 gap-2'>
            <Bar />
            <p className='font-poppins font-semibold text-medium text-[#db4444]'>Our Products</p>
        </div>
        <h2 className='font-inter tracking-wide leading-10 font-bold pb-8 text-2xl'>Explore Our Products</h2>
        <div className="w-[230px] h-auto mb-12">
      <div className=" group w-full h-[250px] bg-[#f5f5f5]">
        <div className="flex justify-end items-center">
          <div className="flex flex-col  m-2 gap-2 ">
            <div className="w-[20px]  h-[20px] rounded-full bg-white">
              <CiHeart className="w-full h-full cursor-pointer" />
            </div>
            <div className="w-[20px] h-[20px] rounded-full bg-white">
              <BsEye className="w-full h-full cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="w-[200px] h-[150px] mx-auto">
          <img
            className="w-full h-full"
            src={Canon}
            alt=""
          />
        </div>
        <div className="w-full hidden group-hover:block p-2 font-poppins text-white text-center cursor-pointer bg-black">
          Add to cart
        </div>
      </div>
      <div className="mt-4 font-poppins">
        <p className=" font-semibold text-base">CANON EOS DSLR Camera</p>
        <span className="flex justify-start items-center gap-2 ">
          <p className="text-[#db4444] font-semibold text-sm">$400</p>
          <span className="flex justify-start items-center gap-2">
          <FaStar className="text-[#ffad33]" />
          <FaStar className="text-[#ffad33]" />
          <FaStar className="text-[#ffad33]" />
          <FaStar className="text-[#ffad33]" />
          <FaStar className="text-[grey]" />
          <p className="text-[grey] text-sm font-semibold">(80)</p>
        </span>
        </span>
        
      </div>
    </div>
    <div className='w-[200px] cursor-pointer p-4 mx-auto bg-[#bd4444] text-white font-poppins rounded-md text-center '>View All Products</div>
    </div>
  )
}

export default Collections