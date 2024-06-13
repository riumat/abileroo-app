import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const FindShopButton = () => {
  const {t}=useTranslation("translation");
  return (
    <Link to={"/find"} className="p-2 rounded-lg bg-emerald-900 text-slate-100 text-[14px] font-bold">{t("browsing-button")}</Link>
  )
}

export default FindShopButton