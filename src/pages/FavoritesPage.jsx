import { useContext, useEffect, useState } from "react"
import SortControls from "../Components/Sort/SortControls";
import ShopList from "../Components/Shop/ShopList";
import { FavoriteCtx } from "../App";
import FindShopButton from "../Components/FindShopButton";
import { MdErrorOutline } from "react-icons/md";
import { axiosBase, shopUrls } from "../utils/constants";
import PathViewer from "../Components/Navbar/PathViewer";
import { usePath, useSidebar } from "../utils/hooks";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar";

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


const FavoritesPage = ({ likeShop, dislikeShop, logHandle }) => {
  const path = usePath();
  const [isSideOpen, setIsSideOpen] = useSidebar();
  const favorites = useContext(FavoriteCtx);
  const [shopList, setShopList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

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

  const sortShops = (isAscending) => {
    setShopList(sortList(shopList, isAscending));
  };

  return (
    <>
      <div className="flex flex-col gap-5 overflow-hidden h-full">
        {isSideOpen && window.innerWidth < 768 && (
          <div className="bg-mobile" onClick={() => setIsSideOpen(prev => !prev)}></div>
        )}
        <Navbar toggleSidebar={() => setIsSideOpen(prev => !prev)} logHandle={logHandle} />
        <div className="flex gap-3 overflow-hidden h-full">
          <Sidebar isSideOpen={isSideOpen} logHandle={logHandle} />
          <div className="flex flex-col gap-5 flex-1 bg-dark rounded-t-lg overflow-auto">


            <div className="flex flex-col gap-3 flex-1 bg-dark rounded-t-lg px-3 overflow-y-auto overflow-x-hidden ">

              <div className="flex gap-3 justify-between">
                <SortControls sortShops={sortShops} />
                <PathViewer path={path} />
              </div>
              {shopList?.length === 0 && !isLoading ? (
                <div className="flex flex-col items-center gap-10">
                  <MdErrorOutline className="text-black dark:text-slate-100 w-6 h-6" />
                  <p className="text-center text-slate-800 dark:text-slate-200 text-[18px]">You have not selected any shops yet!</p>
                  <FindShopButton />
                </div>
              ) : (
                <div className="flex flex-col gap-7 w-full">
                  <p className="logo-font text-[30px] text-center dark:text-slate-100">Your Favorite Shops</p>

                  <ShopList shopList={shopList} isLoading={isLoading} error={error} likeShop={likeShop} dislikeShop={dislikeShop} />
                </div>
              )}
            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default FavoritesPage