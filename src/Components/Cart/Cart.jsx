import CartProductCard from "./CartProductCard";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCheckout } from "../../redux/order/orderSlice";
import CartInfoForm from "./CartInfoForm";

const Cart = () => {
  const { id, listFormatted, total } = useSelector(state => state.cart);
  const { email } = useSelector(state => state.auth.userInfo)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(setCheckout({
      checkout: {
        order: listFormatted,
        date: new Date().toISOString(),
        total: total,
        delivery: data.date,
        address: data.address,
        email: email
      }
    }))
    navigate("/checkout");
  }

  return (
    <div className="flex flex-col lg:flex-row justify-between gap-3 w-full px-3 pt-5">

      <div className="flex flex-col gap-5 w-full flex-1">
        {listFormatted?.map((product, i) => (
          <CartProductCard key={`product-cart-${i}`} p={product} />
        ))}
      </div>

      <div className="flex-1">
        <CartInfoForm onSubmit={onSubmit} shopId={id} total={total} />
      </div>

    </div>
  )
}

export default Cart