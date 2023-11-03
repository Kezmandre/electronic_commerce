import React from "react";
import signUp_img from "../Assets/Images/signUp.png";

const Login = () => {
  return (
    <div className="m-0 p-0 border-box">
      <div className="w-10/12 h-screen mx-12 flex justify-center item-center">
        <div className="flex-grow my-6 hidden md:flex lg:flex">
          <img src={signUp_img} alt="" className="w-full h-full" />
        </div>
        <div className="w-[400px]  h-[500px] my-auto ml-4 ">
          <div className="w-10/12  h-full mx-auto my-2">
            <p className="font-inter text-left font-bold tracking-wider text-lg md:text-xl lg:text-2xl  pb-4">
              Login into exclusive
            </p>
            <p className="font-poppins text-left text-sm pb-8">
              Enter your details below
            </p>
            <div className=" w-full mb-4 ">
              <input
                type="text"
                name=""
                placeholder="Email or Phone Number"
                id=""
                className="w-full p-2 border-b-2 border-[grey] outline-none font-poppins"
              />
            </div>
            <div className=" w-full mb-6 ">
              <input
                type="password"
                name=""
                placeholder="Password"
                id=""
                className="w-full p-2 border-b-2 border-[grey] outline-none font-poppins"
              />
            </div>
            <div className="w-full flex justify-between items-center">
              <button className="w-[100px] hover:bg-red-300 p-2 bg-[#db4444]">
                <p className="text-white text-center font-poppins">Log in</p>
              </button>
              <p className="font-poppins cursor-pointer text-[#db4444]">
                Forget Password?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
