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
import { ClipLoader } from 'react-spinners';


const OrdersPage = () => {
  const orders = useContext(OrdersCtx);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  //TODO chiamata per gli ordini al backend
  if (error) {
    return (
      <div className='w-full h-full bg-dark flex justify-center items-center'>
        <p>Failed to fetch data</p>
      </div>
    )
  }

  if (isLoading){
    return(
      <div className='w-full h-full flex justify-center items-center bg-dark '>
        <ClipLoader/>
      </div>
    )
  }
  return (

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
                  <OrderCard key={`order-card-${i}`} order={order} i={i} />
                ))}
              </div>
            </div>
          )}
        </div>
  )
}

export default OrdersPage