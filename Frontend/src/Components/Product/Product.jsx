import Bar from "../Bar/Bar";
import { CiHeart } from "react-icons/ci";
import { BsEye } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import {useDispatch,useSelector} from "react-redux"
import { getProductActions } from "../../Redux/actions/product";
import { useEffect } from "react";

const Product = () => {
  const dispatch = useDispatch()
  const {getProducts}=useSelector((state)=>state)
  const {product,success,error}=getProducts
   useEffect(()=>{
    dispatch(getProductActions())
   },[])
  return (
    <div className="flex flex-wrap gap-8 justify-start items-center mb-20">
      {product?.map((item)=>{
        return(
        < div key={item.id} className="w-[220px] h-[250px] mb-14 ">
      <div className=" group w-[220px] h-[250px] bg-[#f5f5f5]">
        <div className="flex justify-between items-center">
          <div className="m-2">
            <Bar bar={false} text={`${item.discountedPercentage}%` }  />
          </div>
          <div className="flex flex-col m-2 gap-2 ">
            <div className="w-[20px] h-[20px] rounded-full bg-white">
              <CiHeart className="w-full h-full cursor-pointer" />
            </div>
            <div className="w-[20px] h-[20px] rounded-full bg-white">
              <BsEye className="w-full h-full cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="w-[120px] h-[150px] mx-auto">
          <img
            className="w-full h-full"
            src={item.imageUrl}
            alt=""
          />
        </div>
        <div className="w-full hidden group-hover:block p-2 font-poppins text-white text-center cursor-pointer bg-black">
          Add to cart
        </div>
      </div>
      <div className="mt-2 font-poppins">
        <p className=" font-semibold text-base">{item.title}</p>
        <span className="flex justify-start items-center gap-2 ">
          <p className="text-[#db4444] text-sm">${item.price}</p>
          <p className="text-[grey] line-through text-sm">${item.discountedPrice}</p>
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
        )
      })}
    
    </div>
  );
};

export default Product;
