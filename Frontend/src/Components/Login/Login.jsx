import React, { useEffect, useState } from "react";
import signUp_img from "../Assets/Images/signUp.png";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAction } from "../../Redux/actions/user";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { LOGIN_USER_RESET } from "../../Redux/constants";
import { PiEyeSlashDuotone } from "react-icons/pi";
import { LuEye } from "react-icons/lu";
import Spinner from "../Spinner/Spinner";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loginUser } = useSelector((state) => state);
  const { error, success, user, loading } = loginUser;
  const [showPassword, setShowPassword]= useState("password")
  const initialValue = {
    email: "",
    password: "",
  };
  const [input, setInput] = useState(initialValue);
  const changeHandler = (e) => {
    const { name, value } = e.target;

    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  async function LoginHandler() {
    dispatch(loginUserAction({ email: input.email, password: input.password }));
  }

  useEffect(() => {
    if (success) {
      toast.success(`welcome back ${user.name}`);
      setTimeout(() => {
        navigate("/");
      }, 5000);
    }

    if(error){
      toast.error(`${error}`)
      setTimeout(()=>{
        dispatch({type:LOGIN_USER_RESET})
      })
    }
  }, [success, error]);

  return (
    <div className="m-0 p-0 border-box">
      <div className="w-10/12   mx-12 flex justify-center item-center">
        <div className="flex-grow my-6 hidden lg:flex">
          <img src={signUp_img} alt="" className="w-full h-full" />
        </div>
        <div className="w-[400px] h-[500px]  ml-4 ">
          <div className="w-10/12 h-full  mx-auto my-2">
            <p className="font-inter text-left pt-8 font-bold tracking-wider text-lg md:text-xl lg:text-2xl  pb-4">
              Login into exclusive
            </p>
            <p className="font-poppins text-left text-sm pb-8">
              Enter your details below
            </p>
            <div className=" w-full mb-4 ">
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={changeHandler}
                id=""
                className="w-full p-2 border-b-2 border-[grey] outline-none font-poppins"
              />
            </div>
            <div className="relative w-full mb-6 ">
              <input
                type={showPassword}
                name="password"
                placeholder="Password"
                onChange={changeHandler}
                id=""
                className="w-full p-2 border-b-2 border-[grey] outline-none font-poppins"
              />
              {showPassword === "password" ? (
                 <div onClick={()=>setShowPassword("text")} className="absolute top-4 right-4 cursor-pointer">
                 <PiEyeSlashDuotone className="text-2xl" />
                 </div>
              ) : (
                <div onClick={()=>setShowPassword("password")} className="absolute top-4 right-4 cursor-pointer">
                <LuEye className="text-2xl" />
                </div>
              )}
             
            </div>
            <div className="w-full flex justify-between items-center">
              <div className="w-[100px]">
              {loading ? (
                <Spinner/>
              ):(
                <button onClick={LoginHandler} className="w-full hover:bg-red-300 p-2 bg-[#db4444]">
                <p className="text-white text-center font-poppins">Log in</p>
              </button>
              )}
              </div>
              
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
