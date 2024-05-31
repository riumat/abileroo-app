import { useContext, useEffect, useState } from "react";
import { MdAddShoppingCart, MdErrorOutline } from "react-icons/md";
import { CartCtx } from "../../App";

const ProductCard = ({ p, addToCart, id }) => {
  const cart = useContext(CartCtx);
  const [isAvaiable, setIsAvaiable] = useState(cart?.id !== id || cart?.id === "");

  useEffect(() => {
    setIsAvaiable(cart?.id !== id || cart?.id === "");
  }, [cart?.id])

  return (
    <div className="relative flex flex-col w-full md:w-[230px] items-center justify-between pb-5 gap-2 shadow rounded-lg text-emerald-800 bg-white dark:bg-slate-950 dark:text-slate-100">
      {isAvaiable && (
        <div className="absolute flex flex-col justify-center gap-2 h-full w-full bg-black/80 text-white rounded-lg text-[14px] items-center p-2">
          <MdErrorOutline className="w-6 h-6" />
          <p className="text-center">You order already have some products from a different shop</p>
        </div>
      )}
      <img src={p?.product_image} alt="" className="w-full h-32 object-cover rounded-t-lg" loading="lazy" />
      <div className="flex flex-col gap-2">
        <div className="flex flex-col items-center gap-2 border-b border-slate-300 py-3">
          <p className="text-[17px]">{p?.name}</p>
          <p className="text-[10px]">{p?.description}</p>
          <p className="text-[35px]">{p?.price}€</p>
        </div>
      </div>
      <div className="cursor-pointer py-2 px-5 rounded-lg " onClick={() => addToCart(p)}>
        <MdAddShoppingCart className="w-7 h-7 active:scale-50 active:text-green-500 duration-500" />
      </div>
    </div>

  )
}

export default ProductCard