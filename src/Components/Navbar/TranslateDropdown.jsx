import { translateOptions } from "../../utils/constants";
import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { forwardRef } from "react";


const TranslateDropdown = forwardRef(function TranslateDropdown({ isOpen, open }, ref) {
  const { i18n } = useTranslation();
  return (
    <div className="relative cursor-pointer bg-light" onClick={open} ref={ref}>
      <div className="flex gap-1 items-center text-orange-900 dark:text-orange-50">
        <p className="text-[14px] ">{i18n.language === "us" ? "English" : "Italiano"}</p>
        <MdOutlineArrowDropDownCircle />
      </div>
      {isOpen && (
        <div className="nav-dropdown bg-light flex flex-col ">

          {translateOptions.map((option, i) => (
            <div key={`translatedropdown-${i}`} className="px-2 py-3 cursor-pointer w-full rounded-md bg-light active:scale-90 duration-100" >
              <div onClick={() => i18n.changeLanguage(option.value)} className="flex items-center gap-3 justify-center" >
                <ReactCountryFlag countryCode={option.country} style={{ fontSize: "1.7em" }} svg />
                <p>{option.lang}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
})

export default TranslateDropdown