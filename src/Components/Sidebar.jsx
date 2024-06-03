import { IoIosTrendingUp } from "react-icons/io";
import { FaShop } from "react-icons/fa6";
import { RiDiscountPercentLine } from "react-icons/ri";
import { MdOutlineDiscount, MdLogout, MdBorderColor } from "react-icons/md";
import { FaHouseUser } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BsHouseHeart } from "react-icons/bs";




const Sidebar = ({ isSideOpen }) => {
  const [isCompressed, setIsCompressed] = useState(false);

  if (!isSideOpen) return;
  return (
    <div className={`rounded-lg p-5 absolute md:static z-50 text-[13px] bg-light shadow-none  flex flex-col gap-16 ${isCompressed ? "w-18" : "w-[170px]"}`}>

      <div className="md:flex justify-center hidden">
        <IoMenu
          className="w-7 h-7 p-1 rounded-lg cursor-pointer hover:bg-emerald-800 dark:hover:bg-emerald-800 hover:text-white dark:text-slate-100"
          onClick={() => setIsCompressed(prev => !prev)}
        />
      </div>

      <div className="flex flex-col gap-12  ">


        <NavLink to={"/find"} className={({ isActive }) => (`${isActive ? "bg-emerald-200 dark:bg-emerald-800" : ""} sb-button`)}  >
          <FaShop className="w-5 h-5" />
          {!isCompressed && (
            <p>Shops</p>
          )}
        </NavLink>

        <NavLink to={"/products"} className={({ isActive }) => (`${isActive ? "bg-emerald-200 dark:bg-emerald-800" : ""} sb-button`)}>
          <MdOutlineDiscount className="w-5 h-5" />
          {!isCompressed && (
            <p>Products</p>
          )}
        </NavLink>


        <NavLink to={"/home"} className={({ isActive }) => (`${isActive ? "bg-emerald-200 dark:bg-emerald-800" : ""} sb-button`)}>
          <FaHouseUser className="w-5 h-5" />
          {!isCompressed && (
            <p>Home</p>
          )}
        </NavLink>

        <NavLink to={"/favorites"} className={({ isActive }) => (`${isActive ? "bg-emerald-200 dark:bg-emerald-800" : ""} sb-button`)}>
          <BsHouseHeart className="w-5 h-5" />
          {!isCompressed && (
            <p>Favorites</p>
          )}
        </NavLink>

        <NavLink to={"/orders"} className={({ isActive }) => (`${isActive ? "bg-emerald-200 dark:bg-emerald-800" : ""} sb-button`)}>
          <MdBorderColor className="w-5 h-5" />
          {!isCompressed && (
            <p>Orders</p>
          )}
        </NavLink>

        <Link to={"/"} className="sb-button">
          <MdLogout className="w-5 h-5" />
          {!isCompressed && (
            <p>Log out</p>
          )}
        </Link>
      </div>

    </div>
  )
}

export default Sidebar