import { useContext, useEffect, useState } from "react"
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai"
import { FaHeart , FaRegHeart} from "react-icons/fa6";

import { FaStar } from "react-icons/fa"
import { FavoriteCtx } from "../../App"

const Info = ({ likeShop, dislikeShop, rating, description, address, id }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const favorites = useContext(FavoriteCtx);

  useEffect(() => {
    setIsFavorite(favorites.includes(id));
  }, [favorites])

  return (
    <div className="component-card shadow rounded-lg grid grid-cols-2 gap-y-7 lg:flex justify-between w-full py-5  text-emerald-800 bg-white dark:bg-slate-950 dark:text-slate-100">

      <div className="border-r border-slate-400  items-center flex justify-center flex-1">
        {isFavorite ? (
          <FaHeart className="w-7 h-7 cursor-pointer" onClick={() => dislikeShop(id)} />
        ) : (
          <FaRegHeart className="w-7 h-7 cursor-pointer" onClick={() => likeShop(id)} />
        )
        }
      </div>

      <div className="lg:border-r border-slate-400  flex flex-col items-center gap-2  justify-center flex-1">
        <p className="text-[0px] lg:text-[14px] text-emerald-700 dark:text-emerald-200">Rated by other users</p>
        <div className="flex">
          {[...Array(rating)].map((star, i) => (
            <FaStar key={`star-${i}`} />
          ))
          }
        </div>
      </div>

      <div className="border-r border-slate-400  items-center flex flex-col gap-2 justify-center flex-1">
        <p className="text-[14px] text-emerald-700 dark:text-emerald-200">Type</p>
        <p>{description}</p>
      </div>

      <div className="items-center flex justify-center gap-2  flex-1">
        <div className="flex flex-col items-center ">
          {address.map((el, i) => (
            <p key={`address-key-${i}`} className="text-[13px] text-center">{el}</p>
          ))}</div>
      </div>

    </div>
  )
}

export default Info