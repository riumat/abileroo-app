import { useContext, useEffect, useState } from "react";
import { MdAddShoppingCart, MdErrorOutline } from "react-icons/md";
import { CartCtx } from "../../App";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../redux/cart/cartSlice";

const ProductCard = ({ p }) => {
  const cart = useSelector(state => state.cart);
  const [isAvaiable, setIsAvaiable] = useState(cart?.id === p?.shop || cart?.id === "");
  const navigate = useNavigate();
  const { t } = useTranslation("translation", { keyPrefix: "product-card" })
  const dispatch = useDispatch();

  useEffect(() => {
    setIsAvaiable(cart?.id === p?.shop || cart?.id === "");
  }, [cart])

  const addHandle = (product) => {
    dispatch(add({
      product: product,
      id: product.shop,
    }))
  }

  return (
    <div className="relative flex flex-col w-52 md:w-[230px] h-[350px] items-center justify-between pb-5 gap-2 bg-light rounded-lg">
      {!isAvaiable && (
        <div className="product-filter">
          <MdErrorOutline className="w-6 h-6" />
          <p className="text-center">{t("error.label")}</p>
          <button className="bg-white text-black p-2 rounded-lg" onClick={() => navigate("/cart")}>{t("error.button")}</button>
        </div>
      )}
      <img src={p?.product_image} alt="" className="w-full h-32 object-cover rounded-t-lg" loading="lazy" />
      <div className="flex flex-col items-center gap-2 border-b border-slate-300 py-3  w-full">
        <p className="text-[17px]">{p?.name}</p>
        <p className="text-[10px] text-center">{p?.description}</p>
        <p className="text-[35px]">{p?.price}€</p>
      </div>
      <div className="cursor-pointer py-2 px-5 rounded-lg " onClick={() => addHandle(p)}>
        <MdAddShoppingCart className="w-7 h-7 active:scale-50 active:text-green-500 duration-500" />
      </div>
    </div>

  )
}

export default ProductCard