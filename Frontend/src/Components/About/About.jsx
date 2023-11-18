import React from "react";
import About_img from "../Assets/Images/about.png";
import { aboutData, profileData } from "../Data/Data";
import { RiTwitterXFill, RiLinkedinLine } from "react-icons/ri";
import Services from "./Services";
import { FaInstagram } from "react-icons/fa";
const About = () => {
  return (
    <div className="p-0 m-0 border-box">
      <div className="w-10/12 mx-auto">
        <div className="font-poppins my-8 font-medium ">
          <p className="text-[grey]">
            Home/ <span className="text-black">About</span>
          </p>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row mb-6 justify-center md:gap-6 lg:gap-8 items-center">
          <div className="h-[300px] w-[100%] md:w-[50%] lg:w-[40%]">
            <h2 className="font-inter tracking-wide pb-4 text-2xl font-bold">
              Our Story
            </h2>
            <p className="font-poppins text-justify text-sm pb-2">
              Launched in 2015, Exclusive is South Asia’s premier online
              shopping marketplace with an active presence in Bangladesh.
              Supported by wide range of tailored marketing, data and service
              solutions, Exclusive has 10,500 sellers and 300 brands and serves
              3 millions customers across the region.{" "}
            </p>
            <p className="font-poppins text-justify text-sm">
              {" "}
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assortment in categories
              ranging from consumer.
            </p>
          </div>
          <div className="flex-grow h-[400px]">
            <img src={About_img} alt="" className="w-full h-full bg-cover" />
          </div>
        </div>
        <div className="w-full flex flex-col gap-6 md:justify-center mb-8 md:flex-row flex-wrap lg:flex-row items-center justify-between my-8 lg:h-[240px]">
          {aboutData.map((item) => {
            return (
              <div
                key={item.id}
                className="border border-black hover:border-0 hover:bg-[#db4444] hover:text-white rounded-md h-full w-[240px]"
              >
                <div className="w-[50px] h-[50px] my-6 relative bg-black rounded-full mx-auto my-2 border-4 border-[grey]">
                  <img
                    src={item.img}
                    alt=""
                    className="w-[30px] text-white absolute left-[5px] top-[5px]"
                  />
                </div>
                <p className="font-inter font-bold pb-6 text-center text-2xl">
                  {item.numbers}
                </p>
                <p className="text-poppins text-center pb-4 text-sm">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
        <div className="w-full lg:h-[400px] gap-4 flex flex-col md:flex-row lg:flex-row justify-between items-center mb-2">
          {profileData.map((item) => {
            return (
              <div className="w-full h-full flex flex-col items-center">
                <div className="w-[250px] h-[250px] mb-4 bg-searchBg">
                  <img src={item.img} alt="" className="w-full h-full" />
                </div>
                <p className="font-bold font-inter pb-2">{item.name}</p>
                <p className="font-poppins text-sm pb-2">{item.position}</p>
                <div className="flex items-center justify-start cursor-pointer gap-2">
                  <RiTwitterXFill />
                  <FaInstagram />
                  <RiLinkedinLine />
                </div>
              </div>
            );
          })}
        </div>
       <Services/>
      </div>
    </div>
  );
};

export default About;
