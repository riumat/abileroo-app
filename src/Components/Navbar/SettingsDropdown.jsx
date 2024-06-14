import { IoMdSettings } from "react-icons/io";
import { settingsOptions } from "../../utils/constants";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const SettingsDropdown = ({ isOpen, open, logHandle }) => {
  const localname = JSON.parse(localStorage.getItem("credentials"))?.username ?? "";
  const username = useSelector(state => state.user.username) ?? localname;
  const { t } = useTranslation("translation", { keyPrefix: "settings" })

  return (
    <div>
      <IoMdSettings className="nav-button" onClick={open} />

      {isOpen && (
        <div className="nav-dropdown" >
          <p className="text-[15px] px-3 py-2 border-b border-slate-300">{t("greet")} <span className="font-semibold">{username}</span>!</p>
          {settingsOptions.map((option, i) => (
            <div key={`optiondropdown-${i}`} className="p-3 cursor-pointer hover:bg-slate-300 w-full rounded-md" >
              <Link to={option.path} >{t(`${option.name}`)} </Link>
            </div>
          ))}
          <p className="p-3 cursor-pointer hover:bg-slate-300 w-full rounded-md " onClick={() => logHandle(false)}>{t("logout")}</p>
        </div>
      )}
    </div>
  )
}

export default SettingsDropdown