import { useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { getShopList } from "../../redux/shop/shopSlice";

const Carousel = () => {
  const { shopList, error, isLoading } = useSelector(state => state.shop)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShopList());
  }, [])

  if (error) {
    return (
      <div className='w-full h-40 bg-light rounded-b-lg rounded-tr-lg shadow flex justify-center items-center'>
        <p>Failed to fetch data</p>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className='w-full h-40 flex justify-center items-center bg-light rounded-b-lg rounded-tr-lg shadow'>
        <ClipLoader />
      </div>
    )
  }

  return (
    <div className="overflow-hidden relative h-40 flex items-center rounded-b-lg rounded-tr-lg shadow w-full bg-white dark:bg-slate-950 p-2">
      <div className="flex absolute l-0 justify-center items-center gap-4 w-[200%] h-full carousel">
        {shopList?.map((shop, i) => (
          <img key={`carousel-img-${i}`} src={shop?.image} className="w-32 h-32 object-contain rounded-lg" alt="" />
        ))
        }
        {shopList?.map((shop, i) => (
          <img key={`carousel-img-${i}`} src={shop?.image} className="w-32 h-32 object-contain rounded-lg" alt="" />
        ))
        }
      </div>
    </div>
  )
}

export default Carousel