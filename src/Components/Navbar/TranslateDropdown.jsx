import { dropdownsAnimation, translateOptions } from "../../utils/constants";
import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { useComponentVisible } from "../../utils/hooks";
import { motion } from "framer-motion";

const TranslateDropdown = () => {
  const { i18n } = useTranslation();
  const { ref, isVisible, setIsVisible } = useComponentVisible(false);

  return (
    <div className="relative cursor-pointer bg-light" onClick={() => setIsVisible(prev => !prev)} ref={ref}>
      <div className="flex flex-col sm:flex-row gap-0 sm:gap-1 items-center text-orange-900 dark:text-orange-50">
        <p className=" text-[10px] sm:text-[14px] ">{i18n.language === "us" ? "English" : "Italiano"}</p>
        <MdOutlineArrowDropDownCircle />
      </div>
      {isVisible && (
        <motion.div className="nav-dropdown bg-light flex flex-col " variants={dropdownsAnimation} initial="initial" animate="animate" >

          {translateOptions.map((option, i) => (
            <div key={`translatedropdown-${i}`} className="px-2 py-3 cursor-pointer w-full rounded-md bg-light active:scale-90 duration-100 hover:bg-orange-950/10" >
              <div onClick={() => i18n.changeLanguage(option.value)} className="flex items-center gap-3 justify-center" >
                <ReactCountryFlag countryCode={option.country} style={{ fontSize: "1.7em" }} svg />
                <p>{option.lang}</p>
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  )
}

export default TranslateDropdown