import React from 'react'
import {BsCursor, BsQrCode, BsApple} from "react-icons/bs"
import { PiGooglePlayLogo} from "react-icons/pi"
import {RiFacebookLine, RiLinkedinLine, RiTwitterXFill} from "react-icons/ri"
import { GrInstagram} from "react-icons/gr"

const Footer = () => {

    const date = new Date()
  return (
    <>
   <footer className='flex justify-evenly flex-col md:flex-row lg:flex-row flex-wrap items-right p-4 bg-black text-white p-4'>
    <div className='m-4'>
        <h2 className='text-2xl font-inter font-bold  pb-2'>Exclusive</h2>
        <p className='py-2 font-poppins text-textColor text-sm'>Subscribe</p>
        <p className='py-2 font-poppins text-textColor text-sm'>Get 10% off your first order</p>
        <section className='flex justify-center items-center w-12/12 border-2'>
            <input className='p-2 placeholder-grey outline-none bg-black w-10/12' type="text" placeholder='Enter your email' />
            <BsCursor className='text-xl cursor-pointer'/>
        </section>
    </div>
    <div className='m-4'>
        <h2 className='font-inter font-medium text-lg pb-4'>Support</h2>
        <ul className='font-poppins text-textColor text-sm'>
        <li className='pb-2'>111,Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh</li>
        <li className='pt-2'>exclusive@gmail.com</li>
        <li className='pt-2'>+88015-88888-9999</li>
        </ul>
    </div>
    <div className='m-4'>
        <h2 className='font-inter font-medium text-lg pb-2'>Account</h2>
        <ul className='font-poppins text-textColor text-sm cursor-pointer'>
            <li className='pb-2'>My Account</li>
            <li className='pb-2'>Login / <span>Register</span></li>
            <li className='pb-2'>Cart</li>
            <li className='pb-2'>Wishlist</li>
            <li className='pb-2'>Shop</li>
        </ul>
    </div>
    <div className='m-4'>
        <h2 className='font-inter font-medium text-lg pb-4'>Quick Link</h2>
        <ul className='font-poppins text-textColor text-sm'>
            <li className='pb-2'>Privacy Policy</li>
            <li className='pb-2'>Terms of Use</li>
            <li className='pb-2'>FAQ</li>
            <li className='pb-2'>Contact</li>
        </ul>
    </div>
    <div className='m-4'>
        <h2 className='font-inter font-medium text-lg pb-2'>Download App</h2>
        <p className='font-poppins text-xs text-gray italic pb-2'>Save $3 with App New User Only</p>
        <div className=' gap-2 flex lg:justify-center lg:items center'>
            <BsQrCode className='text-[5rem]'/>
            <div className='flex flex-col  gap-2'>
                <div className='border-2 flex justify-start rounded-md items-center'>
                <PiGooglePlayLogo className='pl-2 text-4xl'/>
                <p className='text-xs pr-2'>Get It On <br /> <span className='text-xs font-bold'>Google Play</span></p>
                </div>
                <div className='border-2 flex justify-center rounded-md items-center'>
                    <BsApple className='text-3xl pl-2'/>
                    <p className='text-xs pr-2'>Download on the <br /> <span className='text-xs font-bold'>APP Store</span></p>
                </div>
            </div>
        </div>
        <div className='flex justify-start items-center gap-6 mt-6 '>
            <RiFacebookLine/>
            <RiTwitterXFill/>
            <GrInstagram/>
            <RiLinkedinLine/>
        </div>
    </div>
    
   </footer>
   <hr className='border-1 border-color'/>
   <p className='text-center text-white p-4 text-xs bg-black font-poppins'>&copy; Rimel {date.getFullYear()}. All right reserved</p>
   </>
  )
}

export default Footer