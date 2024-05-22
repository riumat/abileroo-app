import { useEffect, useState } from "react";
import ProductCard from "../Components/Product/ProductCard";
import CartSection from "../Components/Shop/CartSection";
import { axiosBase } from "../constants";
import axios from "axios";

const ShopPage = () => {
  const [products, setProducts] = useState();
  const [shopData, setShopData] = useState();
  const [cart, setCart] = useState([]);

  const addToCart = (id, name, price) => {
    setCart([...cart, { "id": id, "name": name, "price": price }]);
  }

  const removeFromCart=(index)=>{
    const tmp=[...cart];
    tmp.splice(index,1);
    setCart([...tmp]);
  }

  useEffect(() => {
    axios.get(`../mockShop.json`) ///shops/shop/${shopId}
      .then(res => {
        setProducts(res.data.products);
        setShopData({
          "name": res.data.name,
          "address": res.data.address,
          "description": res.data.description,
          "image": "logo512.png",//res.data.image
        });
      })
      .catch(error => console.log(error));
  }, [])


  return (
    <div className="flex flex-col gap-10">
      <div className="flex gap-7 items-center">
        <img src={shopData?.image} alt="" width={130} height={130} className="border border-black rounded-full" />
        <div className="flex flex-col gap-3">
          <p className="text-[40px] font-semibold">{shopData?.name}</p>
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
      <CartSection cart={cart} shopId={shopData?.id}  removeFromCart={removeFromCart}/>
    </div>
  )
}

export default ShopPage