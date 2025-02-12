import { useEffect } from "react"
import SortControls from "../Components/Sort/SortControls";
import ShopList from "../Components/Shop/ShopList";
import FindShopButton from "../Components/FindShopButton";
import { MdErrorOutline } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { sortList } from "../utils/functions";
import { orderFavorites, resolveFavorites } from "../redux/favorites/favoriteSlice";


const FavoritesPage = () => {
  const { list, isLoading, error, ids } = useSelector(state => state.favorites);
  const { t } = useTranslation("translation", { keyPrefix: "favorite-page" })
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resolveFavorites());
  }, [ids])

  return (
    <div className="flex flex-col gap-5 flex-1 bg-dark rounded-t-lg overflow-auto">
      <div className="flex flex-col gap-3 flex-1 bg-dark rounded-t-lg  overflow-y-auto overflow-x-hidden ">

        <div className="flex gap-3 justify-between">
          <SortControls sortShops={(isAscending) => dispatch(orderFavorites(sortList(list, isAscending)))} />
        </div>
        {list?.length === 0 && !isLoading ? (
          <div className="flex flex-col items-center gap-10 pt-8">
            <MdErrorOutline className="text-black dark:text-slate-100 w-6 h-6" />
            <p className="text-center text-slate-800 dark:text-slate-200 text-[18px]">{t("empty")}</p>
            <FindShopButton />
          </div>
        ) : (
          <div className="flex flex-col gap-7 w-full">
            <div className="flex flex-col items-center gap-5 bg-gradient-to-r from-black to-95% to-amber-950 py-10">
          <p className="text-gradient from-white via-yellow-200 to-orange-200 text-[50px] text-center">{t("title")}</p>
        </div>

            <ShopList shopList={list} isLoading={isLoading} error={error} />
          </div>
        )}
      </div>
    </div>
  )
}

export default FavoritesPage