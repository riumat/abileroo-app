import { FaPlus, FaMinus } from "react-icons/fa6";

const CartProductCard = ({ p, removeFromCart, addToCart}) => {
  console.log(p)
  return (
    <div className="flex justify-between text-[14px] shadow  items-center bg-white dark:bg-slate-950 rounded-lg"
    >
      <div className="flex gap-5 items-center">
        <img src={p.product_image} className="w-28 h-28 object-cover rounded-s-lg" alt="" loading="lazy" />
        <div className="flex flex-col">
          <p >{p.name}</p>
          <p className="font-bold text-[16px]">x{p.count}</p>
        </div>
      </div>
      
      <div className="flex gap-2 me-7">
        <div
          className="p-2 rounded-lg hover:bg-green-100 dark:hover:bg-emerald-900 cursor-pointer active:scale-50 duration-500"
          onClick={() => addToCart(p)}>
          <FaPlus className="w-5 h-5" />
        </div>
        <div
          className=" p-2 rounded-lg hover:bg-red-100 dark:hover:bg-red-800 cursor-pointer active:scale-50 duration-500"
          onClick={() => removeFromCart(p.id)}>
          <FaMinus className="w-5 h-5" />
        </div>
      </div>
    </div>
  )
}

export default CartProductCard