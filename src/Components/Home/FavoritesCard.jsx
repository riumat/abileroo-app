import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { axiosBase } from "../../utils/axios.config";

const FavoritesCard = () => {
  const favorites = useSelector(state=>state.favorites.list);
  const [shopList, setShopList] = useState([]);

  useEffect(() => {
    fetchShops();
  }, [favorites])

  const fetchShops = async () => {
    const promises = await Promise.all(favorites.map(shopId => axiosBase.get(`shop/shop/${shopId}`))) //shopUrls[shopId - 1] `shop/shop/${shopId}`
    const data = await Promise.all(promises.map(res => res.data));
    setShopList([...data].map(shop => ({ ...shop, image: process.env.REACT_APP_BASE_URL + shop.image })));
  }


  return (
    <div className="p-3 bg-white shadow rounded-b-lg rounded-tr-lg  text-[14px] w-full dark:bg-slate-950 dark:text-slate-100">
      {favorites.length === 0 ? (
        <p className="text-center text-slate-700 dark:text-slate-100">Empty. Find shops and give them a heart!</p>
      ) : (
        <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-y-10 justify-items-center dark:bg-slate-950">
          {shopList.map((shop, i) => (

            <div key={`favorite-card-${i}`} className="flex flex-col items-center gap-2">
              <img src={shop?.image} alt="" className="w-24 h-24 rounded-lg object-contain" />
              <p className="text-[13px]">{shop?.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default FavoritesCard