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
import { addToCartActions } from "../../Redux/actions/cart";
import { toast } from "react-toastify";
import {
  CREATE_CARTS_RESET,

} from "../../Redux/constants/cartsConstant";

const Product = () => {
  const dispatch = useDispatch();
  const { getProducts, modal, addToCart } = useSelector((state) => state);
  const { isModalOpen } = modal;
  const { cart, success: cartSuccess, error: cartError } = addToCart;
  const { product, success, error } = getProducts;


  // get single product
  const openModalHandler = (productId) => {
    dispatch(singleProductActions({ productId: productId }));
    dispatch(openModalAction());
  };

  const addToCartHandler = (productId) => {
    console.log(productId, "prodId");
    dispatch(addToCartActions(productId));

    // const cartExist = cart?.find((product) => product._id === _id);
    // if (cartExist) {
    //   toast.warn("product already in cart");
    // }
  };

  useEffect(() => {
    if (cartSuccess) {
      toast.success("Product added to cart");
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
  }, []);
  return (
    <div className="flex flex-wrap gap-8 justify-start items-center mb-20">
      {isModalOpen && <Modal />}
      {product?.slice(0, 4).map((item) => {
        return (
          <div key={item._id} className="w-[225px] h-[250px] mb-14 ">
            <div className=" group w-[225px] h-[250px] bg-[#f5f5f5]">
              <div className="flex justify-between items-center">
                <div className="m-2">
                  <Bar bar={false} text={`${item.discountedPercentage}%`} />
                </div>
                <div className="flex flex-col m-2 gap-2 ">
                  <div className="w-[20px] h-[20px] rounded-full bg-white">
                    <CiHeart className="w-full h-full cursor-pointer" />
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
                <p className="text-[#db4444] text-sm">${item.price}</p>
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
  );
};

export default Product;
