import { useEffect } from "react"
import SortControls from "../Components/Sort/SortControls";
import ShopList from "../Components/Shop/ShopList";
import { useSearchParams } from "react-router-dom";
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
    <div className="flex flex-col gap-5 flex-1 bg-dark ">
      <div className="flex flex-col gap-3 flex-1  main-section bg-dark ">

        <div className="flex flex-col items-center gap-5 bg-gradient-to-r from-black to-95% to-amber-950 py-10 ">
          <p className="text-gradient from-white via-yellow-200 to-orange-200 text-[23px] md:text-[30px]  lg:text-[50px] text-center">{t("title")}</p>
          <p className="text-orange-50 text-center w-[800px] text-[0px]  md:text-[14px] lg:text-[16px]">{t("desc")}</p>
        </div>


        <div className="flex flex-col items-center gap-8">
        <SortControls sortShops={(isAscending) => dispatch(orderShopList(sortList(shopList, isAscending)))} />

          <div className="flex flex-col gap-7 w-full">

            <ShopList shopList={shopList} error={error} isLoading={isLoading} />

          </div>
        </div>
      </div>
    </div>
  )
}

export default FindPage