import { useEffect, useState } from "react"
import SortControls from "../Components/Sort/SortControls";
import ShopList from "../Components/Shop/ShopList";
import FindShopButton from "../Components/FindShopButton";
import { MdErrorOutline } from "react-icons/md";
import PathViewer from "../Components/Navbar/PathViewer";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { sortList } from "../utils/functions";
import { axiosBase } from "../utils/axios.config";


const FavoritesPage = () => {
  const favorites = useSelector(state => state.favorites.list);
  const [shopList, setShopList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { t } = useTranslation("translation", { keyPrefix: "favorite-page" })

  useEffect(() => {
    fetchShops();
  }, [favorites])

  const fetchShops = async () => {
    try {
      setIsLoading(true);
      const promises = await Promise.all(favorites.map(shopId => axiosBase.get(`shop/shop/${shopId}`))) //`shop/shop/${shopId}`  shopUrls[shopId - 1]
      const data = await Promise.all(promises.map(res => res.data));
      setShopList([...data].map(shop => ({ ...shop, image: process.env.REACT_APP_BASE_URL + shop.image })));
      setIsLoading(false)
    } catch (error) {
      setError(true);
      console.log(error)
    }
  }

  return (
    <div className="flex flex-col gap-5 flex-1 bg-dark rounded-t-lg overflow-auto">
      <div className="flex flex-col gap-3 flex-1 bg-dark rounded-t-lg px-3 overflow-y-auto overflow-x-hidden ">

        <div className="flex gap-3 justify-between">
          <SortControls sortShops={(isAscending) => setShopList(sortList(shopList, isAscending))} />
          <PathViewer />
        </div>
        {shopList?.length === 0 && !isLoading ? (
          <div className="flex flex-col items-center gap-10 pt-8">
            <MdErrorOutline className="text-black dark:text-slate-100 w-6 h-6" />
            <p className="text-center text-slate-800 dark:text-slate-200 text-[18px]">{t("empty")}</p>
            <FindShopButton />
          </div>
        ) : (
          <div className="flex flex-col gap-7 w-full">
            <p className="logo-font text-[30px] text-center dark:text-slate-100">{t("title")}</p>

            <ShopList shopList={shopList} isLoading={isLoading} error={error} />
          </div>
        )}
      </div>
    </div>
  )
}

export default FavoritesPage