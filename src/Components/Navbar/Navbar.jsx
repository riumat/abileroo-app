import { Link } from "react-router-dom"
import Logo from "../Logo"
import SettingsDropdown from "./SettingsDropdown";
import TranslateDropdown from "./TranslateDropdown";
import { BsCart3 } from "react-icons/bs";
import { useState } from "react";


const Navbar = () => {
  const [isTranslateOpen, setIsTranslateOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const toggleTranslate = () => {
    setIsSettingsOpen(false);
    setIsTranslateOpen(prev => !prev);
  }

  const toggleSettings = () => {
    setIsTranslateOpen(false);
    setIsSettingsOpen(prev => !prev);
  }

  return (
    <nav className=" flex items-center p-3 pt-5 justify-between component-card rounded-b-lg">
      <Link to={"/home"} className="ms-10">
        <Logo />
      </Link>
      <div className="flex gap-5 me-10">
        <Link to={"/cart"}>
          <BsCart3 className="cursor-pointer w-7 h-7 hover:fill-white p-1 rounded bg-slate-200 hover:bg-blue-700 " />
        </Link>
        <TranslateDropdown isOpen={isTranslateOpen} open={toggleTranslate} />
        <SettingsDropdown isOpen={isSettingsOpen} open={toggleSettings} />
      </div>
    </nav>
  )
}

export default Navbar