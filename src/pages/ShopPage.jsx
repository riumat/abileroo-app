import { useEffect } from "react";
import ProductCard from "../Components/Product/ProductCard";
import { useParams } from "react-router";
import Info from "../Components/Shop/Info";
import { ClipLoader } from "react-spinners";
import PathViewer from "../Components/Navbar/PathViewer";
import { useDispatch, useSelector } from "react-redux";
import { getShop } from "../redux/shop/shopSlice";

const ShopPage = () => {
  const { shop, isLoading, error } = useSelector(state => state.shop);
  const { shopId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShop(shopId));
  }, [])

  if (error) {
    return (
      <div className='w-full h-full bg-dark flex justify-center items-center'>
        <p>Failed to fetch data</p>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className='w-full h-full flex justify-center items-center bg-dark '>
        <ClipLoader />
      </div>
    )
  }
  return (
    <div className="flex flex-col gap-5 flex-1 bg-dark rounded-t-lg overflow-auto">
      <div className="flex flex-col gap-5">

        <div className="flex gap-3 justify-end">
          <PathViewer />
        </div>
        <div className="flex justify-center p-5 bg-gradient-to-r from-black to-95% to-amber-950">

          <div className=" flex items-center gap-10 flex-1 ">
            <img src={shop?.image} alt="" className="w-[200px] h-[200px] rounded-lg object-cover" />
            <p className="text-[28px] lg:text-[45px] text-gradient from-white via-yellow-200 to-orange-200">{shop?.name}</p>
          </div>
          {shop && (
            <Info
              description={shop.description}
              address={shop.address}
              id={shop.id}
            />
          )}
        </div>

        <div className="flex flex-col gap-7">
          <p className="text-[23px] font-bold text-center dark:text-slate-100">Products</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-x-4 gap-y-7 mb-10">
            {shop?.products?.map((p, i) => (
              <ProductCard key={`product-${i}`} p={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopPage