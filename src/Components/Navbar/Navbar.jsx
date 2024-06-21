import { Link, NavLink } from "react-router-dom"
import Logo from "../Logo"
import SettingsDropdown from "./SettingsDropdown";
import { BsCart3 } from "react-icons/bs";
import { useEffect, useState } from "react";
import Searchbar from "../Searchbar";
import { IoMenu } from "react-icons/io5";
import MobileSearchbar from "../Sort/MobileSearchbar";
import { IoMdClose } from "react-icons/io";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import LangToggle from "../LangToggle";
import { useSelector } from "react-redux";
import LinkButton from "./LinkButton";
import TranslateDropdown from "./TranslateDropdown";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { CgLogOut } from "react-icons/cg";
import Logout from "./Logout";


const Navbar = ({ toggleSidebar }) => {
  const [isDarkMode, setIsDarkMode] = useState(document.documentElement.classList.contains("dark"));
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isTranslateOpen, setIsTranslateOpen] = useState(false);
  const [isMobile, setMobile] = useState(window.innerWidth > 768);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const cart = useSelector(state => state.cart);
  const { t } = useTranslation("translation", { keyPrefix: "sidebar" })

  const updateMedia = () => {
    setMobile(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const toggleSettings = () => {
    setIsSettingsOpen(prev => !prev);
    if (isTranslateOpen) setIsTranslateOpen(false);
  }
  const toggleTranslate = () => {
    setIsTranslateOpen(prev => !prev);
    if (isSettingsOpen) setIsSettingsOpen(false);
  }

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDarkMode(document.documentElement.classList.contains("dark"));
  }

  return (
    <nav className="rounded-b-lg bg-light shadow-none" >
      {isSearchOpen ? (
        <div className="flex justify-between items-center text-emerald-800 dark:text-slate-100 pb-[5.5px]">
          <Searchbar />
          <div onClick={() => setIsSearchOpen(false)} className="cursor-pointer rounded-e-lg bg-dark py-3 md:py-2">
            <IoMdClose className="w-[22px] h-[22px]" />
          </div>
        </div>
      ) : (
        <nav className="flex items-center justify-between md:p-3 py-3 px-1">

          <div className="flex gap-3 md:gap-10 items-center">
            <Link to={"/home"} className=" ms-3 md:ms-10">
              <Logo />
            </Link>
            {!isMobile && (
              <div onClick={toggleSidebar} className="cursor-pointer">
                <IoMenu className="w-5 h-5 dark:text-slate-100" />
              </div>
            )}
            {isMobile ? (
              <Searchbar />
            ) : (
              <MobileSearchbar openSearchbar={() => setIsSearchOpen(true)} />
            )}
          </div>
          <div className="flex items-center gap-5">
            <LinkButton path={"/home"} text={t("home")} />
            <LinkButton path={"/find"} text={t("shops")} />

            <LinkButton path={"/products"} text={t("products")} />
            <LinkButton path={"/Orders"} text={t("orders")} />
          </div>

          <div className="flex gap-3 md:gap-5 me-3 md:me-10 items-center">
            <div>
              {isDarkMode ? (
                <MdOutlineLightMode className="nav-button" onClick={toggleDarkMode} />
              ) : (
                <MdOutlineDarkMode className="nav-button" onClick={toggleDarkMode} />
              )}
            </div>
            <Link to={"/cart"} className="relative mr-1">

              <MdOutlineShoppingBag className="nav-button bg-light relative" />

              {cart?.list?.length !== 0 && (
                <span className="nav-cart-badge">
                  {cart?.list?.length}
                </span>
              )}

            </Link>
            <Link to={"/favorites"}>
              <FaRegHeart className="nav-button" />
            </Link>
            <TranslateDropdown isOpen={isTranslateOpen} open={toggleTranslate} />
            {/* <SettingsDropdown isOpen={isSettingsOpen} open={toggleSettings} /> */}
            <Logout />
          </div>

        </nav>

      )}
    </nav>
  )
}

export default Navbar