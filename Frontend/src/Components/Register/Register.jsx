import React, { useEffect, useState } from "react";
import signUp_img from "../Assets/Images/signUp.png";
import { FcGoogle } from "react-icons/fc";
import {toast} from "react-toastify"
import { Link, useNavigate } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux"
import { createUserAction } from "../../Redux/actions/user";
import { CREATE_USER_RESET } from "../../Redux/constants";
import Spinner from "../Spinner/Spinner";


const Register = () => {
  const dispatch = useDispatch()
  const navigate= useNavigate()
  const {createUser}= useSelector((state)=>state)
  const {error,success,loading}=createUser


  const initialValue = {
    name: "",
    email: "",
    password: "",
  }

  const [input, setInput] = useState(initialValue)

  const changeHandler=(e)=>{
    const {name, value}= e.target
    setInput((prev)=>({
      ...prev,
      [name]:value
      }))
  }

  async function createUserHandler(){
    dispatch(createUserAction({name:input.name,email:input.email,password:input.password}))
  }
  

  useEffect(()=>{
    if(success){
      toast.success("Registration Successful")
      setTimeout(()=>{
        navigate("/login")
      },3000)
    }

    if(error){
      toast.error(`${error}`)
      setTimeout(()=>{
        dispatch({type:CREATE_USER_RESET})
      },2000)
    }
  },[success,error])
  return (
    <div className="m-0 p-0 border-box">
      <div className="w-10/12  mx-12  flex justify-center item-center">
        <div className="flex-grow my-6 hidden lg:flex">
          <img src={signUp_img} alt="" className="w-full h-full" />
        </div>
        <div className="w-[400px] h-[500px]  my-auto ml-4">
          <div className="w-10/12  h-full mx-auto my-2">
            <p className="font-inter text-left font-bold tracking-wider text-lg md:text-xl lg:text-2xl  py-4">
              Create an Account
            </p>
            <p className="font-poppins text-left text-sm pb-8">
              Enter your details below
            </p>
            <div className=" w-full mb-4 ">
              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={changeHandler}
                id=""
                className="w-full p-2 border-b-2 border-[grey] outline-none font-poppins"
              />
            </div>
            <div className="  w-full mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                id=""
                onChange={changeHandler}
                className="w-full p-2 border-b-2 border-[grey] outline-none font-poppins"
              />
            </div>
            <div className="w-full mb-4">
              <input
                type="password"
                name="password"
                placeholder="Password"
                id=""
                onChange={changeHandler}
                className="w-full p-2 border-b-2 border-[grey] outline-none font-poppins"
              />
            </div>
            {loading ? (
              <Spinner/>
            ) : (
              <button onClick={createUserHandler} className="w-full bg-[#db4444] hover:bg-red-300  rounded-md mb-2 p-2">
              <p className="text-center font-poppins text-white">
                Create an Account
              </p>
            </button>
            )}
            
            <div className="flex justify-center gap-2 mt-2 cursor-pointer items-center w-full p-2 border-[1px] border-[grey] rounded-md mb-2 ">
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
