import { Link } from "react-router-dom"
import ShopCard from "./ShopCard"

const ShopList = ({ shopList, error, isLoading }) => {
  if (error) return <p>Error fetching ac data</p>
  if (isLoading) return <p>Loading...</p>
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-5">
      {shopList?.map((shop, i) => (
        <Link key={`ac-${i}`} to={`shop/${shop.id}`} className="cursor-pointer">
          <ShopCard ac={shop} />
        </Link>
      ))}
    </div>
  )
}

export default ShopList