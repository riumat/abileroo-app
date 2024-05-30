import { FaMinus, FaPlus } from 'react-icons/fa6'

const ProductControls = ({ p, index, addToCart, removeFromCart }) => {
  return (
    <div className="flex gap-2 me-5">
      <div className="p-2 rounded-lg hover:bg-green-100 dark:hover:bg-emerald-900 cursor-pointer active:scale-50 duration-500" onClick={() => addToCart(p)}>
        <FaPlus className="w-4 h-4" />
      </div>
      <div className=" p-2 rounded-lg hover:bg-red-100 dark:hover:bg-red-800 cursor-pointer active:scale-50 duration-500" onClick={() => removeFromCart(index)}>
        <FaMinus className="w-4 h-4" />
      </div>
    </div>
  )
}

export default ProductControls