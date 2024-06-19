import { useEffect, useState } from "react"
import SortControls from "../Components/Sort/SortControls";
import ShopList from "../Components/Shop/ShopList";
import { useSearchParams } from "react-router-dom";
import FindShopButton from "../Components/FindShopButton";
import { MdErrorOutline } from "react-icons/md";
import PathViewer from "../Components/Navbar/PathViewer";
import { useTranslation } from "react-i18next";
import { sortList } from "../utils/functions";
import { axiosBase } from "../utils/axios.config";

const FindPage = () => {
  const [shopList, setShopList] = useState();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [params] = useSearchParams();
  const { t } = useTranslation("translation", { keyPrefix: "find-page" })

  useEffect(() => {
    setIsLoading(true);
    const name = params.get("search") ?? "";
    axiosBase.get(`shop/shops/?search=${name}`) //shop/shops/?search=${name} //30523e18-8014-44af-81af-59ba12e43c08
      .then(res => {
        const filtered = res.data.filter(shop => shop.name.toLowerCase().includes(name.toLowerCase()));
        setShopList([...filtered]);
        setIsLoading(false);
      })
      .catch(error => {
        setError(true);
        console.log(error);
      })
  }, [params])

  return (
    <div className="flex flex-col gap-5 flex-1 bg-dark rounded-t-lg overflow-auto">
      <div className="flex flex-col gap-3 flex-1 rounded-t-lg px-3 main-section bg-dark ">

        <div className="flex gap-3 justify-between">
          <SortControls sortShops={(isAscending) => setShopList(sortList(shopList, isAscending))} />
          <PathViewer />
        </div>
        <div className="flex flex-col items-center gap-8">

          {shopList?.length === 0 ? (
            <div className="flex flex-col items-center gap-10">
              <MdErrorOutline className="text-black dark:text-slate-100 w-6 h-6" />
              <p className="text-center text-slate-800 dark:text-slate-200 text-[18px]">No shops found.</p>
              <FindShopButton />
            </div>
          ) : (
            <div className="flex flex-col gap-7 w-full">
              <p className="logo-font text-[30px] text-center dark:text-slate-100">{t("title")}</p>

              <ShopList shopList={shopList} error={error} isLoading={isLoading} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default FindPage