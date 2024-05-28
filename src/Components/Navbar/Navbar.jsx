import { Link, useFetcher } from "react-router-dom"
import Logo from "../Logo"
import SettingsDropdown from "./SettingsDropdown";
import TranslateDropdown from "./TranslateDropdown";
import { BsCart3 } from "react-icons/bs";
import { useEffect, useState } from "react";
import Searchbar from "../Searchbar";
import { IoMenu } from "react-icons/io5";
import MobileSearchbar from "../Sort/MobileSearchbar";
import { IoMdClose } from "react-icons/io";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";



const Navbar = ({ toggleSidebar }) => {
  const [isDarkMode, setIsDarkMode] = useState(document.documentElement.classList.contains("dark"));
  const [isTranslateOpen, setIsTranslateOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isMobile, setMobile] = useState(window.innerWidth > 768);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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

  const toggleDarkMode=()=>{
    document.documentElement.classList.toggle("dark");
    setIsDarkMode(document.documentElement.classList.contains("dark"));
  }

  return (
    <nav className="component-card rounded-b-lg dark:bg-slate-800" >
      {isSearchOpen ? (
        <div className="flex justify-between items-center text-slate-600 dark:text-slate-100">
          <Searchbar />
          <div onClick={() => setIsSearchOpen(false)} className="cursor-pointer rounded-e-lg bg-slate-100 dark:bg-slate-700 py-3 md:py-2">
            <IoMdClose className="w-[22px] h-[22px]"/>
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
            {isDarkMode?(
              <MdOutlineLightMode className="w-7 h-7 cursor-pointer hover:fill-white p-1 rounded hover:bg-blue-700 dark:text-slate-100" onClick={toggleDarkMode}/>
            ):(
              <MdOutlineDarkMode className="w-7 h-7 cursor-pointer hover:fill-white p-1 rounded hover:bg-blue-700 dark:text-slate-100" onClick={toggleDarkMode}/>
            )}
            </div>
            <Link to={"/cart"}>
              <BsCart3 className="cursor-pointer w-7 h-7 hover:fill-white p-1 rounded hover:bg-blue-700 dark:text-slate-100" />
            </Link>
            <TranslateDropdown isOpen={isTranslateOpen} open={toggleTranslate} />
            <SettingsDropdown isOpen={isSettingsOpen} open={toggleSettings} />
          </div>
        </nav>

      )}
    </nav>
  )
}

export default Navbar