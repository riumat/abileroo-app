import { useEffect, useState } from "react"
import SortControls from "../Components/Sort/SortControls";
import ShopList from "../Components/Shop/ShopList";
import { useSearchParams } from "react-router-dom";
import FindShopButton from "../Components/FindShopButton";
import { MdErrorOutline } from "react-icons/md";
import { axiosBase } from "../utils/constants";
import PathViewer from "../Components/Navbar/PathViewer";
import { usePath, useSidebar } from "../utils/hooks";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar";
import { useTranslation } from "react-i18next";

const sortList = (shops, isAscending) => {
  return shops.slice().sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (isAscending) {
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
    } else {
      if (nameA > nameB) return -1;
      if (nameA < nameB) return 1;
    }
    return 0;
  });
};


const FindPage = () => {
  const path = usePath();
  const [isSideOpen, setIsSideOpen] = useSidebar();
  const [shopList, setShopList] = useState();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [params] = useSearchParams();
  const { t } = useTranslation("translation", { keyPrefix: "find-page" })

  useEffect(() => {
    const liked = JSON.parse(localStorage.getItem("liked")) ?? [];
    localStorage.setItem("liked", JSON.stringify(liked));
    getShops("shop/shops/"); // shop/shops/ 30523e18-8014-44af-81af-59ba12e43c08
  }, [])

  useEffect(() => {
    setIsLoading(true);
    const name = params.get("search") ?? "";
    axiosBase.get(`shop/shops/?search=${name}`) //shop/shops/?search=${name} //30523e18-8014-44af-81af-59ba12e43c08
      .then(res => res.data)
      .then(data => {
        const filtered = data.filter(shop => shop.name.toLowerCase().includes(name.toLowerCase()));
        setShopList([...filtered]);
        setIsLoading(false);
      })
      .catch(error => {
        setError(true);
        console.log(error);
      })
  }, [params])

  const getShops = (url) => {
    setIsLoading(true);
    axiosBase.get(url)
      .then(res => {
        setShopList(res.data)
        setIsLoading(false);
      })
      .catch(error => {
        setError(true);
        console.log(error);
      })
  }
  const sortShops = (isAscending) => {

    setShopList(sortList(shopList, isAscending));
  };

  return (
    <>
      <div className="flex flex-col gap-5 overflow-hidden h-full">
        {isSideOpen && window.innerWidth < 768 && (
          <div className="bg-mobile" onClick={() => setIsSideOpen(prev => !prev)}></div>
        )}
        <Navbar toggleSidebar={() => setIsSideOpen(prev => !prev)} />
        <div className="flex gap-3 overflow-hidden h-full">
          <Sidebar isSideOpen={isSideOpen}  />
          <div className="flex flex-col gap-5 flex-1 bg-dark rounded-t-lg overflow-auto">



            <div className="flex flex-col gap-3 flex-1 rounded-t-lg px-3 main-section bg-dark ">

              <div className="flex gap-3 justify-between">
                <SortControls sortShops={sortShops} />
                <PathViewer path={path} />
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
        </div>
      </div>
    </>
  )
}

export default FindPage