import { translateOptions } from "../../utils/constants";
import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";


const TranslateDropdown = ({ isOpen, open }) => {
  const { i18n } = useTranslation();
  return (
    <div className="relative cursor-pointer" onClick={open}>
      <div className="flex gap-1 items-center text-orange-900 dark:text-orange-50">
        <p className="text-[14px] ">{i18n.language === "us" ? "English" : "Italiano"}</p>
        <MdOutlineArrowDropDownCircle />
      </div>
      {isOpen && (
        <div className="nav-dropdown">

          {translateOptions.map((option, i) => (
            <div key={`translatedropdown-${i}`} className="p-4 cursor-pointer hover:bg-slate-300 w-full rounded-md" >
              <div onClick={() => i18n.changeLanguage(option.value)} className="flex items-center gap-2" >
                <ReactCountryFlag countryCode={option.country} style={{ fontSize: "1.7em" }} svg />
                <p>{option.lang}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default TranslateDropdown