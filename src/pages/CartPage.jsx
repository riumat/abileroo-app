import { useContext } from "react";
import Cart from "../Components/Cart/Cart"
import { CartCtx } from "../App";
import { MdErrorOutline } from "react-icons/md";
import FindShopButton from "../Components/FindShopButton";
import PathViewer from "../Components/Navbar/PathViewer";
import { usePath } from "../utils/hooks";

const CartPage = ({ addToCart, removeFromCart, confirmOrder }) => {
  const path = usePath();
  const cart = useContext(CartCtx);

  return (
    <div className="flex flex-col gap-5 flex-1 rounded-lg px-3 overflow-auto bg-dark shadow-none">
      <div className="flex gap-3 justify-end">
        <PathViewer path={path} />
      </div>
      {cart?.list?.length === 0 ? (
        <div className="flex flex-col items-center gap-10 pt-8">
          <MdErrorOutline className="text-black dark:text-slate-100 w-6 h-6" />
          <p className="text-center text-slate-800 dark:text-slate-200 text-[18px]">Your cart is empty</p>
          <FindShopButton />
        </div>
      ) : (
        <div>
          <div className='  p-3 '>
            <p className="logo-font text-[30px] text-center pt-5 dark:text-slate-100">Cart</p>

          </div>
          <Cart addToCart={addToCart} removeFromCart={removeFromCart} confirmOrder={confirmOrder} />
        </div>

      )}
    </div>

  )
}

export default CartPage