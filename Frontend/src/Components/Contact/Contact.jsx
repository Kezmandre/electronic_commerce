import React from "react";
import { BiPhone } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
const Contact = () => {
  return (
    <div className="m-0 p-0 border-box">
      <div className="w-10/12 h-full mx-auto my-4">
        <p className="pb-4 text-poppins font-medium text-[grey]">
          Home /{" "}
          <span className="text-black font-medium text-poppins">Contact</span>
        </p>
        <div className="flex flex-col md:flex-row lg:flex-row justify-center gap-2  items-center">
          <div className="w-[350px] h-[400px] bg-[#fff] shadow-lg p-6 rounded-md">
            <div className="flex justify-left items-center gap-4 mb-4">
              <div className="w-[30px] h-[30px] rounded-full bg-[#db4444] relative">
                <BiPhone className="absolute top-2 left-2 text-white" />
              </div>
              <p className="font-poppins font-medium">Call To Us</p>
            </div>
            <p className="font-poppins text-sm font-medium pb-4">
              We are available 24/7, 7 days a week.
            </p>
            <p className="font-poppins text-sm font-medium pb-4 ">
              phone:+8801611567844
            </p>
            <hr className="pb-6" />
            <div className=" flex justify-left items-center gap-4 mb-6">
              <div className="w-[30px] h-[30px] rounded-full bg-[#db4444] relative">
                {" "}
                <FiMail className="absolute top-2 left-[7px] text-white" />
              </div>
              <p className="font-poppins font-medium">Write To Us</p>
            </div>
            <p className="font-poppins text-sm font-medium pb-4">
              Fill out our form and we will contact you within 24hrs
            </p>
            <p className="font-poppins text-sm font-medium pb-4">
              Emails:customer@exclusive.com
            </p>
            <p className="font-poppins text-sm font-medium pb-4">
              Emails:support@exclusive.com
            </p>
          </div>
          <div className=" w-[350px] lg:w-full lg:flex-grow h-[500px] lg:h-[400px] bg-[#fff]  shadow-lg rounded-md">
            <div className="flex-col flex gap-4 lg:flex-row justify-evenly items-center mx-auto my-6 w-11/12 p-2">
              <input
                type="text"
                placeholder="Your Name"
                required
                name=""
                id=""
                className="border-[1px] p-2 w-full bg-searchBg outline-none rounded-md text-sm"
              />
              <input
                type="text"
                placeholder="Your Email"
                required
                name=""
                id=""
                className="border-[1px] p-2 w-full bg-searchBg outline-none rounded-md text-sm"
              />
              <input
                type="text"
                placeholder="Your Phone"
                required
                name=""
                id=""
                className="border-[1px] p-2 w-full bg-searchBg outline-none rounded-md text-sm"
              />
            </div>
            <div className="w-11/12 mx-auto mb-4">
              <textarea
                placeholder="Your Message"
                name=""
                id=""
                className="w-full h-[200px] p-2 overflow-hidden resize-none outline-none rounded-md bg-searchBg mx"
              ></textarea>
            </div>
            <button className="float-right cursor-pointer hover:bg-red-400 bg-btnBg p-2 text-white font-poppins rounded-md mr-8 w-[200px]">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
