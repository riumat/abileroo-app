import { useEffect, useState } from "react";
import ProductCard from "../Components/Product/ProductCard";
import axios from "axios";
import { useParams } from "react-router";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar/Navbar";
import Info from "../Components/Shop/Info";

const ShopPage = () => {
  const [shopData, setShopData] = useState();
  const [cart, setCart] = useState([]);
  const [isLiked, setIsLiked] = useState();
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
      <Navbar />
      <div className="flex gap-3">
        <Sidebar />
        <div className="flex flex-col gap-5 flex-1">

          <div className="flex flex-col gap-7 items-center">

            <div className="component-card rounded-lg py-7 w-full px-12 lg:px-32 flex flex-col gap-5 items-center">
              <img src={shopData?.image} alt="" className="w-[130px] h-[130px] rounded-lg" />
              <p className="text-[25px] lg:text-[40px] font-semibold text-slate-800">{shopData?.name}</p>
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
            <p className="text-[23px] font-bold text-center">Products</p>
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