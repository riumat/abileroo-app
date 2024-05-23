import { useEffect, useState } from "react";
import ProductCard from "../Components/Product/ProductCard";
import CartSection from "../Components/Shop/CartSection";
import { AiOutlineLike, AiOutlineDislike, AiFillAccountBook } from "react-icons/ai";
import { axiosBase } from "../constants";
import axios from "axios";
import { useParams } from "react-router";

const ShopPage = () => {
  const [products, setProducts] = useState();
  const [shopData, setShopData] = useState();
  const [cart, setCart] = useState([]);
  const [isLiked, setIsLiked] = useState();
  const { shopId } = useParams();

  const addToCart = (id, name, price) => {
    setCart([...cart, { "id": id, "name": name, "price": price }]);
  }

  const removeFromCart = (index) => {
    const tmp = [...cart];
    tmp.splice(index, 1);
    setCart([...tmp]);
  }

  const isInLiked = (id) => {
    const liked = JSON.parse(localStorage.getItem("liked"));
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
    console.log(shopId);
    axios.get(`../mockShop${shopId}.json`) ///shops/shop/${shopId}
      .then(res => {
        setProducts(res.data.products);
        setShopData({
          "id": res.data.id,
          "name": res.data.name,
          "address": res.data.address,
          "description": res.data.description,
          "image": "../logo512.png",//res.data.image
        });
        return res.data
      })
      .then(data => isInLiked(data.id))
      .catch(error => console.log(error));
  }, [])


  return (
    <div className="flex flex-col gap-10">
      <div className="flex gap-7 items-center">
        <img src={shopData?.image} alt="" width={130} height={130} className="border border-black rounded-full" />
        <div className="flex flex-col gap-3">
          <div>
            <p className="text-[40px] font-semibold">{shopData?.name}</p>
            {isLiked ? (
              <AiOutlineDislike className="w-7 h-7 cursor-pointer" onClick={() => dislikeShop(shopData?.id)} />
            ) : (
              <AiOutlineLike className="w-7 h-7 cursor-pointer" onClick={() => likeShop(shopData?.id)} />
            )
            }
          </div>
          <p>{shopData?.description}</p>
          <p>{shopData?.address}</p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-[20px] font-bold">Products</p>
        <div className="">
          {products?.map((p, i) => (
            <ProductCard key={`product-${i}`} p={p} addToCart={addToCart} />
          ))}
        </div>
      </div>
      <CartSection cart={cart} shopId={shopData?.id} removeFromCart={removeFromCart} />
    </div>
  )
}

export default ShopPage