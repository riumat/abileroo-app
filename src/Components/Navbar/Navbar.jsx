import { Link } from "react-router-dom"
import Logo from "../Logo"
import { useState } from "react";
import Searchbar from "../Searchbar";
import MobileSearchbar from "../Sort/MobileSearchbar";
import { IoMdClose } from "react-icons/io";
import TranslateDropdown from "./TranslateDropdown";
import Logout from "./Logout";
import { useComponentVisible, useMobile } from "../../utils/hooks";
import NavLinks from "./NavLinks";
import NavIcons from "./NavIcons";


const Navbar = () => {
  const isMobile = useMobile();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { ref, isVisible, setIsVisible } = useComponentVisible(false);

  return (
    <nav className="rounded-b-lg bg-light shadow-none" >
      {isSearchOpen ? (
        <div className="flex justify-between items-center text-emerald-800 dark:text-slate-100 pb-[5.5px]">
          <Searchbar />
          <div onClick={() => setIsSearchOpen(false)} className="cursor-pointer rounded-e-lg bg-dark py-3 md:py-2">
            <IoMdClose className="w-[22px] h-[22px] text-orange-950 dark:text-orange-50" />
          </div>
        </div>
      ) : (
        <nav className="flex items-center justify-between md:p-3 py-3 px-1">

          <div className="flex gap-3 md:gap-10 items-center">
            <Link to={"/home"} className=" ms-3 md:ms-10">
              <Logo />
            </Link>

            {!isMobile ? (
              <Searchbar />
            ) : (
              <MobileSearchbar openSearchbar={() => setIsSearchOpen(true)} />
            )}
          </div>

          <NavLinks />

          <div className="flex gap-3 md:gap-5 me-3 md:me-10 items-center">
            <NavIcons />
            <TranslateDropdown isOpen={isVisible} open={() => setIsVisible(prev => !prev)} ref={ref} />
            <Logout />
          </div>

        </nav>

      )}
    </nav>
  )
}

export default Navbar