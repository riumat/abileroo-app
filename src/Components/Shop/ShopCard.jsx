import { useContext, useEffect, useState } from "react"
import { FaHeart , FaRegHeart} from "react-icons/fa6";

import { FavoriteCtx } from "../../App";

const ShopCard = ({ shop, likeShop, dislikeShop }) => {
  const [isFavorite, setIsFavorite] = useState();
  const favorites = useContext(FavoriteCtx);

  useEffect(() => {
    setIsFavorite(favorites.includes(shop?.id));
  }, [favorites,shop?.id])

  const dislikeHandler = (e) => {
    e.preventDefault();
    dislikeShop(shop?.id)
  }

  const likeHandler = (e) => {
    e.preventDefault();
    likeShop(shop?.id);
  }

  return (
    <div className="shop-card bg-light">
      <div className=" w-[200px] h-[200px] md:w-40 md:h-40 overflow-hidden rounded-t-lg lg:rounded-s-lg lg:rounded-tr-none flex justify-center items-center ">
        <img className=" w-full h-full" src={shop?.image} alt="" loading="lazy" />
      </div>
      <div className="flex flex-col gap-3 lg:gap-2 items-center lg:items-start ">
        <div className="lg:px-5">
          <p className="text-[20px] lg:text-[25px] ">{shop?.name}</p>
        </div>
        <div className="lg:px-5 text-emerald-800 dark:text-slate-200 flex flex-col  justify-center lg:text-[14px] ">
          <p className="text-[0px] lg:text-[14px] ">{shop?.address}</p>
          <div className="flex flex-col lg:flex-row gap-2 items-center">
            <p className="text-[12px] lg:text-[14px] ">{shop?.description}</p>
            {isFavorite ? (
              <FaHeart className="w-6 h-6 p-1 active:scale-50 duration-500" onClick={dislikeHandler} />
            ) : (
              <FaRegHeart className="w-6 h-6 p-1 active:scale-50 duration-500" onClick={likeHandler} />
            )}
          </div>
        </div>
      </div>

    </div>
  )
}

export default ShopCard