import { useState } from "react";
import Cart from "../Components/Cart/Cart"
import Navbar from "../Components/Navbar/Navbar"
import Sidebar from "../Components/Sidebar"

const CartPage = () => {
  const [isSideOpen, setIsSideOpen] = useState(window.innerWidth > 768);

  return (
    <div className="flex flex-col gap-5 flex-grow">
      {isSideOpen && window.innerWidth < 768 && (
        <div className="absolute top-0 left-0 bg-black/60 h-screen w-screen" onClick={() => setIsSideOpen(prev => !prev)}></div>
      )}
      <Navbar toggleSidebar={() => setIsSideOpen(prev => !prev)} />
      <div className="flex gap-3 p-3 rounded-t-lg flex-grow">
        <Sidebar isSideOpen={isSideOpen} />
        <div className="flex flex-col gap-5 flex-1 bg-emerald-50 dark:bg-emerald-900 rounded-lg p-3">
          <Cart />
        </div>

      </div>
    </div>
  )
}

export default CartPage