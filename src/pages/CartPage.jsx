import { useContext, useEffect, useState } from "react";
import Cart from "../Components/Cart/Cart"
import Navbar from "../Components/Navbar/Navbar"
import Sidebar from "../Components/Sidebar"
import { CartCtx } from "../App";
import { MdErrorOutline } from "react-icons/md";
import FindShopButton from "../Components/FindShopButton";

const CartPage = ({ addToCart, removeFromCart, confirmOrder }) => {
  const [isSideOpen, setIsSideOpen] = useState(window.innerWidth > 768);
  const cart = useContext(CartCtx);

  const updateSidebar = () => {
    setIsSideOpen(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateSidebar);
    return () => window.removeEventListener("resize", updateSidebar);
  });

  return (
    <div className="flex flex-col gap-5 flex-grow overflow-hidden">
      {isSideOpen && window.innerWidth < 768 && (
        <div className="bg-mobile" onClick={() => setIsSideOpen(prev => !prev)}></div>
      )}
      <Navbar toggleSidebar={() => setIsSideOpen(prev => !prev)} />
      <div className="flex gap-3 flex-grow overflow-hidden">
        <Sidebar isSideOpen={isSideOpen} />
        <div className="flex flex-col gap-5 flex-1 rounded-lg p-3 overflow-auto bg-dark shadow-none">
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

      </div>
    </div>
  )
}

export default CartPage