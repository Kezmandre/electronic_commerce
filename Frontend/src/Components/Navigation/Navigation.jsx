import React, { useState } from "react";
import { navItems } from "../Data/Data";
import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineCancel } from "react-icons/md";
import { CgLogOut } from "react-icons/cg";
import { Link } from "react-router-dom";
import { Logout } from "../../Redux/actions/user";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartActions } from "../../Redux/actions/cart";

const Navigation = () => {
  const dispatch = useDispatch();
  const { getCarts } = useSelector((state) => state);
  const { cartCount } = getCarts;

  // const [cartCount, setCartCount] = useState(carts.length);

  // const totalCartItem = carts.length;
  // useEffect(() => {
  //   dispatch(getCartActions());

  //   if (carts.length > 0) {
  //     setCartCount(carts.length);
  //   }
  // }, [dispatch]);

  const logoutHandler = () => {
    dispatch(Logout());
  };
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <nav className="m-0 p-4 sticky top-0 z-50 bg-white box-border flex-wrap border-b-2 justify-between md:justify-evenly flex lg:justify-evenly items-center ">
        <p className="pr-12 font-inter font-bold  text-2xl">Exclusive</p>
        <ul className="hidden md:flex lg:flex justify-center items-center gap-8  ">
          {navItems.map((item) => {
            return (
              <Link to={item.path}>
                <li
                  className="font-poppins text-lg font-medium hover:cursor-pointer hover:duration-500 hover:ease-in-out hover:text-xl"
                  key={item.id}
                >
                  {item.name}
                </li>
              </Link>
            );
          })}
        </ul>
        <div className="flex justify-center items-center gap-4">
          <div className=" hidden lg:flex justify-center rounded-md bg-searchBg items-center border-1 h-10 w-[300px] border-black">
            <input
              type="text"
              className="w-full p-2 text-poppins bg-searchBg outline-none"
              placeholder="what are you looking for?"
            />
            <BiSearch className="text-2xl " />
          </div>
          <Link to="/favorite">
          <AiOutlineHeart className="text-2xl cursor-pointer mr-4" />
          </Link>
          <Link to="/cart">
            <div className="relative">
              <BsCart3 className="text-2xl cursor-pointer mr-4" />
              <div className="absolute w-[20px] h-[20px] top-0 right-2 text-sm rounded-full bg-red-600 text-center text-white">
                {cartCount}
              </div>
            </div>
          </Link>
          <CgLogOut
            className="text-2xl cursor-pointer mr-20"
            onClick={logoutHandler}
          />
        </div>
        <div className="absolute top-[18px] right-4 md:hidden lg:hidden cursor-pointer">
          <HiMenuAlt3 className="text-3xl" onClick={showSidebar} />
        </div>
      </nav>
      <div>
        {sidebar ? (
          <div className="fixed w-screen h-screen bg-black rounded-md top-0  right-0 duration-[850ms] z-50">
            <ul
              className="cursor-pointer text-white m-10"
              onClick={showSidebar}
            >
              <li className="absolute top-[20px] right-[20px]">
                <MdOutlineCancel className="text-3xl text-red-500  " />
              </li>
              {navItems.map((item) => {
                return (
                  <Link to={item.path}>
                    <li
                      className="font-poppins p-6 text-lg hover:w-[150px] hover:rounded-md font-medium hover:text-black hover:cursor-pointer hover:duration-500 hover:bg-searchBg hover:ease-in-out hover:text-xl"
                      key={item.id}
                    >
                      {item.name}
                    </li>
                  </Link>
                );
              })}
            </ul>
            <div className="  flex justify-center rounded-md m-12 bg-searchBg items-center border-1 h-10 w-[300px] border-black">
              <input
                type="text"
                className="w-full p-2 text-poppins bg-searchBg outline-none"
                placeholder="what are you looking for?"
              />
              <BiSearch className="text-2xl " />
            </div>
          </div>
        ) : (
          <div className="duration-[350ms]  right-[-100%]"></div>
        )}
      </div>
    </>
  );
};

export default Navigation;
