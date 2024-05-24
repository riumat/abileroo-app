import { useEffect, useState } from "react";
import ProductCard from "../Components/Product/ProductCard";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import axios from "axios";
import { useParams } from "react-router";
import Cart from "../Components/Cart/Cart";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar/Navbar";
import { FaStar } from "react-icons/fa";

const ShopPage = () => {
  const [shopData, setShopData] = useState();
  const [cart, setCart] = useState([]);
  const [isLiked, setIsLiked] = useState();
  const { shopId } = useParams();

  const addToCart = ({ id, name, price }) => {
    setCart([...cart, { "id": id, "name": name, "price": price }]);
  }

  const removeFromCart = (index) => {
    const tmp = [...cart];
    tmp.splice(index, 1);
    setCart([...tmp]);
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
          "products":res.data.products,
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

            <div className="component-card rounded-lg py-7 px-32 flex flex-col gap-5 items-center">
              <img src={shopData?.image} alt="" className="w-[130px] h-[130px] border border-black rounded-full" />
              <p className="text-[40px] font-semibold">{shopData?.name}</p>
            </div>

            <div className="component-card rounded-lg flex justify-between w-full py-5  text-slate-700">
              <div className="border-r border-slate-400  items-center flex justify-center flex-1">
                {isLiked ? (
                  <AiOutlineDislike className="w-7 h-7 cursor-pointer" onClick={() => dislikeShop(shopData?.id)} />
                ) : (
                  <AiOutlineLike className="w-7 h-7 cursor-pointer" onClick={() => likeShop(shopData?.id)} />
                )
                }
              </div>

              <div className="border-r border-slate-400  flex flex-col items-center gap-2  justify-center flex-1">
                <p className="text-[14px] text-slate-500">Rate by other users</p>
                <div className="flex">
                  {[...Array(shopData?.rating)].map((star, i) => (
                    <FaStar key={`star-${i}`} />
                  ))
                  }
                </div>
              </div>

              <div className="border-r border-slate-400  items-center flex flex-col gap-2 justify-center flex-1">
                <p className="text-[14px] text-slate-500">Type</p>
                <p>{shopData?.description}</p>
              </div>

              <div className="items-center flex justify-center gap-2  flex-1">
                <div className="flex flex-col items-center">
                  {shopData?.address.map((el, i) => (
                    <p key={`address-key-${i}`} className="text-[13px] text-center">{el}</p>
                  ))}</div>
              </div>

            </div>

            <div className="flex flex-col gap-3">

            </div>
          </div>
          <div className="flex flex-col gap-7">
            <p className="text-[23px] font-bold text-center">Products</p>
            <div className="grid grid-cols-3 justify-items-center gap-x-4 gap-y-7">
              {shopData?.products?.map((p, i) => (
                <ProductCard key={`product-${i}`} p={p} addToCart={addToCart} />
              ))}
            </div>
          </div>
        </div>
        <Cart cart={cart} removeFromCart={removeFromCart} />
      </div>
    </div>




















  )
}

export default ShopPage