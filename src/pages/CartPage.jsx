import { useEffect, useState } from "react";
import Cart from "../Components/Cart/Cart"
import Navbar from "../Components/Navbar/Navbar"
import Sidebar from "../Components/Sidebar"

const CartPage = ({ setCart }) => {
  const [isSideOpen, setIsSideOpen] = useState(window.innerWidth > 768);

  const updateSidebar = () => {
    setIsSideOpen(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateSidebar);
    return () => window.removeEventListener("resize", updateSidebar);
  });

  return (
    <div className="flex flex-col gap-5 flex-grow">
      {isSideOpen && window.innerWidth < 768 && (
        <div className="absolute top-0 left-0 bg-black/60 h-screen w-screen" onClick={() => setIsSideOpen(prev => !prev)}></div>
      )}
      <Navbar toggleSidebar={() => setIsSideOpen(prev => !prev)} />
      <div className="flex gap-3 flex-grow">
        <Sidebar isSideOpen={isSideOpen} />
        <div className="flex flex-col gap-5 flex-1 bg-emerald-50 dark:bg-emerald-950/70 rounded-lg p-3">
          <Cart setCart={setCart} />
        </div>

      </div>
    </div>
  )
}

export default CartPage