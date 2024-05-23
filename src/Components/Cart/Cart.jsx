import { FaShoppingCart } from "react-icons/fa";
//TODO cart dinamic
const Cart = () => {
  return (
    <div className="bg-white rounded-lg w-60 flex flex-col items-center">
      <div className="py-10">
        <FaShoppingCart className="w-10 h-10 " />
      </div>
      <div className="py-4 border-t border-slate-400">
        <p>Your Cart is Empty.</p>
      </div>
    </div>
  )
}

export default Cart