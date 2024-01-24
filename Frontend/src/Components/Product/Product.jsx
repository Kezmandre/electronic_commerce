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

const Product = () => {
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
    <div className="flex overflow-x-scroll overflow-y-hidden w-full h-[500px] gap-8 justify-start items-center mb-20">
      {isModalOpen && <Modal />}
      {product?.slice(0, 4).map((item) => {
        return (
          <div key={item._id} className="w-[225px] h-[250px] mb-14 ">
            <div className=" group w-[225px] h-[250px] border border-gray-100 shadow-md bg-[#f5f5f5]">
              <div className="flex justify-between items-center">
                <div className="m-2">
                  <Bar bar={false} text={`${item.discountedPercentage}%`} />
                </div>
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
              {loading}
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
                <p className="text-[#db4444] text-sm font-semibold">${item.price}</p>
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
