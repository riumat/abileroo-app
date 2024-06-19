import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBackspace, FaCheck } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { deleteAll } from "../redux/cart/cartSlice";
import { addToList } from "../redux/order/orderSlice";
import { axiosBase } from "../utils/axios.config";

const CheckoutPage = () => {
  const summary = useSelector(state => state.order.checkout);
  const { t } = useTranslation("translation", { keyPrefix: "check-page" });
  const date = new Date(summary.delivery).toLocaleString("it");
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
    dispatch(deleteAll());

    const details = [...order].map(product => (
      { product: product.id, amount: product.count }
    ))

    const body = new FormData();
    body.append("shop", order[0].shop);
    body.append("date_time_delivery", delivery);
    body.append("address", address);
    body.append("client_email", email);
    body.append("shipped", false);
    body.append("delivered", false);
    body.append("details", details);

    axiosBase({
      url: "order/order-create/",
      method: "post",
      data: body,
      headers: {
        "Content-Type": "multipart/form-data", //application/x-www-form-urlencoded
        "Authorization": `Token ${localStorage.getItem("token")}`
      },
    })
      .then(res => {
        console.log(res)
        /*  if (res.status === 201) {
           console.log("added")
           console.log(res.data);
           console.log(res.headers)
         }
         if (res.status === 400) {
           console.log(res)
         } */
      })
      .catch(error => {
        console.log(error)
      })
  }
  useEffect(() => {
    if (!summary) navigate(-1);
  }, [])

  return (
    <div className="flex flex-col gap-5 flex-1 bg-dark rounded-t-lg overflow-auto">
      <div className="flex flex-col gap-5 flex-1 bg-dark rounded-lg p-3 overflow-auto text-[14px] text-slate-700">
        <p className="logo-font text-[20px] text-center dark:text-slate-100">{t("title")}</p>

        <div className="rounded-lg shadow bg-white p-3 flex flex-col gap-3 dark:text-slate-300 dark:bg-slate-950">
          <p>{t("info.title")}:</p>
          <p>Email: <span className="text-slate-950 dark:text-white font-bold">{summary.email}</span></p>

          <p>{t("info.address")}: <span className="text-slate-950 dark:text-white font-bold">{summary.address}</span></p>

          <p>{t("info.date")}: <span className="text-slate-950 dark:text-white font-bold">{date}</span></p>
        </div>

        <div className="rounded-lg shadow bg-white p-3 flex flex-col gap-3 dark:text-slate-300 dark:bg-slate-950">
          <p>{t("order.title")}: </p>
          {summary?.order?.map((product, index) => (
            <div key={`summary-product-${index}`}>
              <p className="text-slate-950 dark:text-white font-bold">{product.name} - x{product.count}</p>
            </div>
          ))}

          <p>{t("order.total")}: <span className="text-slate-950 dark:text-white font-bold">{summary.total}€</span></p>
        </div>

        <div className="flex md:flex-row flex-col gap-5 w-full">
          <button
            onClick={() => orderHandle(summary)}
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