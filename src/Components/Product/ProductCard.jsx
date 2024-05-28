import { MdAddShoppingCart } from "react-icons/md";

const ProductCard = ({ p, addToCart }) => {

  return (
    <div className="flex flex-col w-full md:w-[230px] items-center justify-between pb-5 gap-2 shadow rounded-lg text-emerald-800 bg-white dark:bg-slate-950 dark:text-slate-100">
      <img src={p?.product_image} alt="" className="w-full h-32 object-cover rounded-t-lg" />
      <div className="flex flex-col gap-2">
        <div className="flex flex-col items-center gap-2 border-b border-slate-300 py-3">
          <p className="text-[17px]">{p?.name}</p>
          <p className="text-[10px]">{p?.description}</p>
          <p className="text-[35px]">{p?.price}€</p>
        </div>
      </div>
      <div className="cursor-pointer py-2 px-5 rounded-lg " onClick={() => addToCart(p)}>
        <MdAddShoppingCart className="w-7 h-7 active:scale-150 active:text-green-500 transition-all duration-300" />
      </div>
    </div>

  )
}

export default ProductCard