import { Link } from "react-router-dom"
import ShopCard from "./ShopCard"

const ShopList = ({ shopList, error, isLoading, likeShop, dislikeShop }) => {
  if (error) return <p>Error fetching shops data</p>
  if (isLoading) return <p>Loading...</p>
  return (
    <div className="flex flex-col items-center gap-8 text-slate-800 dark:text-slate-100">
      <p className="logo-font text-[30px] text-center">Our Shop Selection</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 justify-items-center lg:justify-items-start gap-x-10 gap-y-7 w-full">
        {shopList?.map((shop, i) => (
          <Link key={`shop-card-${i}`} to={`/shop/${shop.id}`} className="cursor-pointer w-[200px] md:w-40 lg:w-full">
            <ShopCard shop={shop} likeShop={likeShop} dislikeShop={dislikeShop} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ShopList