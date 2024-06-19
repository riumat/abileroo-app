import { useEffect, useState } from "react";
import FindShopButton from '../Components/FindShopButton';
import { MdErrorOutline } from 'react-icons/md';
import OrderCard from '../Components/Product/OrderCard';
import { ClipLoader } from 'react-spinners';
import PathViewer from '../Components/Navbar/PathViewer';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getList } from '../redux/order/orderSlice'
import { axiosBase } from "../utils/axios.config";

const OrdersPage = () => {
  const orders = useSelector(state => state.order.list);
  const email = useSelector(state => state.user.email)
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { t } = useTranslation("translation", { keyPrefix: "order-page" })
  const dispatch = useDispatch();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      setIsLoading(true);
      axiosBase.get(`order/orders/?client_email=${email}`, {
        headers: {
          "Authorization": `Token ${token}`
        }
      })
        .then(res => dispatch(getList({ list: res.data })))
        .catch(error => {
          console.log(error)
          setError(true)
        })
        .finally(setIsLoading(false))
    }
    // eslint-disable-next-line
  }, [])

  if (error) {
    return (
      <div className='w-full h-full bg-dark flex justify-center items-center'>
        <p>Failed to fetch data</p>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className='w-full h-full flex justify-center items-center bg-dark '>
        <ClipLoader />
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-5 flex-1 bg-dark rounded-t-lg overflow-auto">
      <div className="flex flex-col gap-3 flex-1 bg-dark rounded-t-lg px-3 overflow-y-auto overflow-x-hidden ">
        <div className="flex gap-3 justify-end">
          <PathViewer />
        </div>
        {orders.length === 0 ? (
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
              {orders.map((order, i) => (
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