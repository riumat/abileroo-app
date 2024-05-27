import { Link } from "react-router-dom"
import Logo from "../Logo"
import SettingsDropdown from "./SettingsDropdown";
import TranslateDropdown from "./TranslateDropdown";
import { BsCart3 } from "react-icons/bs";
import { useEffect, useState } from "react";
import Searchbar from "../Searchbar";
import { IoMenu } from "react-icons/io5";
import MobileSearchbar from "../Sort/MobileSearchbar";
import { IoMdClose } from "react-icons/io";


const Navbar = ({ toggleSidebar }) => {
  const [isTranslateOpen, setIsTranslateOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isMobile, setMobile] = useState(window.innerWidth > 1024);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const updateMedia = () => {
    setMobile(window.innerWidth > 1024);
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

  return (
    <nav className="component-card rounded-b-lg " >
      {isSearchOpen ? (
        <div className="flex justify-between items-center text-slate-600">
          <Searchbar />
          <div onClick={() => setIsSearchOpen(false)} className="cursor-pointer">
            <IoMdClose />
          </div>
        </div>
      ) : (
        <nav className="flex items-center justify-between lg:p-3 py-3 px-1">

          <div className="flex gap-8 lg:gap-10 items-center">
            <Link to={"/home"} className=" ms-3 lg:ms-10">
              <Logo />
            </Link>
            {!isMobile && (
              <div onClick={toggleSidebar} className="cursor-pointer">
                <IoMenu className="w-5 h-5 " />
              </div>
            )}
            {isMobile ? (
              <Searchbar />
            ) : (
              <MobileSearchbar openSearchbar={() => setIsSearchOpen(true)} />
            )}
          </div>
          <div className="flex gap-5 me-3 lg:me-10 items-center">
            <Link to={"/cart"}>
              <BsCart3 className="cursor-pointer w-7 h-7 hover:fill-white p-1 rounded hover:bg-blue-700 " />
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