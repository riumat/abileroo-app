import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBackspace, FaCheck } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { addToList, sendOrder } from "../redux/order/orderSlice";
import LoadingDisplay from "../Components/LoadingDisplay";
import ErrorDisplay from "../Components/ErrorDisplay";

const CheckoutPage = () => {
  const { success, checkout, isLoading, error } = useSelector(state => state.order);
  const { t } = useTranslation("translation", { keyPrefix: "check-page" });
  const date = new Date(checkout?.delivery).toLocaleString("it");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const orderHandle = ({ order, date, total, delivery, address, email }) => {
    dispatch(addToList({
      order: {
        order: order,
        date: date,
        total: total
      }
    }))

    dispatch(sendOrder({ order: order, delivery: delivery, address: address, email: email }));
  }

  useEffect(() => {
    if (success) navigate("/home");
    if (!checkout && !success) navigate(-1);
    // eslint-disable-next-line
  }, [checkout, success])

  if (isLoading) return <LoadingDisplay />
  if (error) return <ErrorDisplay />

  return (
    <div className="flex flex-col gap-5 flex-1 bg-dark rounded-t-lg overflow-auto">
      <div className="flex flex-col gap-5 flex-1 bg-dark rounded-lg p-3 overflow-auto text-[14px] text-slate-700">
        <p className="logo-font text-[20px] text-center dark:text-slate-100">{t("title")}</p>

        <div className="rounded-lg shadow bg-white p-3 flex flex-col gap-3 dark:text-slate-300 dark:bg-slate-950">
          <p>{t("info.title")}:</p>
          <p>Email: <span className="text-slate-950 dark:text-white font-bold">{checkout?.email}</span></p>

          <p>{t("info.address")}: <span className="text-slate-950 dark:text-white font-bold">{checkout?.address}</span></p>

          <p>{t("info.date")}: <span className="text-slate-950 dark:text-white font-bold">{date ?? ""}</span></p>
        </div>

        <div className="rounded-lg shadow bg-white p-3 flex flex-col gap-3 dark:text-slate-300 dark:bg-slate-950">
          <p>{t("order.title")}: </p>
          {checkout?.order?.map((product, index) => (
            <div key={`summary-product-${index}`}>
              <p className="text-slate-950 dark:text-white font-bold">{product.name} - x{product.count}</p>
            </div>
          ))}

          <p>{t("order.total")}: <span className="text-slate-950 dark:text-white font-bold">{checkout?.total}€</span></p>
        </div>

        <div className="flex md:flex-row flex-col gap-5 w-full">
          <button
            onClick={() => orderHandle(checkout)}
            className="rounded-lg bg-emerald-800 dark:bg-emerald-700 text-white p-2 flex-1 flex justify-center gap-2 items-center"
          >
            <FaCheck className="w-5 h-5" />
            <p>{t("buttons.confirm")}</p></button>

          <Link className="flex-1 rounded-lg border shadow bg-white p-2 flex justify-center gap-2 items-center" to={"/cart"}>
            <FaBackspace className="w-5 h-5" />
            <p>{t("buttons.back")}</p>
          </Link>
        </div>

      </div>


    </div>
  )
}

export default CheckoutPage