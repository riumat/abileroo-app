import { IoMdSettings } from "react-icons/io";
import { settingsOptions } from "../../constants";
import { Link } from "react-router-dom";

const SettingsDropdown = ({ isOpen, open, logHandle }) => {
  const user = JSON.parse(localStorage.getItem("credentials")) || "";

 

  return (
    <div>
      <IoMdSettings className="nav-button" onClick={open} />

      {isOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none p-2 text-[14px]"
        >
          <p className="text-[15px] px-3 py-2 border-b border-slate-300">Welcome back <span className="font-semibold">{user.username}</span>!</p>
          {settingsOptions.map((option, i) => (
            <div key={`optiondropdown-${i}`} className="p-3 cursor-pointer hover:bg-slate-300 w-full rounded-md" >
              <Link to={option.path} >{option.name} </Link>
            </div>
          ))}
          <p className="p-3 cursor-pointer hover:bg-slate-300 w-full rounded-md " onClick={()=>logHandle(false)}>Logout</p>
        </div>
      )}
    </div>
  )
}

export default SettingsDropdown