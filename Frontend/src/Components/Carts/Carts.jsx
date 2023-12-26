import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {toast} from "react-toastify"
import { decreaseCartAction, deleteCartAction, getCartActions, increaseCartAction } from "../../Redux/actions/cart";
import { DELETE_CARTS_RESET } from "../../Redux/constants/cartsConstant";
const Carts = () => {
  const dispatch = useDispatch();
  const { getCarts,updateCart, deleteCart } = useSelector((state) => state);
  const {success, error}= deleteCart
  const {cart:qtyUpdate,} = updateCart
    const {carts} = getCarts

    const increaseCartHandler=(cartId)=>{
      dispatch(increaseCartAction(cartId))
      dispatch(getCartActions())
    }
    const decreaseCartHandler=(cartId)=>{
      dispatch(decreaseCartAction(cartId))
      dispatch(getCartActions())
    }

    const deleteCartHandler=(cartId)=>{
        dispatch(deleteCartAction(cartId))
        
    }

    useEffect(()=>{
      if(success){
        toast.success("product removed from carts")
        dispatch({type:DELETE_CARTS_RESET})
        dispatch(getCartActions())
      }

      if(error){
        toast.error(`${error}`)
        setTimeout(()=>{
          dispatch({type:DELETE_CARTS_RESET})
        },3000)
      }
    },[dispatch,success, error])
    const totalItems = carts.reduce((total, item) => {
        return total + item.quantity * (item.product.price || 0);
      }, 0);

    

      const total = totalItems + 8
  console.log(carts,"cartssss")

  useEffect(() => {
    dispatch(getCartActions());
  }, []);
  return (
    <section class=" bg-gray-100 py-8">
      <div class="mx-auto px-4">
        <div class="flex items-center justify-start ml-8">
          <h1 class="text-sm  font-semibold text-gray-900">Home/Cart</h1>
        </div>

        <div class="mx-auto mt-4 max-w-3xl md:mt-6">
          <div class="bg-white shadow">
            <div class="px-4 py-6 sm:px-8 sm:py-10">
              <div class="flow-root">
                <ul class="-my-8">
                  {carts && carts.length > 0 ? (
                    carts.map((cart) => {
                      return (
                        <li key={cart._id} class="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                          <div class="shrink-0">
                            <img
                              class="h-25 w-25 max-w-full rounded-lg object-cover"
                              src={cart.product.imageUrl}
                              alt=""
                            />
                          </div>

                          <div class="relative flex flex-1 flex-col justify-between">
                            <div class="sm:col-gap-5 sm:grid sm:grid-cols-2">
                              <div class="pr-8 sm:pr-5">
                                <p class="text-base font-semibold text-gray-900">
                                  {cart.product.title}
                                </p>
                                <p class="mx-0 mt-1 mb-0 font-bold text-sm text-gray-800">
                                  ${cart.product.price }
                                </p>
                              </div>

                              <div class="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                                <p class="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                                  ${cart.product.price * cart.quantity}
                                </p>

                                <div class="sm:order-1">
                                  <div class="mx-auto flex h-8 items-stretch text-gray-600">
                                    
                                    <button onClick={()=>decreaseCartHandler(cart._id)} class="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">
                                      -
                                    </button>
                                    <div class="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                                      {cart.quantity}
                                    </div>
                                    <button onClick={()=>increaseCartHandler(cart._id)} class="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">
                                      +
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                              <button
                              onClick={()=>deleteCartHandler(cart._id)}
                                type="button"
                                class="flex rounded p-2 text-center text-red-700 transition-all duration-200 ease-in-out focus:shadow hover:text-red-900"
                              >
                                <svg
                                  class="h-5 w-5"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12"
                                    class=""
                                  ></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                        </li>
                      );
                    })
                  ) : (
                    <h2 className="text-center text-3xl font-inter text-red-700 font-bold">Your Cart is Empty</h2>
                  )}
                </ul>
              </div>

              <div class="mt-6 border-t border-b py-2">
                <div class="flex items-center justify-between">
                  <p class="text-sm text-gray-400">Subtotal</p>
                  <p class="text-lg font-semibold text-gray-900">${totalItems}</p>
                </div>
                <div class="flex items-center justify-between">
                  <p class="text-sm text-gray-400">Shipping</p>
                  <p class="text-lg font-semibold text-gray-900">$8.00</p>
                </div>
              </div>
              <div class="mt-6 flex items-center justify-between">
                <p class="text-sm font-medium text-gray-900">Total</p>
                <p class="text-2xl font-semibold text-gray-900">
                  <span class="text-xs font-normal text-gray-400">USD</span>{" "}
                  {total}
                </p>
              </div>

              <div class="mt-6 text-center">
                <button
                  type="button"
                  class="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                >
                  Checkout
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carts;
