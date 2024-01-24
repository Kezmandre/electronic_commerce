import React from 'react'
import { infoData } from '../Data/Data'

const Services = () => {
  return (
    <div className="w-full lg:h-[300px] flex flex-col  md:flex-row lg:flex-row justify-between items-center mb-4">
    {infoData.map((item) => {
      return (
        <div key={item.id} className=" h-full w-[250px]">
          <div className="w-[60px] h-[60px] my-6 relative bg-black rounded-full mx-auto  border-4 border-[grey]">
            <img
              src={item.img}
              alt=""
              className="w-[30px] text-white absolute left-[10px] top-[8px]"
            />
          </div>
          <p className="font-inter font-bold pb-2 text-center text-2xl">
            {item.info}
          </p>
          <p className="text-poppins text-center text-sm">{item.text}</p>
        </div>
      );
    })}
  </div>
  )
}

export default Services