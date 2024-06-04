import { useEffect, useState } from "react";
import ProductCard from "../Components/Product/ProductCard";
import { useParams } from "react-router";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar/Navbar";
import Info from "../Components/Shop/Info";
import { axiosBase } from "../constants";

const ShopPage = ({ addToCart, likeShop, dislikeShop }) => {
  const [shopData, setShopData] = useState();
  const [isSideOpen, setIsSideOpen] = useState(window.innerWidth > 768);
  const { shopId } = useParams();

  const updateSidebar = () => {
    setIsSideOpen(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateSidebar);
    return () => window.removeEventListener("resize", updateSidebar);
  });


  useEffect(() => {
    axiosBase.get(`../mockShop${shopId}.json`) ///shops/shop/${shopId}
      .then(res => {
        setShopData({
          "id": res.data.id,
          "name": res.data.name,
          "address": res.data.address.split(","),
          "description": res.data.description,
          "image": res.data.image,
          "rating": res.data.rating,
          "products": res.data.products,
        });
      })
      .catch(error => console.log(error));
  }, [])

  return (
    <div className="flex flex-col gap-5 overflow-hidden">
      {isSideOpen && window.innerWidth < 768 && (
        <div className="bg-mobile" onClick={() => setIsSideOpen(prev => !prev)}></div>
      )}
      <Navbar toggleSidebar={() => setIsSideOpen(prev => !prev)} />
      <div className="flex gap-3 overflow-hidden">
        <Sidebar isSideOpen={isSideOpen} />
        <div className="flex flex-col gap-5 flex-1 bg-dark p-3 rounded-t-lg overflow-auto">

          <div className="flex flex-col gap-7 items-center ">

            <div className="rounded-lg py-7 w-full px-12 md:px-32 flex flex-col gap-5 items-center bg-light">
              <img src={shopData?.image} alt="" className="w-[130px] h-[130px] rounded-lg object-cover" />
              <p className="text-[25px] lg:text-[40px] font-semibold">{shopData?.name}</p>
            </div>
            {shopData && (
              <Info
                likeShop={likeShop}
                dislikeShop={dislikeShop}
                rating={shopData.rating}
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
  )
}

export default ShopPage