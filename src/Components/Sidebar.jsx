import { IoIosTrendingUp } from "react-icons/io";
import { FaShop } from "react-icons/fa6";
import { RiDiscountPercentLine } from "react-icons/ri";
import { MdOutlineDiscount, MdOutlineSettingsAccessibility, MdLogout } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BsHouseHeart } from "react-icons/bs";


const Sidebar = ({ isSideOpen }) => {
  const [isCompressed, setIsCompressed] = useState(false);

  if (!isSideOpen) return;
  return (
    <div className={`bg-white dark:bg-slate-950 rounded-lg p-5 absolute md:static z-50 text-[13px] dark:text-slate-100  ${isCompressed ? "w-18" : "w-[200px]"}`}>

      <div className="md:flex justify-center hidden">
        <IoMenu className="w-7 h-7 p-1 rounded-lg cursor-pointer hover:bg-emerald-800 dark:hover:bg-emerald-800 hover:text-white dark:text-slate-100" onClick={() => setIsCompressed(prev => !prev)} />
      </div>

      <div className="flex flex-col gap-5 border-b border-slate-400  py-5">
        {!isCompressed && (
          <p className="font-semibold">Shops</p>
        )}
        <div className="flex flex-col gap-2 text-slate-700 dark:text-slate-200 ">
          <div className="flex gap-5 items-center rounded-lg  transition-colors cursor-pointer hover:bg-emerald-200 dark:hover:bg-emerald-800  py-3">
            <IoIosTrendingUp className="w-5 h-5" />
            {!isCompressed && (
              <p>Trending</p>
            )}
          </div>

          <Link to={"/find"} className="flex gap-5 items-center rounded-lg transition-colors cursor-pointer hover:bg-emerald-200 dark:hover:bg-emerald-800 py-3" >
            <FaShop className="w-5 h-5" />
            {!isCompressed && (
              <p>Find All</p>
            )}
          </Link>

        </div>
      </div>

      <div className="flex flex-col gap-5 border-b border-slate-400 py-5">
        {!isCompressed && (
          <p className="font-semibold">Products</p>
        )}

        <div className="flex flex-col gap-2 text-slate-700 dark:text-slate-200">
          <div className="flex gap-5 items-center rounded-lg  transition-colors cursor-pointer hover:bg-emerald-200 dark:hover:bg-emerald-800 py-3">
            <RiDiscountPercentLine className="w-5 h-5" />
            {!isCompressed && (
              <p>Discounts</p>
            )}
          </div>

          <div className="flex gap-5 items-center rounded-lg  transition-colors cursor-pointer hover:bg-emerald-200 dark:hover:bg-emerald-800 py-3">
            <MdOutlineDiscount className="w-5 h-5" />
            {!isCompressed && (
              <p>Find All</p>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5  py-5">
        {!isCompressed && (
          <p className="font-semibold">Your Area</p>
        )}

        <div className="flex flex-col gap-2 text-slate-700 dark:text-slate-200">
          <Link to={"/favorites"} className="flex gap-5 items-center rounded-lg  transition-colors cursor-pointer hover:bg-emerald-200 dark:hover:bg-emerald-800 py-3">
            <BsHouseHeart className="w-5 h-5" />
            {!isCompressed && (
              <p>Favorites</p>
            )}
          </Link>

          <Link to={"/orders"} className="flex gap-5 items-center rounded-lg  transition-colors cursor-pointer hover:bg-emerald-200 dark:hover:bg-emerald-800 py-3">
            <FaShoppingCart className="w-5 h-5" />
            {!isCompressed && (
              <p>Orders</p>
            )}
          </Link>

          <Link to={"/"} className="flex gap-5 items-center rounded-lg  transition-colors cursor-pointer hover:bg-emerald-200 dark:hover:bg-emerald-800 py-3">
            <MdLogout className="w-5 h-5" />
            {!isCompressed && (
              <p>Log out</p>
            )}
          </Link>
          
        </div>
      </div>
    </div>
  )
}

export default Sidebar