import { Link } from "react-router-dom"
import ShopCard from "./ShopCard"
import { ClipLoader } from "react-spinners"

const ShopList = ({ shopList, error, isLoading }) => {
  if (error) {
    return (
      <div className='w-full h-full flex justify-center items-center'>
        <p>Failed to fetch data</p>
      </div>
    )
  }
  if (isLoading) {
    return (
      <div className='w-full h-full flex justify-center items-center'>
        <ClipLoader />
      </div>
    )
  }
  return (

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 justify-items-center lg:justify-items-start gap-x-10 gap-y-7 w-full">
      {shopList?.map((shop, i) => (
        <Link key={`shop-card-${i}`} to={`/shop/${shop.id}`} className="cursor-pointer w-[200px] md:w-40 lg:w-full">
          <ShopCard shop={shop} />
        </Link>
      ))}
    </div>
  )
}

export default ShopList