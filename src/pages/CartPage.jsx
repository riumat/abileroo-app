import { useState } from "react";
import Cart from "../Components/Cart/Cart"
import Navbar from "../Components/Navbar/Navbar"
import Sidebar from "../Components/Sidebar"

const CartPage = () => {
  const [isSideOpen, setIsSideOpen] = useState(window.innerWidth > 640);

  return (
    <div className="flex flex-col gap-5">
      <Navbar toggleSidebar={() => setIsSideOpen(prev => !prev)} />
      <div className="flex gap-3">
        <Sidebar isSideOpen={isSideOpen} />
        <div className="flex flex-col gap-5 flex-1">
          <Cart />
        </div>

      </div>
    </div>
  )
}

export default CartPage