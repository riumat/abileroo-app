import { useEffect, useState } from "react";
import ProductCard from "../Components/Product/ProductCard";
import axios from "axios";
import { useParams } from "react-router";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar/Navbar";
import Info from "../Components/Shop/Info";

const ShopPage = () => {
  const [shopData, setShopData] = useState();
  const [isLiked, setIsLiked] = useState();
  const [isSideOpen, setIsSideOpen] = useState(window.innerWidth > 768);
  const { shopId } = useParams();

  const addToCart = ({ id, name, price, product_image }) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const newCart = [...cart, { "id": id, "name": name, "price": price, "image": product_image }];
    localStorage.setItem("cart", JSON.stringify(newCart));
  }

  const isInLiked = (id) => {
    const liked = JSON.parse(localStorage.getItem("liked")) || [];
    setIsLiked(liked.includes(id));
  }

  const likeShop = (id) => {
    const liked = JSON.parse(localStorage.getItem("liked"));
    liked.push(id);
    localStorage.setItem("liked", JSON.stringify(liked));
    isInLiked(id);
  }

  const dislikeShop = (id) => {
    const liked = JSON.parse(localStorage.getItem("liked"));
    const index = liked.indexOf(id);
    if (index != -1) {
      liked.splice(index, 1);
    }
    localStorage.setItem("liked", JSON.stringify(liked));
    isInLiked(id);
  }

  useEffect(() => {
    axios.get(`../mockShop${shopId}.json`) ///shops/shop/${shopId}
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
        return res.data
      })
      .then(data => isInLiked(data.id))
      .catch(error => console.log(error));
  }, [])

  return (

    <div className="flex flex-col gap-5">
      {isSideOpen && window.innerWidth < 768 && (
        <div className="absolute top-0 left-0 bg-black/60 h-screen w-screen" onClick={() => setIsSideOpen(prev => !prev)}></div>
      )}
      <Navbar toggleSidebar={() => setIsSideOpen(prev => !prev)} />
      <div className="flex gap-3">
        <Sidebar isSideOpen={isSideOpen} />
        <div className="flex flex-col gap-5 flex-1 bg-emerald-50 dark:bg-emerald-900 p-3 rounded-t-lg">

          <div className="flex flex-col gap-7 items-center ">

            <div className="rounded-lg py-7 w-full px-12 md:px-32 flex flex-col gap-5 items-center dark:bg-emerald-950 shadow bg-white">
              <img src={shopData?.image} alt="" className="w-[130px] h-[130px] rounded-lg" />
              <p className="text-[25px] lg:text-[40px] font-semibold text-slate-800 dark:text-slate-100">{shopData?.name}</p>
            </div>
            {shopData && (
              <Info
                isLiked={isLiked}
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