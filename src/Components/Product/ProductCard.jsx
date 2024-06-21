import { useContext, useEffect, useState } from "react";
import { MdAddShoppingCart, MdErrorOutline } from "react-icons/md";
import { CartCtx } from "../../App";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../redux/cart/cartSlice";
import { LuPlusCircle } from "react-icons/lu";



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
    <div className="relative flex flex-col w-52 md:w-[256px] h-[320px] items-center pb-5 gap-2 bg-light rounded-lg">
      {!isAvaiable && (
        <div className="product-filter">
          <MdErrorOutline className="w-6 h-6" />
          <p className="text-center">{t("error.label")}</p>
          <button className="bg-white text-black p-2 rounded-lg" onClick={() => navigate("/cart")}>{t("error.button")}</button>
        </div>
      )}


      <img src={p?.product_image} alt="" className="w-full h-36 object-cover rounded-xl" loading="lazy" />
      <div className="flex flex-col items-center gap-2 py-3 w-full">
        <p className="text-[17px] font-bold text-orange-950">{p?.name}</p>
        <p className="text-[10px] text-center line-clamp-2 text-orange-900">{p?.description}</p>
        <div className="flex justify-between items-center">
          <p className="text-[35px]">{p?.price}€</p>
          <div className="cursor-pointer py-2 px-5 rounded-lg " onClick={() => addHandle(p)}>
        <LuPlusCircle className="w-8 h-8 active:scale-50 active:text-green-500 duration-500" />
      </div>
        </div>
      </div>
     
    </div>

  )
}

export default ProductCard