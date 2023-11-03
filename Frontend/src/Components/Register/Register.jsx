import React from "react";
import signUp_img from "../Assets/Images/signUp.png";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="m-0 p-0 border-box">
      <div className="w-10/12 h-screen mx-12  flex justify-center item-center">
        <div className="flex-grow my-6 hidden md:flex lg:flex">
          <img src={signUp_img} alt="" className="w-full h-full" />
        </div>
        <div className="w-[400px] h-[500px]  my-auto ml-4">
          <div className="w-10/12  h-full mx-auto my-2">
            <p className="font-inter text-left font-bold tracking-wider text-lg md:text-xl lg:text-2xl  pb-4">
              Create an Account
            </p>
            <p className="font-poppins text-left text-sm pb-8">
              Enter your details below
            </p>
            <div className=" w-full mb-4 ">
              <input
                type="text"
                name=""
                placeholder="Name"
                id=""
                className="w-full p-2 border-b-2 border-[grey] outline-none font-poppins"
              />
            </div>
            <div className="  w-full mb-4">
              <input
                type="email"
                name=""
                placeholder="Email or Phone"
                id=""
                className="w-full p-2 border-b-2 border-[grey] outline-none font-poppins"
              />
            </div>
            <div className="w-full mb-4">
              <input
                type="password"
                name=""
                placeholder="Password"
                id=""
                className="w-full p-2 border-b-2 border-[grey] outline-none font-poppins"
              />
            </div>
            <button className="w-full bg-[#db4444] hover:bg-red-300  rounded-md mb-2 p-2">
              <p className="text-center font-poppins text-white">
                Create an Account
              </p>
            </button>
            <div className="flex justify-center gap-2 cursor-pointer items-center w-full p-2 border-[1px] border-[grey] rounded-md mb-2 ">
              <FcGoogle className="text-2xl" />
              <p className="font-poppins font-medium text-[grey] text-base">
                Sign up with Goggle
              </p>
            </div>
            <div className="flex justify-center items-center text-poppins gap-2 text-base">
              <p className="font-medium text-[grey]">Already have account ?</p>
              <Link to="/login">
                <p className="font-medium underline-offset-4 underline cursor-pointer">Log in</p>
              </Link>
            </div>
            {/* <hr className='border-1 mr-14 float-right border-[grey] w-12'/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
