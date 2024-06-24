import { useTranslation } from "react-i18next"

const SortControls = ({ sortShops }) => {
  const { t } = useTranslation("translation", { keyPrefix: "sort" })
  return (
    <form className="flex gap-3 items-center rounded-xl p-1 border-2 bg-light">
      <div className="flex p-1 cursor-default rounded-lg items-center gap-1" >
        <input type="radio" name="sort-shop" id="" className="cursor-pointer" onClick={() => sortShops(true)} />
        <p className="text-[13px] ">{t("alf")}</p>
      </div>
      <div className="flex p-1 cursor-default rounded-lg items-center gap-1" >
        <input type="radio" name="sort-shop" id="" className="cursor-pointer" onClick={() => sortShops(false)} />
        <p className="text-[13px] ">{t("inv")}</p>
      </div>
    </form>
  )
}

export default SortControls