import { useEffect, useState } from "react";
import ProductCard from "../Components/Product/ProductCard";
import { useParams } from "react-router";
import Info from "../Components/Shop/Info";
import { axiosBase, shopUrls } from "../utils/constants";
import { ClipLoader } from "react-spinners";
import PathViewer from "../Components/Navbar/PathViewer";
import { usePath, useSidebar } from "../utils/hooks";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar";

const ShopPage = ({ addToCart, likeShop, dislikeShop, logHandle }) => {
  const path = usePath();
  const [isSideOpen, setIsSideOpen] = useSidebar();
  const [shopData, setShopData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { shopId } = useParams();


  useEffect(() => {
    setIsLoading(true);
    axiosBase.get(`shop/shop/${shopId}`) ///  shopUrls[shopId - 1]
      .then(res => {
        setShopData({
          id: res.data.id,
          name: res.data.name,
          address: res.data.address.split(","),
          description: res.data.description,
          image: process.env.REACT_APP_BASE_URL + res.data.image,
          products: [...res.data.products].map(product => (
            { ...product, product_image: process.env.REACT_APP_BASE_URL + product.product_image }
          )),
        });
        setIsLoading(false);
      })
      .catch(error => {
        setError(true);
        console.log(error)
      });
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
    <>
      <div className="flex flex-col gap-5 overflow-hidden h-full">
        {isSideOpen && window.innerWidth < 768 && (
          <div className="bg-mobile" onClick={() => setIsSideOpen(prev => !prev)}></div>
        )}
        <Navbar toggleSidebar={() => setIsSideOpen(prev => !prev)} logHandle={logHandle} />
        <div className="flex gap-3 overflow-hidden h-full">
          <Sidebar isSideOpen={isSideOpen} logHandle={logHandle} />
          <div className="flex flex-col gap-5 flex-1 bg-dark rounded-t-lg overflow-auto">


            <div className="flex flex-col gap-5 px-3">

              <div className="flex gap-3 justify-end">
                <PathViewer path={path} />
              </div>
              <div className="flex flex-col gap-7 items-center ">

                <div className="rounded-lg py-7 w-full px-12 md:px-32 flex flex-col gap-5 items-center bg-light">
                  <img src={shopData?.image} alt="" className="w-[130px] h-[130px] rounded-lg object-cover" />
                  <p className="text-[28px] lg:text-[45px] logo-font">{shopData?.name}</p>
                </div>
                {shopData && (
                  <Info
                    likeShop={likeShop}
                    dislikeShop={dislikeShop}
                    description={shopData.description}
                    address={shopData.address}
                    id={shopData.id}
                  />
                )}
              </div>

              <div className="flex flex-col gap-7">
                <p className="text-[23px] font-bold text-center dark:text-slate-100">Products</p>
                <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-x-4 gap-y-7 mb-10">
                  {shopData?.products?.map((p, i) => (
                    <ProductCard key={`product-${i}`} p={p} addToCart={addToCart} />
                  ))}
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </>

  )
}

export default ShopPage