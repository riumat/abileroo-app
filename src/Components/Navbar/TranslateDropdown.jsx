import { MdOutlineTranslate } from "react-icons/md"
import { translateOptions } from "../../utils/constants";
import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";

const TranslateDropdown = ({ isOpen, open }) => {
  const { i18n } = useTranslation();
  return (
    <div className="relative">
      <MdOutlineTranslate className="nav-button" onClick={open} />
      <div className="nav-trans-badge">
        <ReactCountryFlag countryCode={i18n.language.toUpperCase()} style={{ fontSize: "1.6em" }} svg  />
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