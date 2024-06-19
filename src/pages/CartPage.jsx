import Cart from "../Components/Cart/Cart"
import { MdErrorOutline } from "react-icons/md";
import FindShopButton from "../Components/FindShopButton";
import PathViewer from "../Components/Navbar/PathViewer";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const CartPage = () => {
  const cart = useSelector(state => state.cart);
  const { t } = useTranslation("translation", { keyPrefix: "cart-page" })

  return (
          <div className="flex flex-col gap-5 flex-1 bg-dark rounded-t-lg overflow-auto">
            <div className="flex flex-col gap-5 flex-1 rounded-lg px-3 overflow-auto bg-dark shadow-none">
              <div className="flex gap-3 justify-end">
                <PathViewer />
              </div>
              {cart?.list?.length === 0 ? (
                <div className="flex flex-col items-center gap-10 pt-8">
                  <MdErrorOutline className="text-black dark:text-slate-100 w-6 h-6" />
                  <p className="text-center text-slate-800 dark:text-slate-200 text-[18px]">{t("empty")}</p>
                  <FindShopButton />
                </div>
              ) : (
                <div>
                  <div className='p-3'>
                    <p className="logo-font text-[30px] text-center pt-5 dark:text-slate-100">{t("title")}</p>
                  </div>
                  <Cart />
                </div>
              )}
            </div>
          </div>
  )
}

export default CartPage