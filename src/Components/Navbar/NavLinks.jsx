import { useTranslation } from "react-i18next"
import LinkButton from "./LinkButton"

const NavLinks = () => {
  const {t}=useTranslation("translation",{keyPrefix:"navbar"})
  return (
    <div className="flex items-center gap-3 xl:gap-5">
      <LinkButton path={"/home"} text={t("home")} />
      <LinkButton path={"/find"} text={t("shops")} />

      <LinkButton path={"/products"} text={t("products")} />
      <LinkButton path={"/Orders"} text={t("orders")} />
    </div>
  )
}

export default NavLinks