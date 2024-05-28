import { Link } from "react-router-dom"
import ShopCard from "./ShopCard"

const ShopList = ({ shopList, error, isLoading }) => {
  if (error) return <p>Error fetching shops data</p>
  if (isLoading) return <p>Loading...</p>
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-5 ">
      {shopList?.map((shop, i) => (
        <Link key={`ac-${i}`} to={`/shop/${shop.id}`} className="cursor-pointer">
          <ShopCard ac={shop} />
        </Link>
      ))}
    </div>
  )
}

export default ShopList