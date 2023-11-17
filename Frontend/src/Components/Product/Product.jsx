import Bar from "../Bar/Bar";
import { CiHeart } from "react-icons/ci";
import { BsEye } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

const Product = () => {
  return (
    <div className="w-[230px] h-[350px] mb-12">
      <div className=" group w-full h-[250px] bg-[#f5f5f5]">
        <div className="flex justify-between items-center">
          <div className="m-2">
            <Bar bar={false} text={"-40%"} />
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
        <div className="w-[200px] h-[150px] mx-auto">
          <img
            className="w-full h-full"
            src="https://res.cloudinary.com/di9r3toow/image/upload/v1693901865/ps5-product-thumbnail-01-en-14sep21_yp2khy.webp"
            alt=""
          />
        </div>
        <div className="w-full hidden group-hover:block p-2 font-poppins text-white text-center cursor-pointer bg-black">
          Add to cart
        </div>
      </div>
      <div className="mt-2 font-poppins">
        <p className=" font-semibold text-base">Sony Play Station 5</p>
        <span className="flex justify-start items-center gap-2 ">
          <p className="text-[#db4444] text-sm">$500</p>
          <p className="text-[grey] line-through text-sm">$600</p>
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
};

export default Product;
