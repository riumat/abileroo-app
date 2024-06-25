import { FaPlus, FaMinus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { add, remove } from "../../redux/cart/cartSlice";
import { imageReplacer } from "../../utils/constants";

const CartProductCard = ({ p }) => {
  const dispatch = useDispatch();

  const addHandle = (product) => {
    dispatch(add({
      product: product,
      id: product.shop,
    }))
  }

  const removeHandle = (id) => {
    dispatch(remove({ id: id }))
  }
  
  return (
    <div className="flex justify-between text-[14px]  items-center  rounded-lg">
      <div className="flex gap-5 items-center">
        <img src={p.product_image ?? imageReplacer} className="w-16 h-16 sm:w-32 sm:h-32 md:w-40 md:h-40 object-cover rounded-lg"
          alt=""
          loading="lazy"
        />
        <div className="flex flex-col">
          <p className="font-bold text-[16px]">{p.name}</p>
          <p className=" text-[16px]">{p.price}€</p>
        </div>
      </div>

      <div className="flex items-center me-7 border border-black dark:border-slate-400 ">
        <div
          className="cart-controller rounded-s-lg border-e border-slate-500 "
          onClick={() => addHandle(p)}>
          <FaPlus className="w-3 h-3" />
        </div>
        <p className="px-3 text-center cursor-default w-8">{p.count}</p>
        <div
          className="cart-controller rounded-e-lg border-s border-slate-500  "
          onClick={() => removeHandle(p.id)}>
          <FaMinus className="w-3 h-3" />
        </div>
      </div>
    </div>
  )
}

export default CartProductCard