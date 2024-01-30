import React from "react";
import Bar from "../Bar/Bar";
import { CiHeart } from "react-icons/ci";
import { BsEye } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import {
  getProductActions,
  singleProductActions,
} from "../../Redux/actions/product";
import { useEffect } from "react";
import Modal from "../Modal/Modal";

import { openModalAction } from "../../Redux/actions/modal";
import { addToCartActions, getCartActions } from "../../Redux/actions/cart";
import { toast } from "react-toastify";
import { CREATE_CARTS_RESET } from "../../Redux/constants/cartsConstant";
import {
  addToFavoriteAction,
  getAllFavoritesAction,
} from "../../Redux/actions/favorite";
import { CREATE_FAVORITE_RESET } from "../../Redux/constants";
import ToolTips from "../ToolTips/ToolTips";

const Selling = () => {
  const dispatch = useDispatch();
  const { getProducts, modal, addToCart, addToFavorite } = useSelector(
    (state) => state
  );
  const { isModalOpen } = modal;
  const { cart, success: cartSuccess, error: cartError, loading } = addToCart;
  const { success: favoriteSuccess, error: favoriteError } = addToFavorite;
  const { product, success, error } = getProducts;

  // get single product
  const openModalHandler = (productId) => {
    dispatch(singleProductActions({ productId: productId }));
    dispatch(openModalAction());
  };

  const addToFavoriteHandler = (productId) => {
    dispatch(addToFavoriteAction(productId));
  };
  const addToCartHandler = (productId) => {
    dispatch(addToCartActions(productId));
  };

  useEffect(() => {
    if (favoriteSuccess) {
      toast.success(" Product added To Favorites");
      dispatch({ type: CREATE_FAVORITE_RESET });
      dispatch(getAllFavoritesAction())
    }

    if (favoriteError) {
      toast.warn(`${favoriteError}`);
      setTimeout(() => {
        dispatch({ type: CREATE_FAVORITE_RESET });
      }, 3000);
    }
  }, [favoriteSuccess, favoriteError]);

  useEffect(() => {
    if (cartSuccess) {
      toast.success("Product added to cart");
      dispatch({ type: CREATE_CARTS_RESET });
      dispatch(getCartActions());
    }

    if (cartError) {
      toast.warn(`${cartError}`);
      setTimeout(() => {
        dispatch({ type: CREATE_CARTS_RESET });
      }, 3000);
    }
  }, [cartSuccess, cartError]);
  // get all products
  useEffect(() => {
    dispatch(getProductActions());
    dispatch(getCartActions());
    dispatch(getAllFavoritesAction());
  }, []);
  return (
    <div>
      <div className="flex justify-start items-center gap-2 mb-4">
        <Bar />
        <p className="font-poppins font-semibold text-sm text-[#db4444]">
          This month
        </p>
      </div>

      <div className="flex justify-between items-center my-6">
        <p className="font-inter font-semibold text-2xl">
          Best Selling Product
        </p>
        <div className="w-[100px] p-4 cursor-pointer bg-[#db4444] text-white text-center rounded-md">
          View All
        </div>
      </div>
      <div className="flex overflow-x-auto overflow-y-hidden w-full h-[500px] gap-8 justify-start items-center mb-20">
        {isModalOpen && <Modal />}
        {product?.slice(5, 10).map((item) => {
          return (
            <div key={item._id} className="w-[225px] h-[250px] mb-14 ">
              <div className=" group w-[225px] h-[250px] border border-gray-100 shadow-md bg-[#f5f5f5]">
                <div className="flex justify-end items-center">
                  {/* <div className="m-2">
                    <Bar bar={false} text={`${item.discountedPercentage}%`} />
                  </div> */}
                  <div className="flex flex-col m-2 gap-2 ">
                    <div
                      onClick={() => addToFavoriteHandler(item._id)}
                      className="w-[25px] h-[25px] rounded-full bg-white"
                    >
                      <ToolTips text="add to favorite">
                        <div className="w-8 h-8 text-gray-600 group-hover:text-yellow-500 transition-colors duration-300 cursor-pointer">
                          <CiHeart className=" text-2xl cursor-pointer text-center" />
                        </div>
                      </ToolTips>
                    </div>

                    <div
                      onClick={() => openModalHandler(item._id)}
                      className="w-[20px] h-[20px] cursor-pointer rounded-full bg-white"
                    >
                      <BsEye className="w-full h-full cursor-pointer" />
                    </div>
                  </div>
                </div>
                <div className="w-[120px] h-[150px] mx-auto">
                  <img
                    className="w-full h-full cursor-pointer"
                    src={item.imageUrl}
                    alt=""
                    onClick={() => openModalHandler(item._id)}
                  />
                </div>
                <div
                  onClick={() => addToCartHandler(item._id)}
                  className="w-full hidden group-hover:block p-2 font-poppins text-white text-center cursor-pointer bg-black"
                >
                  Add to cart
                </div>
              </div>
              <div className="mt-2 font-poppins">
                <p
                  onClick={() => openModalHandler(item._id)}
                  className=" font-semibold cursor-pointer text-base"
                >
                  {item.title}
                </p>
                <span className="flex justify-start items-center gap-2 ">
                  <p className="text-[#db4444] text-sm font-semibold">
                    ${item.price}
                  </p>
                  <p className="text-[grey] line-through text-sm">
                    ${item.discountedPrice}
                  </p>
                </span>
                <span className="flex justify-start items-center gap-2">
                  <FaStar className="text-[#ffad33]" />
                  <FaStar className="text-[#ffad33]" />
                  <FaStar className="text-[#ffad33]" />
                  <FaStar className="text-[#ffad33]" />
                  <FaStar className="text-[#ffad33]" />
                  <p className="text-[grey] text-sm font-semibold">(77)</p>
                </span>
              </div>
            </div>
          );
        })}
      </div>
      {/* <div className="w-[230px] h-[350px] mt-8 mb-12">
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
    </div> */}
    </div>
  );
};

export default Selling;
