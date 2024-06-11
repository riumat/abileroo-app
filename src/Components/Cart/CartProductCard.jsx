import { FaPlus, FaMinus } from "react-icons/fa6";

const CartProductCard = ({ p, removeFromCart, addToCart }) => {
  return (
    <div className="flex justify-between text-[14px] shadow  items-center bg-white dark:bg-slate-950 rounded-lg">
      <div className="flex gap-5 items-center">
        <img src={p.product_image} className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover rounded-s-lg"
          alt=""
          loading="lazy"
        />
        <div className="flex flex-col">
          <p >{p.name}</p>
          <p className="font-bold text-[16px]">x{p.count}</p>
        </div>
      </div>

      <div className="flex items-center me-7 border border-black dark:border-slate-400 rounded-lg">
        <div
          className="cart-controller rounded-s-lg border-e border-slate-500 hover:bg-green-100 dark:hover:bg-emerald-900"
          onClick={() => addToCart(p)}>
          <FaPlus className="w-3 h-3" />
        </div>
        <div
          className="cart-controller rounded-e-lg hover:bg-red-100 dark:hover:bg-red-800 "
          onClick={() => removeFromCart(p.id)}>
          <FaMinus className="w-3 h-3" />
        </div>
      </div>
    </div>
  )
}

export default CartProductCard