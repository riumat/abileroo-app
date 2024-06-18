import { useEffect, useState } from "react"
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/favorites/favoriteSlice";

const Info = ({ description, address, id }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const favorites = useSelector(state => state.favorites.list);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsFavorite(favorites.includes(id));
  }, [favorites])

  return (
    <div className="rounded-lg flex gap-y-7 lg:flex justify-between w-full py-5 bg-light">

      <div className="border-r border-slate-400  items-center flex justify-center flex-1">
        {isFavorite ? (
          <FaHeart className="w-7 h-7 cursor-pointer" onClick={() => dispatch(removeFavorite(id))} />
        ) : (
          <FaRegHeart className="w-7 h-7 cursor-pointer" onClick={() => dispatch(addFavorite(id))} />
        )
        }
      </div>

      <div className="border-r border-slate-400  items-center flex flex-col gap-2 justify-center flex-1">
        <p className="text-[13px] lg:text-[15px]">{description}</p>
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