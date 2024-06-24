import { useEffect } from "react";
import FindShopButton from '../Components/FindShopButton';
import { MdErrorOutline } from 'react-icons/md';
import OrderCard from '../Components/Product/OrderCard';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderList } from '../redux/order/orderSlice'
import ErrorDisplay from "../Components/ErrorDisplay";
import LoadingDisplay from "../Components/LoadingDisplay";

const OrdersPage = () => {
  const { orderList, error, isLoading } = useSelector(state => state.order);
  const { t } = useTranslation("translation", { keyPrefix: "order-page" })
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrderList());
  }, [])

  if (error) return <ErrorDisplay />
  if (isLoading) return <LoadingDisplay />

  return (
    <div className="flex flex-col gap-5 flex-1 bg-dark rounded-t-lg overflow-auto">
      <div className="flex flex-col gap-3 flex-1 bg-dark rounded-t-lg px-3 overflow-y-auto overflow-x-hidden ">
        <div className="flex gap-3 justify-end">
        </div>
        {orderList.length === 0 ? (
          <div className="flex flex-col items-center gap-10 pt-8">
            <MdErrorOutline className="text-black dark:text-slate-100 w-6 h-6" />
            <p className="text-center text-slate-800 dark:text-slate-200 text-[18px]">{t("empty")}</p>
            <FindShopButton />
          </div>
        ) : (
          <div>
            <div className='  p-3 '>
              <p className="logo-font text-[30px] text-center pt-5 dark:text-slate-100">{t("title")}</p>

            </div>

            <div className='p-2 rounded-lg flex flex-col gap-5'>
              {orderList.map((order, i) => (
                <OrderCard key={`order-card-${i}`} order={order} i={i} />
              ))}
            </div>
          </div>
        )}
      </div>


    </div>
  )
}

export default OrdersPage