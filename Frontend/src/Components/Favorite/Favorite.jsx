import React from "react";
import empty_Fav from "../Assets/Images/fav_empty.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  deleteFavoriteAction,
  getAllFavoritesAction,
} from "../../Redux/actions/favorite";
import { MdDeleteOutline } from "react-icons/md";
import { addToCartActions, getCartActions } from "../../Redux/actions/cart";
import { toast } from "react-toastify";
import { DELETE_FAVORITE_RESET } from "../../Redux/constants";
import { CREATE_CARTS_RESET } from "../../Redux/constants/cartsConstant";

const Favorite = () => {
  const dispatch = useDispatch();
  const { getFavorites, deleteFavorite, addToCart } = useSelector(
    (state) => state
  );
  const { success, error } = deleteFavorite;
  const { favorite } = getFavorites;
  const { success: cartSuccess, error: cartError, loading } = addToCart;

  const removeFavoriteHandler = (favoriteId) => {
    dispatch(deleteFavoriteAction(favoriteId));
  };

  const addToCartHandlers = (favoriteId) => {
    dispatch(addToCartActions(favoriteId));
  };
  useEffect(() => {
    if (success) {
      toast.success("product removed from favorites");
      dispatch({ type: DELETE_FAVORITE_RESET });
      dispatch(getAllFavoritesAction());
    }

    if (error) {
      toast.error(`${error}`);
      setTimeout(() => {
        dispatch({ type: DELETE_FAVORITE_RESET });
      }, 3000);
    }
  }, [success, error]);

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

  useEffect(() => {
    dispatch(getAllFavoritesAction());
    dispatch(getCartActions());
  }, []);
  return (
    <div className="flex justify-start items-center gap-2 flex-wrap">
      {favorite && favorite.length > 0 ? (
        favorite.map((fav) => {
          return (
            <div
              key={fav._id}
              className="relative my-6 mx-12  w-full max-w-xs  overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
            >
              <a
                className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
                href="#"
              >
                <img
                  className="bg-cover w-[200px] h-[200px] mx-auto my-8"
                  src={fav.product?.imageUrl}
                  alt="product image"
                />
                <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                  {fav.product?.discountedPercentage}% OFF
                </span>
              </a>
              <div className="mt-4 px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-slate-900">
                    {fav.product?.title}
                  </h5>
                </a>
                <div className="mt-2 mb-5 flex items-center justify-between">
                  <p>
                    <span className="text-3xl font-bold text-slate-900">
                      ${fav.product?.price}
                    </span>
                    <span className="text-sm text-slate-900 line-through">
                      ${fav.product?.discountedPrice}
                    </span>
                  </p>
                  <div className="flex items-center">
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                      5.0
                    </span>
                  </div>
                </div>
                <a
                  onClick={() => addToCartHandlers(fav.product._id)}
                  className="flex items-center cursor-pointer justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Add to cart
                </a>
              </div>
              <div
                onClick={() => removeFavoriteHandler(fav._id)}
                className=" group absolute w-[30px] h-[30px] top-4 right-4 rounded-md shadow-md border cursor-pointer"
              >
                <MdDeleteOutline className=" group hover:text-red-700 w-full h-full" />
              </div>
            </div>
          );
        })
      ) : (
        <div className="flex flex-col w-[400px] h-[400px] mx-auto">
          <div className="w-[300px] h-[300px] bg-red-700 mx-auto my-10">
            <img src={empty_Fav} alt="" className="w-full h-full bg-cover" />
          </div>
          <h2 className="text-center text-3xl font-semibold font-inter my-4">
            Your Favorite List is Empty
          </h2>
        </div>
      )}
    </div>
  );
};

export default Favorite;
