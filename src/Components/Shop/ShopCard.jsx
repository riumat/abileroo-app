import { useEffect, useState } from "react"
import { FaHeart, FaRegHeart } from "react-icons/fa6";

import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/favorites/favoriteSlice";

const ShopCard = ({ shop }) => {
  const [isFavorite, setIsFavorite] = useState();
  const favorites = useSelector(state => state.favorites.list);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsFavorite(favorites.includes(shop?.id));
  }, [favorites, shop?.id])

  const dislikeHandler = (e) => {
    e.preventDefault();
    dispatch(removeFavorite({ id: shop?.id }))
  }

  const likeHandler = (e) => {
    e.preventDefault();
    dispatch(addFavorite({ id: shop?.id }))
  }

  return (
    <div className="shop-card bg-light w-[256px]">

      <div className=" w-[200px] h-[200px] md:w-[256px] md:h-[256px] overflow-hidden rounded-xl flex justify-center ">
        <img className=" w-full h-full" src={shop?.image} alt="" loading="lazy" />
      </div>

      <div className="flex flex-col gap-3 lg:gap-2">

        <div className="flex justify-between">
          <p className="text-[20px] lg:text-[17px] font-bold  text-orange-950">{shop?.name}</p>
          {isFavorite ? (
            <FaHeart className="w-7 h-7 p-1 active:scale-50 duration-500" onClick={dislikeHandler} />
          ) : (
            <FaRegHeart className="w-7 h-7 p-1 active:scale-50 duration-500" onClick={likeHandler} />
          )}
        </div>

        <div className=" text-orange-900 dark:text-slate-200 flex flex-col lg:text-[14px] ">

          <p className="text-[12px] lg:text-[12px] line-clamp-1 ">{shop?.description}</p>
          <p className="text-[0px] lg:text-[12px] line-clamp-1 ">{shop?.address}</p>


        </div>
      </div>

    </div>
  )
}

export default ShopCard