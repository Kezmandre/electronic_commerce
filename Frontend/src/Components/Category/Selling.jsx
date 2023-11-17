import React from "react";
import Bar from "../Bar/Bar";
import { CiHeart } from "react-icons/ci";
import { BsEye } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

const Selling = () => {
  return (
    <div>
      <div className="flex justify-start items-center gap-2 mb-4">
        <Bar />
        <p className="font-poppins font-semibold text-sm text-[#db4444]">
          This month
        </p>
      </div>

      <div className="flex justify-between items-center">
        <p className="font-inter font-semibold text-2xl">
          Best Selling Product
        </p>
        <div className="w-[100px] p-4 cursor-pointer bg-[#db4444] text-white text-center rounded-md">
          View All
        </div>
      </div>
      <div className="w-[230px] h-[350px] mb-12">
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
            src="https://res.cloudinary.com/di9r3toow/image/upload/v1700128020/b634216b-144b-439e-bc81-c97f21a60909_l6u0xk.png"
            alt=""
          />
        </div>
        <div className="w-full hidden group-hover:block p-2 font-poppins text-white text-center cursor-pointer bg-black">
          Add to cart
        </div>
      </div>
      <div className="mt-2 font-poppins">
        <p className=" font-semibold text-base">The North Coat</p>
        <span className="flex justify-start items-center gap-2 ">
          <p className="text-[#db4444] text-sm">$400</p>
          <p className="text-[grey] line-through text-sm">$500</p>
        </span>
        <span className="flex justify-start items-center gap-2">
          <FaStar className="text-[#ffad33]" />
          <FaStar className="text-[#ffad33]" />
          <FaStar className="text-[#ffad33]" />
          <FaStar className="text-[#ffad33]" />
          <FaStar className="text-[#ffad33]" />
          <p className="text-[grey] text-sm font-semibold">(90)</p>
        </span>
      </div>
    </div>
    </div>
  );
};

export default Selling;
