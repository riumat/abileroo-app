import { useEffect } from "react"
import SortControls from "../Components/Sort/SortControls";
import ShopList from "../Components/Shop/ShopList";
import { useSearchParams } from "react-router-dom";
import PathViewer from "../Components/Navbar/PathViewer";
import { useTranslation } from "react-i18next";
import { sortList } from "../utils/functions";
import { useDispatch, useSelector } from "react-redux";
import { getShopList, orderShopList } from "../redux/shop/shopSlice";

const FindPage = () => {
  const { shopList, error, isLoading } = useSelector(state => state.shop);
  const [params] = useSearchParams();
  const { t } = useTranslation("translation", { keyPrefix: "find-page" })
  const dispatch = useDispatch();

  useEffect(() => {
    const name = params.get("search") ?? "";
    dispatch(getShopList(name));
  }, [params])

  return (
    <div className="flex flex-col gap-5 flex-1 bg-dark rounded-t-lg overflow-auto">
      <div className="flex flex-col gap-3 flex-1 rounded-t-lg px-3 main-section bg-dark ">
        <div className="flex gap-3 justify-between">
          <SortControls sortShops={(isAscending) => dispatch(orderShopList(sortList(shopList, isAscending)))} />
          <PathViewer />
        </div>

        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col gap-7 w-full">

            <p className="logo-font text-[30px] text-center dark:text-slate-100">{t("title")}</p>
            <ShopList shopList={shopList} error={error} isLoading={isLoading} />

          </div>
        </div>
      </div>
    </div>
  )
}

export default FindPage