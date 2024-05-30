import axios from "axios";
import { useEffect, useState } from "react";

const Carousel = () => {
  const [shopList, setShopList] = useState([]);

  useEffect(() => {
    axios.get("mock.json")
      .then(res => res.data)
      .then(data => setShopList(data));
  }, [])

  return (
    <div className="overflow-hidden relative  h-40 flex items-center rounded-b-lg rounded-tr-lg shadow w-full bg-white dark:bg-slate-950 p-2">
      <div className="flex absolute l-0 justify-center items-center gap-4 w-[200%] h-full carousel">
        {shopList?.map((shop,i) => (
          <div key={`carousel-img-${i}`} className="w-32 h-32 flex justify-center items-center">
            <img src={shop?.image} className="object-contain rounded-lg" alt="" />
          </div>
        ))
        }
        {shopList?.map((shop,i) => (
          <img key={`carousel-img-${i}`} src={shop?.image}  className="w-32 h-32 object-contain rounded-lg" alt="" />
        ))
        }
      </div>
    </div>
  )
}

export default Carousel