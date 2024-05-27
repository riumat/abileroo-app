import { useEffect, useState } from "react"
import Searchbar from "../Components/Searchbar";
import axios from "axios";
import SortControls from "../Components/Shop/SortControls";
import ShopList from "../Components/Shop/ShopList";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar/Navbar";

const HomePage = () => {
  const [shopList, setShopList] = useState();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const liked = JSON.parse(localStorage.getItem("liked")) || [];
    localStorage.setItem("liked", JSON.stringify(liked));
    console.log(localStorage.getItem("liked"));
    getShops("mock.json"); // /shops/shops
  }, [])

  const searchByName = (name) => {
    //getShops("mock.json");///shops/shops/?search=name
    axios.get("mock.json")
      .then(res => res.data)
      .then(data => {
        const filtered = data.filter(shop => shop.name.toLowerCase().includes(name.toLowerCase()));
        setShopList([...filtered]);
      })
  }

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
      console.log("asc");
      setShopList(sortShops(shopList, true));
    } else {
      console.log("desc");
      setShopList(sortShops(shopList, false));
    }
  };

  const getShops = async (url) => {
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
      <Navbar />
      <div className="flex gap-3">
        <Sidebar />
        <div className="flex flex-col gap-5 flex-1">

          <div className="flex flex-col lg:flex-row gap-3">
            <Searchbar searchByName={searchByName} />

            <SortControls orderedList={orderedList} />
          </div>
          <ShopList shopList={shopList} error={error} isLoading={isLoading} />
        </div>

      </div>
    </div>
  )
}

export default HomePage