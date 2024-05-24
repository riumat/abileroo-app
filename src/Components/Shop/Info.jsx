import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai"
import { FaStar } from "react-icons/fa"

const Info = ({ isLiked, likeShop, dislikeShop, rating, description, address,id }) => {
  return (
    <div className="component-card rounded-lg flex justify-between w-full py-5  text-slate-700">
      <div className="border-r border-slate-400  items-center flex justify-center flex-1">
        {isLiked ? (
          <AiOutlineDislike className="w-7 h-7 cursor-pointer" onClick={() => dislikeShop(id)} />
        ) : (
          <AiOutlineLike className="w-7 h-7 cursor-pointer" onClick={() => likeShop(id)} />
        )
        }
      </div>

      <div className="border-r border-slate-400  flex flex-col items-center gap-2  justify-center flex-1">
        <p className="text-[14px] text-slate-500">Rate by other users</p>
        <div className="flex">
          {[...Array(rating)].map((star, i) => (
            <FaStar key={`star-${i}`} />
          ))
          }
        </div>
      </div>

      <div className="border-r border-slate-400  items-center flex flex-col gap-2 justify-center flex-1">
        <p className="text-[14px] text-slate-500">Type</p>
        <p>{description}</p>
      </div>

      <div className="items-center flex justify-center gap-2  flex-1">
        <div className="flex flex-col items-center">
          {address.map((el, i) => (
            <p key={`address-key-${i}`} className="text-[13px] text-center">{el}</p>
          ))}</div>
      </div>
    </div>
  )
}

export default Info