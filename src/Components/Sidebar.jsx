import { FaShop } from "react-icons/fa6";
import { IoIosTrendingUp } from "react-icons/io";
import { FaPersonWalkingDashedLineArrowRight } from "react-icons/fa6";
import { RiDiscountPercentLine } from "react-icons/ri";
import { MdOutlineDiscount, MdOutlineSettingsAccessibility } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isCompressed, setIsCompressed] = useState(true);

  return (
    <div className={`component-card rounded-lg p-5 ${isCompressed ? "w-20" : "w-[250px]"}`}>

      <div className="lg:flex justify-center hidden  ">
        <IoMenu className="w-6 h-6 rounded-lg cursor-pointer hover:bg-blue-800 hover:text-white" onClick={() => setIsCompressed(prev => !prev)} />
      </div>

      <div className="flex flex-col gap-5 border-b py-3">
        {!isCompressed && (
          <p className="font-semibold">Shops</p>
        )}
        <div className="flex flex-col text-slate-700  ">

          <div className="flex gap-5 items-center rounded-lg py-4 ps-2 transition-colors cursor-pointer hover:bg-blue-200 text-[14px]">
            <IoIosTrendingUp className="w-5 h-5" />
            {!isCompressed && (

              <p>Trending</p>
            )}

          </div>

          <div className="flex gap-5 items-center rounded-lg py-4 ps-2 transition-colors cursor-pointer hover:bg-blue-200 text-[14px]">
            <FaPersonWalkingDashedLineArrowRight className="w-5 h-5" />
            {!isCompressed && (

              <p>Near you</p>
            )}

          </div>

          <Link to={"/home"} className="flex gap-5 items-center rounded-lg py-4 ps-2 transition-colors cursor-pointer hover:bg-blue-200 text-[14px]" >
            <FaShop className="w-5 h-5" />
            {!isCompressed && (

              <p>Find All</p>
            )}

          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-5 border-b py-3">
        {!isCompressed && (

          <p className="font-semibold">Products</p>
        )}

        <div className="flex flex-col  text-slate-700">

          <div className="flex gap-5 items-center rounded-lg py-4 ps-2 transition-colors cursor-pointer hover:bg-blue-200 text-[14px]">
            <RiDiscountPercentLine className="w-5 h-5" />
            {!isCompressed && (

              <p>Discounts</p>

            )}

          </div>

          <div className="flex gap-5 items-center rounded-lg py-4 ps-2 transition-colors cursor-pointer hover:bg-blue-200 text-[14px]">
            <MdOutlineDiscount className="w-5 h-5" />
            {!isCompressed && (

              <p>Find All</p>
            )}

          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 border-b py-3">
        {!isCompressed && (

          <p className="font-semibold">Your Area</p>
        )}

        <div className="flex flex-col  text-slate-700">

          <div className="flex gap-5 items-center rounded-lg py-4 ps-2 transition-colors cursor-pointer hover:bg-blue-200 text-[14px]">
            <MdOutlineSettingsAccessibility className="w-5 h-5" />
            {!isCompressed && (

              <p>Account Settings</p>
            )}

          </div>

          <div className="flex gap-5 items-center rounded-lg py-4 ps-2 transition-colors cursor-pointer hover:bg-blue-200 text-[14px]">
            <FaShoppingCart className="w-5 h-5" />
            {!isCompressed && (

              <p>Orders</p>
            )}

          </div>

          <div className="flex gap-5 items-center rounded-lg py-4 ps-2 transition-colors cursor-pointer hover:bg-blue-200 text-[14px]">
            <FaRegCreditCard className="w-5 h-5" />
            {!isCompressed && (

              <p>Payment Methods</p>
            )}

          </div>

          <Link to={"/"} className="flex gap-5 items-center rounded-lg py-4 ps-2 transition-colors cursor-pointer hover:bg-blue-200 text-[14px]">
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