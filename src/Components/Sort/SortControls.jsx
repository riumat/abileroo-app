import { useTranslation } from "react-i18next"

const SortControls = ({ sortShops }) => {
  const { t } = useTranslation("translation", { keyPrefix: "sort" })
  return (
    <form className="flex gap-3 items-center  dark:bg-slate-950 dark:text-slate-100 rounded-xl p-1 border-2 border-orange-900/50">
      <div className="flex p-1 cursor-pointer hover:bg-slate-200 rounded-lg items-center gap-1" >
        <input type="radio" name="sort-shop" id="" onClick={() => sortShops(true)} className="" />
        <p className="text-[13px] text-orange-900">{t("alf")}</p>
      </div>
      <div className="flex p-1 cursor-pointer hover:bg-slate-200 rounded-lg items-center gap-1" >
        <input type="radio" name="sort-shop" id="" onClick={() => sortShops(false)} />
        <p className="text-[13px] text-orange-900">{t("inv")}</p>
      </div>
    </form>
  )
}

export default SortControls