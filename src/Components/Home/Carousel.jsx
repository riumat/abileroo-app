import { useEffect, useState } from "react";
import { axiosBase } from "../../constants";
import { ClipLoader } from "react-spinners";

const Carousel = () => {
  const [shopList, setShopList] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axiosBase.get("/shop/shops/") //shop/shops/ //30523e18-8014-44af-81af-59ba12e43c08
      .then(res => res.data)
      .then(data => {
        setShopList(data)
        setIsLoading(false)
      })
      .catch(error => {
        setError(true);
        console.log(error);
      })
  }, [])

  if (error) {
    return (
      <div className='w-full h-40 bg-light rounded-b-lg rounded-tr-lg shadow flex justify-center items-center'>
        <p>Failed to fetch data</p>
      </div>
    )
  }

  if (isLoading){
    return(
      <div className='w-full h-40 flex justify-center items-center bg-light rounded-b-lg rounded-tr-lg shadow'>
        <ClipLoader/>
      </div>
    )
  }

  return (
    <div className="overflow-hidden relative  h-40 flex items-center rounded-b-lg rounded-tr-lg shadow w-full bg-white dark:bg-slate-950 p-2">
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