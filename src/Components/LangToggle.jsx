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
        offColor="#a7f3d0"
        onColor="#a7f3d0"
        checkedIcon={false}
        onHandleColor="#064e3b"
        offHandleColor="#064e3b"
        uncheckedIcon={false}
      />

      <ReactCountryFlag className={`rounded-lg text-[1.1rem] ${i18n.language === "us" ? "opacity-40" : ""}`} countryCode="it" svg />


    </div>
  )
}

export default LangToggle