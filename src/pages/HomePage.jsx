import { useEffect, useState } from "react"
import axios from "axios";
import SortControls from "../Components/Shop/SortControls";
import ShopList from "../Components/Shop/ShopList";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar/Navbar";
import { useSearchParams } from "react-router-dom";

const HomePage = () => {
  const [shopList, setShopList] = useState();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [params, setParams] = useSearchParams();
  const [isSideOpen, setIsSideOpen] = useState(window.innerWidth > 640);

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

  const orderedList = (isToOrder) => {
    const sortShops = (shops, isAscending) => {
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

    if (isToOrder) {
      setShopList(sortShops(shopList, true));
    } else {
      setShopList(sortShops(shopList, false));
    }
  };

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
  return (

    <div className="flex flex-col gap-5">
      {isSideOpen && window.innerWidth < 640 && (
        <div className="absolute top-0 left-0 bg-black/60 h-screen w-screen" onClick={() => setIsSideOpen(prev => !prev)}>

        </div>
      )}
      <Navbar toggleSidebar={() => setIsSideOpen(prev => !prev)} />
      <div className="flex gap-3">
        <Sidebar isSideOpen={isSideOpen} />
        <div className="flex flex-col gap-3 flex-1">

          <div className="flex  gap-3">

            <SortControls orderedList={orderedList} />
          </div>
          <ShopList shopList={shopList} error={error} isLoading={isLoading} />
        </div>

      </div>
    </div>
  )
}

export default HomePage