import { useEffect, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next"

const LangToggle = () => {
  const { i18n } = useTranslation();

  const langHandle = () => {
    const lang = i18n.language === "us" ? "it" : "us";
    i18n.changeLanguage(lang);
  }

  return (
    <div className="flex items-center gap-1">
      <ReactCountryFlag className={`rounded-lg ${i18n.language!=="us" ? "opacity-40" : ""}`} countryCode="us" style={{ fontSize: "1.3em" }} svg />

      <input
        className="lang-toggle after:transition-[transform_0.2s]"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
        onClick={langHandle}
      />

      <ReactCountryFlag className={`rounded-lg ${i18n.language==="us" ? "opacity-40" : ""}`} countryCode="it" style={{ fontSize: "1.3em" }} svg />


    </div>
  )
}

export default LangToggle