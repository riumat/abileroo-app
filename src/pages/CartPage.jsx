import Cart from "../Components/Cart/Cart"
import { MdErrorOutline } from "react-icons/md";
import FindShopButton from "../Components/FindShopButton";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import AnimatedPage from "./AnimatedPage";

const CartPage = () => {
  const cart = useSelector(state => state.cart);
  const { t } = useTranslation("translation", { keyPrefix: "cart-page" })

  return (
    <AnimatedPage>
      <div className="flex flex-col gap-5 flex-1 bg-dark rounded-t-lg overflow-auto">
        <div className="flex flex-col gap-5 flex-1 rounded-lg  overflow-auto bg-dark shadow-none">
          <div className="flex gap-3 justify-end">
          </div>
          {cart?.list?.length === 0 ? (
            <div className="flex flex-col items-center gap-10 pt-8">
              <MdErrorOutline className="text-orange-950 dark:text-orange-50 w-6 h-6" />
              <p className="text-center text-orange-950 dark:text-orange-50 text-[18px]">{t("empty")}</p>
              <FindShopButton />
            </div>
          ) : (
            <div>
              <div className="bg-gradient-to-r from-black to-95% to-amber-950 flex justify-center py-5">
                <p className="text-gradient from-white via-yellow-200 to-orange-200 page-title">{t("title")}</p>
              </div>
              <Cart />
            </div>
          )}
        </div>
      </div>
    </AnimatedPage>
  )
}

export default CartPage