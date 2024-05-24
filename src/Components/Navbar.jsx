import { Link } from "react-router-dom"
import Logo from "./Logo"
import SettingsDropdown from "./Navbar/SettingsDropdown";
import TranslateDropdown from "./Navbar/TranslateDropdown";


const Navbar = () => {

  return (
    <nav className=" flex items-center p-3 pt-5 justify-between component-card rounded-b-lg">
      <Link to={"/"} className="ms-10">
        <Logo  />
      </Link>
      <div className="flex gap-5 me-10">
        <TranslateDropdown />
        <SettingsDropdown/>
      </div>
    </nav>
  )
}

export default Navbar