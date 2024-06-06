import { Link } from "react-router-dom"
import Logo from "../Logo"
import SettingsDropdown from "./SettingsDropdown";
import TranslateDropdown from "./TranslateDropdown";
import { BsCart3 } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import Searchbar from "../Searchbar";
import { IoMenu } from "react-icons/io5";
import MobileSearchbar from "../Sort/MobileSearchbar";
import { IoMdClose } from "react-icons/io";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { CartCtx } from "../../App";


const Navbar = ({ toggleSidebar, logHandle }) => {
  const [isDarkMode, setIsDarkMode] = useState(document.documentElement.classList.contains("dark"));
  const [isTranslateOpen, setIsTranslateOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isMobile, setMobile] = useState(window.innerWidth > 768);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const cart = useContext(CartCtx);

  const updateMedia = () => {
    setMobile(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const toggleTranslate = () => {
    setIsSettingsOpen(false);
    setIsTranslateOpen(prev => !prev);
  }

  const toggleSettings = () => {
    setIsTranslateOpen(false);
    setIsSettingsOpen(prev => !prev);
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

          <div className="flex gap-8 md:gap-10 items-center">
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
          <div className="flex gap-5 me-3 md:me-10 items-center">
            <div>
              {isDarkMode ? (
                <MdOutlineLightMode className="nav-button" onClick={toggleDarkMode} />
              ) : (
                <MdOutlineDarkMode className="nav-button" onClick={toggleDarkMode} />
              )}
            </div>
            <Link to={"/cart"} className="relative inline-block">
              <BsCart3 className="nav-button" />
              {cart?.list?.length != 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center  text-[10px] font-bold transform translate-x-1/2 -translate-y-1/2 text-white bg-emerald-950 rounded py-[0.5px] px-[3px] dark:bg-white  dark:text-emerald-950">
                  {cart?.list?.length}
                </span>
              )}

            </Link>
            <TranslateDropdown isOpen={isTranslateOpen} open={toggleTranslate} />
            <SettingsDropdown isOpen={isSettingsOpen} open={toggleSettings} logHandle={logHandle} />
          </div>
        </nav>

      )}
    </nav>
  )
}

export default Navbar