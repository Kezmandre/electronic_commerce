import React,{useState} from 'react'
import {FaAngleRight} from "react-icons/fa"
import {AiOutlineApple} from "react-icons/ai"
import {BsArrowRightShort} from "react-icons/bs"
import { slides } from '../Data/Data'
import Timer from '../Timer/Timer'
import Product from '../Product/Product'
import Category from '../Category/Category'
import Selling from '../Category/Selling'
import NewProduct from '../Category/NewProduct'
import Collections from '../Category/Collections'
import Arrivals from '../Category/Arrivals'
import Services from '../About/Services'

const Home = () => {

  const [currentIndex, setCurrentIndex]=useState(0)

  const nextSlide=()=>{
    setCurrentIndex((prevIndex)=>(prevIndex === slides.length-1 ? 0 : prevIndex + 1))
  }

  const prevSlide=()=>{
    setCurrentIndex((prevIndex)=>(prevIndex === 0  ? slides.length-1 : prevIndex -1))
  }
  return (
    <div className='m-0 p-0 border-box'>
      <div className='w-5/6 mx-auto mt-4 mb-14 cursor-pointer gap-6 flex justify-between'>
        <div className='hidden lg:flex w-[200px] h-[280px] font-poppins border-r-2'>
          <div className='w-5/6 mx-auto'>
            <div className='flex items-center justify-between mb-2'>
              <p>Women's Fashion</p>
              <FaAngleRight/>
            </div>
            <div className='flex items-center mb-2 justify-between'>
              <p>Men's Fashion</p>
              <FaAngleRight/>
            </div>
            <ul>
              <li className='pb-2'>Electronic</li>
              <li className='pb-2'>Home & Lifestyle</li>
              <li className='pb-2'>Medicine</li>
              <li className='pb-2'>Sport & Outdoor</li>
              <li className='pb-2'>Baby's & Toys</li>
              <li className='pb-2'>Groceries & Pet</li>
              <li className='pb-2'>Health & Beauty</li>
            </ul>
          </div>
        </div>
        <div className='w-full mx-auto lg:grow h-[290px] bg-black'>
          <div className='flex bg-black w-full h-full'>
          <div className='hidden w-2/5 mx-auto h-full  bg-black'>
            <div className='my-8 flex justify-start text-white items-center gap-3'>
              <AiOutlineApple className='text-4xl'/>
              <p className='font-poppins text-[#fafafa]'>Iphone 14 series</p>
            </div>
            <p className='font-inter text-5xl font-semibold pb-6 text-[#fafafa]'>Up to 10% off voucher</p>
            <div className='flex justify-start text-[#fafafa] items-center'>
              <p className='text-poppins font-medium underline underline-offset-4'>Shop Now</p>
              <BsArrowRightShort className='text-3xl'/>
            </div>
          </div>
          <div className=' w-[250px] lg:w-[300px] mx-auto h-[240px] lg:h-[260px] border-6 border-red-400 full bg-black'>
            <img src={slides[currentIndex]} className='w-full h-full' alt="" />
          </div>
          </div>
          <div className='flex justify-center pb-2 gap-2 bg-black items-center'>
            <button onClick={nextSlide} className='w-[10px] h-[10px] bg-white opacity-50 focus:bg-red-400 cursor-pointer rounded-full border-2'></button>
            <button onClick={nextSlide} className='w-[10px] h-[10px] bg-white opacity-50 focus:bg-red-400 cursor-pointer rounded-full border-2'></button>
            <button onClick={nextSlide} className='w-[10px] h-[10px] bg-white opacity-50 focus:bg-red-400 cursor-pointer rounded-full border-2'></button>
            <button onClick={nextSlide} className='w-[10px] h-[10px] bg-white opacity-50 focus:bg-red-400 cursor-pointer rounded-full border-2'></button>
            <button onClick={nextSlide} className='w-[10px] h-[10px] bg-white opacity-50 focus:bg-red-400 cursor-pointer rounded-full border-2'></button>
            <button onClick={prevSlide} className='w-[10px] h-[10px] bg-white opacity-50 focus:bg-red-400 cursor-pointer rounded-full border-2'></button>
          </div>
        </div>
      </div>
      <div className='w-[80%] mx-auto'>
      <div className='w-[50%] mb-4'>
      <Timer/>
      </div>
      <div className='my-4 w-full'>
        <Product />
      </div>
      <div className=' mt-4 w-full'>
        <Category />
      </div>
      <div className=' my-10'>
        <Selling />
      </div>
      <div className=' mb-8'>
        <NewProduct/>
      </div>
      <div className='mb-8'>
        <Collections/>
      </div>
      <div className='mb-6'>
        <Arrivals/>
      </div>
      <div className='mb-6'>
        <Services/>
      </div>
      </div>
    </div>
  )
}
export default Home