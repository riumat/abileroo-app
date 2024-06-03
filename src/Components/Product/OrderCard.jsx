import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";


const OrderCard = ({ order, i }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div key={`order-${i}`} className={`flex flex-col w-full gap-5 p-3 `}>
      <div className="flex justify-evenly md:gap-5 items-center text-[13px] md:text-[15px]">
        <p className='text-slate-900 dark:text-slate-200 font-bold'>Order #{i + 1}</p>
        <p className='text-slate-600 dark:text-slate-400 text-[13px]'>{`${new Date(order?.date).toLocaleDateString("it")} @ ${new Date(order?.date).toLocaleTimeString("it")}`}</p>
        <p className='text-[0px] md:text-[13px] dark:text-slate-100'>Total - <span className='font-bold text-[13px]'>{order?.total}€</span></p>
        <IoMdArrowDropdown className='cursor-pointer w-7 h-7 p-1 border rounded-lg hover:bg-slate-600 bg-slate-900 text-emerald-50 active:scale-75 duration-300' onClick={() => setIsVisible(prev => !prev)} />
      </div>
      {isVisible && (
        <div className='flex flex-col justify-items-center gap-3'>
          {order?.order?.map((product, j) => (
            <div key={`order-product-${j}`} className='flex justify-between pe-5 items-center  bg-white dark:bg-slate-950 dark:text-slate-100 rounded-lg shadow'>
              <div className='flex gap-3 items-center'>
                <img src={product?.product_image} className="w-12 h-12 md:w-20 md:h-20 object-cover rounded-s-lg" alt="" />
                <div>
                  <div className='flex gap-2 items-center'>
                    <p className='text-[14px] font-bold'>{product?.name}</p>
                    <p className='text-[14px]'>x{product?.count}</p>
                  </div>
                  <p>{product?.price * product?.count}€</p>

                </div>
              </div>
            </div>
          ))}
        </div>
      )}


    </div>
  )
}

export default OrderCard