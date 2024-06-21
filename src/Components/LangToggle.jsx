import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next"
import ReactSwitch from "react-switch";

const LangToggle = () => {
  const { i18n } = useTranslation();

  const langHandle = () => {
    const lang = i18n.language === "us" ? "it" : "us";
    i18n.changeLanguage(lang);
  }

  return (
    <div className="flex items-center gap-1" >
      <ReactCountryFlag className={`rounded-lg text-[1.1rem] ${i18n.language !== "us" ? "opacity-40" : ""}`} countryCode="us" svg />

      <ReactSwitch
        onChange={langHandle}
        checked={i18n.language !== "us"}
        height={15}
        width={30}
        offColor="#ffda96"
        onColor="#ffda96"
        checkedIcon={false}
        onHandleColor="#4d3406"
        offHandleColor="#4d3406"
        uncheckedIcon={false}
      />

      <ReactCountryFlag className={`rounded-lg text-[1.1rem] ${i18n.language === "us" ? "opacity-40" : ""}`} countryCode="it" svg />


    </div>
  )
}

export default LangToggle