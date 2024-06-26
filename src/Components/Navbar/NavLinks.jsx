import { useTranslation } from "react-i18next"
import LinkButton from "./LinkButton"
import { GiHamburgerMenu } from "react-icons/gi";
import { useComponentVisible } from "../../utils/hooks";
import { motion } from "framer-motion";
import { dropdownsAnimation } from "../../utils/constants";

const NavLinks = ({ isTablet }) => {
  const { t } = useTranslation("translation", { keyPrefix: "navbar" })
  const { ref, isVisible, setIsVisible } = useComponentVisible(false);

  if (isTablet) {
    return (
      <div onClick={() => setIsVisible(prev => !prev)} ref={ref} className="relative" >
        <GiHamburgerMenu className="nav-button" />
        {isVisible && (
          <motion.div className="nav-dropdown bg-light flex flex-col py-1" variants={dropdownsAnimation} initial="initial" animate="animate"  >
            <LinkButton path={"/home"} text={t("home")} />
            <LinkButton path={"/find"} text={t("shops")} />

            <LinkButton path={"/products"} text={t("products")} />
            <LinkButton path={"/Orders"} text={t("orders")} />

          </motion.div>
        )}
      </div>

    )
  }
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