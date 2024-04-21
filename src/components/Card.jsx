/* eslint-disable react/prop-types */

import { IoTimerOutline } from "react-icons/io5";
import EditButton from "./EditButton";

function Card({ lipton, barcode, disc, discprice, pending, price, product }) {
  return (
    <div className="border-2 border-slate-200 shadow-sm p-2 rounded-xl w-[350px] relative bg-white">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-200 rounded-l-full opacity-20"></div>
      <div className="relative">
        <div className="flex">
          <div>
            <img
              src={lipton.img}
              className=" w-[170px] h-[150px] object-cover "
              alt="fmcg products"
            />
          </div>
          <div>
            <button className="flex items-center gap-1 bg-yellow-200  rounded-md px-3 text-center mb-2">
              <IoTimerOutline /> {pending}
            </button>

            <h1>{product}</h1>
            <p className="text-[#aaa] pb-2">{barcode}</p>
            <div className="flex gap-3">
              <p>{price}</p>
              <p className="text-[#aaa] line-through">{discprice}</p>
              <p className="bg-red-300 text-rose-600 p-1 rounded-md">{disc}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-2">
          <button className="bg-black text-white px-8  font-semibold rounded-md">
            Buy Now
          </button>
          <button className="font-light border border-black  rounded-md px-4 bg-white">
            Add to Cart
          </button>
          <button className=" bg-white">
            <EditButton label="Edit" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
