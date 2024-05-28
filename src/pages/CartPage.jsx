import { useState } from "react";
import Cart from "../Components/Cart/Cart"
import Navbar from "../Components/Navbar/Navbar"
import Sidebar from "../Components/Sidebar"

const CartPage = () => {
  const [isSideOpen, setIsSideOpen] = useState(window.innerWidth > 640);

  return (
    <div className="flex flex-col gap-5 ">
      {isSideOpen && window.innerWidth < 1024 && (
        <div className="absolute top-0 left-0 bg-black/60 h-screen w-screen" onClick={() => setIsSideOpen(prev => !prev)}></div>
      )}
      <Navbar toggleSidebar={() => setIsSideOpen(prev => !prev)} />
      <div className="flex gap-3 p-3 rounded-t-lg ">
        <Sidebar isSideOpen={isSideOpen} />
        <div className="flex flex-col gap-5 flex-1 bg-slate-200 dark:bg-slate-700 rounded-lg p-3">
          <Cart />
        </div>

      </div>
    </div>
  )
}

export default CartPage