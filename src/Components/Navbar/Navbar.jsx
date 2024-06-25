import { Link } from "react-router-dom"
import Logo from "../Logo"
import { useState } from "react";
import Searchbar from "../Searchbar";
import MobileSearchbar from "../Sort/MobileSearchbar";
import { IoMdClose } from "react-icons/io";
import TranslateDropdown from "./TranslateDropdown";
import Logout from "./Logout";
import { useBreakpoints } from "../../utils/hooks";
import NavLinks from "./NavLinks";
import NavIcons from "./NavIcons";


const Navbar = () => {
  const { isMobile, isTablet } = useBreakpoints();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="bg-light" >
      {isSearchOpen ? (
        <div className="flex justify-between items-center text-emerald-800 dark:text-slate-100 pb-[5.5px]">
          <Searchbar />
          <div onClick={() => setIsSearchOpen(false)} className="cursor-pointer rounded-e-lg bg-dark py-3 md:py-2">
            <IoMdClose className="w-[22px] h-[22px] text-orange-950 dark:text-orange-50" />
          </div>
        </div>
      ) : (
        <nav className="flex items-center justify-between md:p-3 py-3 px-1">

          <div className="flex gap-3 md:gap-10 items-center flex-1 justify-center">
            <Link to={"/home"} className=" ms-3 ">
              <Logo />
            </Link>

            {!isMobile ? (
              <Searchbar />
            ) : (
              <MobileSearchbar openSearchbar={() => setIsSearchOpen(true)} />
            )}
          </div>

          <div className=" flex flex-1 justify-center">
            <NavLinks isTablet={isTablet} />
          </div>
          <div className="flex gap-3 md:gap-5 xl:gap-7 me-3  items-center flex-1 justify-end">
            <NavIcons />
            <TranslateDropdown />
            <Logout />
          </div>

        </nav>

      )}
    </nav>
  )
}

export default Navbar