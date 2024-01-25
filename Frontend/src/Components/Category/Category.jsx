import React from "react";
import Bar from "../Bar/Bar";
import { category } from "../Data/Data";

const Category = () => {
  return (
    <div className="mb-2">
      <div className="flex justify-start items-center gap-2 mb-4 text-[#db4444]">
        <Bar />
        <p className="font-poppins font-semibold text-sm">Categories</p>
      </div>
      <span className="font-inter font-semibold  text-2xl">
        Browse By Category
      </span>
      <div className="flex flex-wrap lg:flex-nowrap overflow-x-auto overflow-y-hidden justify-center items-center gap-4 mt-4 mb-4">
        {category?.map((cat) => {
          return (
            <div key={cat.id} className="cursor-pointer w-[150px] md:w-[200px] lg:w-[250px] h-[200px] hover:text-white hover:bg-[#bd4444] rounded-md shadow-xl mt-4">
              <div className="w-[70px] h-[70px]  mx-auto my-4">
                <img src={cat.img} alt="" className="w-full h-full pt-2" />
              </div>
              <p className="text-poppins text-md text-center p-2">{cat.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
