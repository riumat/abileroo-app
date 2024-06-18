import { FaShop } from "react-icons/fa6";
import { MdOutlineDiscount, MdLogout, MdBorderColor } from "react-icons/md";
import { FaHouseUser } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsHouseHeart } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { logout } from "../redux/auth/authSlice";


const Sidebar = ({ isSideOpen }) => {
  const dispatch = useDispatch();
  const [isCompressed, setIsCompressed] = useState(false);
  const { t } = useTranslation("translation", { keyPrefix: "sidebar" });

  if (!isSideOpen) return;
  return (
    <div className={`rounded-lg py-5 absolute md:static z-50 text-[13px] bg-light shadow-none transition-all flex flex-col gap-16 overflow-y-auto ${isCompressed ? "w-16 px-3" : "w-[170px] px-5"}`}>

      <div className="md:flex justify-center hidden">
        <IoMenu
          className="w-7 h-7 p-1 rounded-lg cursor-pointer hover:bg-emerald-800 dark:hover:bg-emerald-800 hover:text-white dark:text-slate-100"
          onClick={() => setIsCompressed(prev => !prev)}
        />
      </div>

      <div className="flex flex-col gap-12">

        <NavLink
          to={"/home"}
          className={({ isActive }) => (`${isActive ? "bg-emerald-200 dark:bg-emerald-800" : ""} ${!isCompressed && "justify-start gap-5"} sb-button`)}
        >
          <FaHouseUser className="w-5 h-5" />
          {!isCompressed && (
            <p>Home</p>
          )}
        </NavLink>

        <NavLink
          to={"/find"}
          className={({ isActive }) => (`${isActive ? "bg-emerald-200 dark:bg-emerald-800" : ""} ${!isCompressed && "justify-start gap-5"} sb-button `)}
        >
          <FaShop className="w-5 h-5" />
          {!isCompressed && (
            <p>{t("shops")}</p>
          )}
        </NavLink>

        <NavLink
          to={"/products"}
          className={({ isActive }) => (`${isActive ? "bg-emerald-200 dark:bg-emerald-800" : ""} ${!isCompressed && "justify-start gap-5"} sb-button`)}
        >
          <MdOutlineDiscount className="w-5 h-5" />
          {!isCompressed && (
            <p>{t("products")}</p>
          )}
        </NavLink>

        <NavLink
          to={"/favorites"}
          className={({ isActive }) => (`${isActive ? "bg-emerald-200 dark:bg-emerald-800" : ""} ${!isCompressed && "justify-start gap-5"} sb-button`)}
        >
          <BsHouseHeart className="w-5 h-5" />
          {!isCompressed && (
            <p>{t("favorites")}</p>
          )}
        </NavLink>

        <NavLink
          to={"/orders"}
          className={({ isActive }) => (`${isActive ? "bg-emerald-200 dark:bg-emerald-800" : ""} ${!isCompressed && "justify-start gap-5"} sb-button`)}
        >
          <MdBorderColor className="w-5 h-5" />
          {!isCompressed && (
            <p>{t("orders")}</p>
          )}
        </NavLink>

        <div
          className={`${!isCompressed && "justify-start gap-5"} sb-button`}
          onClick={() => dispatch(logout())} >
          <MdLogout className="w-5 h-5" />
          {!isCompressed && (
            <p>{t("logout")}</p>
          )}
        </div>
      </div>

    </div>
  )
}

export default Sidebar