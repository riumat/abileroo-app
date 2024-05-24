import { useEffect, useState } from "react"
import Searchbar from "../Components/Searchbar";
import axios from "axios";
import SortControls from "../Components/Shop/SortControls";
import ShopList from "../Components/Shop/ShopList";
import Sidebar from "../Components/Sidebar";
import Cart from "../Components/Cart/Cart";
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
    getShops("mockName.json"); ///shops/shops/?search=name
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
        <div className="hidden lg:visible">
          <Cart cart={new Array()} />
        </div>
      </div>
    </div>
  )
}

export default HomePage