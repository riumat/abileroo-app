import { useContext, useEffect, useState } from "react"
import { OrdersCtx } from "../../App"
import { useSelector } from "react-redux";

const History = () => {
  const [last, setLast] = useState({});
  const orders = useSelector(state=>state.order.list);

  useEffect(() => {
    setLast(orders[orders.length - 1])
  }, [orders])

  return (
    <div className="w-full ">
      {orders?.length === 0 ? (
        <div className="p-3 shadow bg-white rounded-b-lg rounded-tr-lg dark:bg-slate-950 dark:text-slate-100 ">
          <p className="text-center text-[14px] dark:text-slate-100 text-slate-700">Empty. You did not place any order yet </p>
        </div>
      ) : (
        <div className="shadow bg-white rounded-b-lg rounded-tr-lg flex flex-col gap-2 p-3 dark:bg-slate-950  dark:text-slate-100">
          <p className="text-center text-[13px] text-slate-700 dark:text-slate-200 pb-2 border-b ">See what you got last time</p>
          <div className="flex gap-1 text-[14px]">
            {last?.order?.map((product, i) => (
              <div key={`product-order-showcase-${i}`}>
                <p>{`${product.name}${i === last.order.length - 1 ? "" : ","}`}</p>
              </div>
            ))}
          </div>
          <p>Total: {last?.total}€</p>

        </div>
      )}

    </div>
  )
}

export default History