import { useContext, useEffect, useState } from "react"
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai"
import { FavoriteCtx } from "../../App";

const ShopCard = ({ shop, likeShop, dislikeShop }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const favorites = useContext(FavoriteCtx);

  useEffect(() => {
    setIsFavorite(favorites.includes(shop?.id));
  }, [favorites])

  const dislikeHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dislikeShop(shop?.id)

  }

  const likeHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    likeShop(shop?.id);
  }

  return (
    <div className="flex  flex-col lg:flex-row justify-center pb-2 lg:py-0 lg:justify-start items-center gap-5 shadow rounded-lg md:text-[0px] hover:scale-[1.03] hover:z-50 transition-transform text-emerald-900 bg-white dark:bg-slate-950 dark:text-slate-100">
      <div className=" w-[200px] h-[200px] md:w-40 md:h-40 overflow-hidden rounded-t-lg lg:rounded-s-lg lg:rounded-tr-none flex justify-center items-center">
        <img className="" src={shop?.image} alt="" loading="lazy" />
      </div>
      <div className="flex flex-col gap-3 lg:gap-2 items-center lg:items-start ">
        <div className="lg:px-5">
          <p className="text-[20px] lg:text-[25px] ">{shop?.name}</p>
        </div>
        <div className="lg:px-5 text-emerald-800 dark:text-slate-200 flex flex-col  justify-center lg:text-[14px] ">
          <p className="text-[0px] lg:text-[14px] ">{shop?.address}</p>
          <div className="flex gap-2 items-center">
            <p className="text-[12px] lg:text-[14px] ">{shop?.description}</p>
            {isFavorite ? (
              <AiOutlineDislike className="w-6 h-6 p-1 active:scale-50 duration-500" onClick={dislikeHandler} />
            ) : (
              <AiOutlineLike className="w-6 h-6 p-1 active:scale-50 duration-500" onClick={likeHandler} />
            )}
          </div>
        </div>
      </div>

    </div>
  )
}

export default ShopCard