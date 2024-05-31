import { useEffect, useState } from "react"
import axios from "axios";
import SortControls from "../Components/Shop/SortControls";
import ShopList from "../Components/Shop/ShopList";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar/Navbar";
import { useSearchParams } from "react-router-dom";
import FindShopButton from "../Components/FindShopButton";
import { MdErrorOutline } from "react-icons/md";

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


const FindPage = ({ likeShop, dislikeShop }) => {
  const [shopList, setShopList] = useState();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [params] = useSearchParams();
  const [isSideOpen, setIsSideOpen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const liked = JSON.parse(localStorage.getItem("liked")) || [];
    localStorage.setItem("liked", JSON.stringify(liked));
    getShops("mock.json"); // /shops/shops
  }, [])

  useEffect(() => {
    const name = params.get("search") || "";
    axios.get("mock.json")
      .then(res => res.data)
      .then(data => {
        const filtered = data.filter(shop => shop.name.toLowerCase().includes(name.toLowerCase()));
        setShopList([...filtered]);
      })
  }, [params])

  const updateSidebar = () => {
    setIsSideOpen(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateSidebar);
    return () => window.removeEventListener("resize", updateSidebar);
  });

  const getShops = (url) => {
    setIsLoading(true);
    axios.get(url)
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
    <div className="flex flex-col gap-5 flex-grow overflow-hidden">
      {isSideOpen && window.innerWidth < 768 && (
        <div className="absolute top-0 left-0 bg-black/60 h-screen w-screen" onClick={() => setIsSideOpen(prev => !prev)}></div>
      )}
      <Navbar toggleSidebar={() => setIsSideOpen(prev => !prev)} />
      <div className="flex gap-3 flex-grow overflow-hidden">
        <Sidebar isSideOpen={isSideOpen} />
        <div className="flex flex-col gap-3 flex-1 bg-emerald-50 dark:bg-emerald-950/70 rounded-t-lg px-3 overflow-y-auto overflow-x-hidden ">

          <div className="flex gap-3">
            <SortControls sortShops={sortShops} />
          </div>
          <div className="flex flex-col items-center gap-8 text-slate-800 dark:text-slate-100">

            {shopList?.length === 0 ? (
              <div className="flex flex-col items-center gap-10">
                <MdErrorOutline className="text-black dark:text-slate-100 w-6 h-6" />
                <p className="text-center text-slate-800 dark:text-slate-200 text-[18px]">No shops found.</p>
                <FindShopButton />
              </div>
            ) : (
              <div className="flex flex-col gap-7 w-full">
                <p className="logo-font text-[30px] text-center dark:text-slate-100">Our Shop Selection</p>

                <ShopList shopList={shopList} error={error} isLoading={isLoading} likeShop={likeShop} dislikeShop={dislikeShop} />
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}

export default FindPage