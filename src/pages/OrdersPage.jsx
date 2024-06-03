import React, { useContext } from 'react'
import { OrdersCtx } from '../App'

import { useEffect, useState } from "react";
import Cart from "../Components/Cart/Cart"
import Navbar from "../Components/Navbar/Navbar"
import Sidebar from "../Components/Sidebar"
import CartProductCard from '../Components/Cart/CartProductCard';
import FindShopButton from '../Components/FindShopButton';
import { MdErrorOutline } from 'react-icons/md';
import OrderCard from '../Components/Product/OrderCard';


const OrdersPage = () => {
  const orders = useContext(OrdersCtx);
  const [isSideOpen, setIsSideOpen] = useState(window.innerWidth > 768);

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
        <div className="absolute top-0 left-0 bg-black/60 h-screen w-screen" onClick={() => setIsSideOpen(prev => !prev)}></div>
      )}
      <Navbar toggleSidebar={() => setIsSideOpen(prev => !prev)} />
      <div className="flex gap-3 flex-grow overflow-hidden">
        <Sidebar isSideOpen={isSideOpen} />
        <div className="flex flex-col gap-5 flex-1 bg-dark rounded-lg p-3 overflow-auto">
          {orders.length === 0 ? (
            <div className="flex flex-col items-center gap-10 pt-8">
              <MdErrorOutline className="text-black dark:text-slate-100 w-6 h-6" />
              <p className="text-center text-slate-800 dark:text-slate-200 text-[18px]">You have not placed any order yet!</p>
              <FindShopButton />
            </div>
          ) : (
            <div>
              <div className='  p-3 '>
                <p className="logo-font text-[30px] text-center pt-5 dark:text-slate-100">Your Recent Orders</p>

              </div>

              <div className='p-2 rounded-lg flex flex-col gap-5'>
                {orders.map((order, i) => (
                  <OrderCard order={order} i={i} />
                ))}
              </div>
            </div>
          )}


        </div>

      </div>
    </div>







  )
}

export default OrdersPage