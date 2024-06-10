import { useContext } from "react";
import { SummaryCtx } from "../App";
import { Link } from "react-router-dom";
import { FaBackspace, FaCheck } from "react-icons/fa";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar";
import { useSidebar } from "../utils/hooks";


const CheckoutPage = ({ sendOrder, logHandle }) => {
  const summary = useContext(SummaryCtx);
  const [isSideOpen, setIsSideOpen] = useSidebar();


  return (
    <>
      <div className="flex flex-col gap-5 overflow-hidden h-full">
        {isSideOpen && window.innerWidth < 768 && (
          <div className="bg-mobile" onClick={() => setIsSideOpen(prev => !prev)}></div>
        )}
        <Navbar toggleSidebar={() => setIsSideOpen(prev => !prev)} logHandle={logHandle} />
        <div className="flex gap-3 overflow-hidden h-full">
          <Sidebar isSideOpen={isSideOpen} logHandle={logHandle} />
          <div className="flex flex-col gap-5 flex-1 bg-dark rounded-t-lg overflow-auto">


            <div className="flex flex-col gap-5 flex-1 bg-emerald-50 dark:bg-emerald-950/70 rounded-lg p-3 overflow-auto text-[14px] text-slate-700">
              <p className="logo-font text-[20px] text-center dark:text-slate-100">Order Summary</p>

              <div className="rounded-lg shadow bg-white p-3 flex flex-col gap-3 dark:text-slate-300 dark:bg-slate-950">
                <p>Your Informations:</p>
                <p>Email: <span className="text-slate-950 dark:text-white font-bold">{summary.email}</span></p>

                <p>Address: <span className="text-slate-950 dark:text-white font-bold">{summary.address}</span></p>

                <p>Delivery Date: <span className="text-slate-950 dark:text-white font-bold">{`${new Date(summary.delivery).toLocaleString("it")}`}</span></p>
              </div>
              <div className="rounded-lg shadow bg-white p-3 flex flex-col gap-3 dark:text-slate-300 dark:bg-slate-950">
                <p>Your Order: </p>
                {summary?.order?.map((product, index) => (
                  <div key={`summary-product-${index}`}>
                    <p className="text-slate-950 dark:text-white font-bold">{product.name} - x{product.count}</p>
                  </div>
                ))}

                <p>Total: <span className="text-slate-950 dark:text-white font-bold">{summary.total}€</span></p>
              </div>
              <div className="flex md:flex-row flex-col gap-5 w-full">
                <button
                  onClick={() => sendOrder(summary.order, summary.date, summary.total, summary.delivery, summary.address, summary.email)}
                  className="rounded-lg bg-emerald-800 dark:bg-emerald-700 text-white p-2 flex-1 flex justify-center gap-2 items-center"
                >
                  <FaCheck className="w-5 h-5" />
                  <p>Confirm and Place Order</p></button>

                <Link className="flex-1 rounded-lg border shadow bg-white p-2 flex justify-center gap-2 items-center" to={"/cart"}>
                  <FaBackspace className="w-5 h-5" />
                  <p>Go back to cart</p>
                </Link>
              </div>
            </div>


          </div>
        </div>
      </div>
    </>

  )
}

export default CheckoutPage