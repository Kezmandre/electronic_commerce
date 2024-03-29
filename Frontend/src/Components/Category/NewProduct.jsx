import React,{useEffect} from "react";
import JBL from "../Assets/Images/JBL.png";
import { useSelector, useDispatch } from "react-redux";

import Modal from "../Modal/Modal";
import { getProductActions, singleProductActions } from "../../Redux/actions/product";
import { openModalAction } from "../../Redux/actions/modal";

const NewProduct = () => {
  const dispatch = useDispatch()
  const { getProducts, modal, } = useSelector(
    (state) => state
  );
  const { isModalOpen } = modal;
  const { product } = getProducts;

  const openModalHandler = (productId) => {
    dispatch(singleProductActions({ productId: productId }));
    dispatch(openModalAction());
  };
  const data = [
    {
      id: 1,
      time: 4,
      text: "Days",
    },

    {
      id: 2,
      time: 23,
      text: "Hours",
    },

    {
      id: 3,
      time: 54,
      text: "Minutes",
    },

    {
      id: 4,
      time: 4,
      text: "Seconds",
    },
  ];

  useEffect(()=>{
    dispatch(getProductActions())
  },[])
  return (
    <div className="w-full  mx-auto">
      <div className="w-full bg-black  border">
        {isModalOpen && <Modal/>}
        {product?.slice(10,11).map((item)=>(
           <div key={item._id} className="w-[95%] h-5/6  mx-auto my-8">
           <p className="text-[#0f6] font-poppins font-semibold text-xl pb-6">
             Categories
           </p>
           <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-2">
             <div className="basis-3/6 h-[400px]">
               <p className="font-inter font-semibold text-center tracking-wide text-3xl lg:text-6xl pb-8 text-white">
                 Enhance Your Music Experience
               </p>
               <div className="flex  justify-center items-center gap-4 mb-8">
                 {data?.map((item) => {
                   return (
                     <div
                       key={item.id}
                       className="w-[65px] h-[65px] lg:w-[80px] lg:h-[80px] flex justify-center flex-col rounded-full items-center bg-white"
                     >
                       <p className="font-poppins text-sm font-semibold">
                         {item.time}
                       </p>
                       <p className="text-sm font-poppins">{item.text}</p>
                     </div>
                   );
                 })}
               </div>
 
               <div onClick={()=>openModalHandler(item._id)} className="p-6 cursor-pointer rounded-md bg-[#0f6] w-[300px] mx-auto flex justify-center items-center text-white font-poppins font-semibold">
                 Buy Now!
               </div>
             </div>
             <div className="basis-3/6 h-[350px]">
               <div className="w-5/6 h-full mx-auto">
                 <img src={item.imageUrl} alt="speaker" className="w-full h-full" />
               </div>
             </div>
           </div>
         </div>
        ))}
       
      </div>
    </div>
  );
};

export default NewProduct;
