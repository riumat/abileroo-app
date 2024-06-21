import { Link } from "react-router-dom"
import ShopCard from "./ShopCard"
import ErrorDisplay from "../ErrorDisplay"
import LoadingDisplay from "../LoadingDisplay"

const ShopList = ({ shopList, error, isLoading }) => {
  if (error) return <ErrorDisplay />
  if (isLoading) return <LoadingDisplay />

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3 justify-items-center lg:justify-items-center gap-x-10 gap-y-7 w-full">
      {shopList?.map((shop, i) => (
        <Link key={`shop-card-${i}`} to={`/shop/${shop.id}`} className="cursor-pointer border-2 border-transparent p-3 rounded-xl hover:border-orange-900  hover:shadow-xl">
          <ShopCard shop={shop} />
        </Link>
      ))}
    </div>
  )
}

export default ShopList