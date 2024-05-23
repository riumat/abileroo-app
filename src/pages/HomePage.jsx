import { useEffect, useState } from "react"
import Searchbar from "../Components/Searchbar";
import { axiosBase } from "../constants";
import axios from "axios";
import SortControls from "../Components/Shop/SortControls";
import ShopList from "../Components/Shop/ShopList";



const HomePage = () => {
  const [shopList, setShopList] = useState();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("liked") === "") {
      const liked = [];
      localStorage.setItem("liked", JSON.stringify(liked));
    }
    console.log(localStorage.getItem("liked"));
    getShops("mock.json"); // /shops/shops
  }, [])

  const searchByName = (name) => {
    getShops("mockName.json"); ///shops/shops/?search=name
  }

  const orderedList = (isToOrder) => {
    if (isToOrder) {
      getShops("mock.json"); ///shops/shops/?ordering=name
    } else {
      getShops("mock.json"); ///shops/shops/?ordering=-name
    }
  }



  const getShops = (url) => {
    setIsLoading(true);
    axios.get(url)
      .then((res) => {
        setShopList(res.data)
        setIsLoading(false);
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      })

  }



  return (
    <div className="flex flex-col gap-5">

      <div className="flex gap-10">
        <Searchbar searchByName={searchByName} />

        <SortControls orderedList={orderedList} />
      </div>
      <ShopList shopList={shopList} error={error} isLoading={isLoading} />

    </div>
  )
}

export default HomePage