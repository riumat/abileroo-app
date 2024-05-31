import React, { useContext } from 'react'
import { OrdersCtx } from '../App'

import { useEffect, useState } from "react";
import Cart from "../Components/Cart/Cart"
import Navbar from "../Components/Navbar/Navbar"
import Sidebar from "../Components/Sidebar"
import CartProductCard from '../Components/Cart/CartProductCard';
import FindShopButton from '../Components/FindShopButton';
import { MdErrorOutline } from 'react-icons/md';

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
        <div className="flex flex-col gap-5 flex-1 bg-emerald-50 dark:bg-emerald-950/70 rounded-lg p-3 overflow-auto">
          {orders.length === 0 ? (
            <div className="flex flex-col items-center gap-10 pt-8">
            <MdErrorOutline className="text-black dark:text-slate-100 w-6 h-6"/>
            <p className="text-center text-slate-800 dark:text-slate-200 text-[18px]">You have not placed any order yet!</p>
            <FindShopButton />
          </div>
          ) : (
            <div>
              <div className='  p-3 '>
                <p className='text-[30px] text-center dark:text-slate-100 '>Your recent orders</p>
              </div>
              <div className='p-2 rounded-lg flex flex-col gap-3'>
                {orders.map((order, i) => (
                  <div key={`order-${i}`} className='flex flex-col gap-5 p-3 '>
                    <p className='text-slate-600 dark:text-slate-400 text-[14px]'><span className='text-slate-900 dark:text-slate-200 font-bold'>Order #{i + 1}</span> - {`${new Date(order.date).toLocaleDateString("it")} @ ${new Date(order.date).toLocaleTimeString("it")}`}</p>
                    {order.order.map((product, j) => (
                      <div key={`order-product-${j}`} className='flex justify-between pe-5 items-center  bg-white dark:bg-slate-950 dark:text-slate-100 rounded-lg shadow'>
                        <div className='flex gap-3 items-center'>
                          <img src={product.product_image} className="w-28 h-28 object-cover rounded-s-lg" alt="" />
                          <div>
                            <p className='text-[14px] font-bold'>{product.name}</p>
                            <p>x{product.count}</p>
                          </div>
                        </div>
                        <p>{product.price * product.count}€</p>
                      </div>
                    ))}
                    <p className='text-[14px] dark:text-slate-100'>Total - <span className='font-bold'>{order.total}€</span></p>
                  </div>
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