import { useContext, useEffect, useState } from "react";
import CartProductCard from "./CartProductCard";
import { CartCtx } from "../../App";
import { Link, useNavigate } from "react-router-dom";
import UserCard from "./UserCard";

const Cart = ({ addToCart, removeFromCart, confirmOrder }) => {
  const [total, setTotal] = useState(0);
  const [cartFormatted, setCartFormatted] = useState([]);
  const cart = useContext(CartCtx);
  const navigate = useNavigate();

  useEffect(() => {
    setTotal(getTotal());
    setCartFormatted(getCartFormatted());
  }, [cart?.list]);

  const getTotal = () => {
    return cart?.list?.reduce((current, product) => current + product.price, 0);
  }

  const getCartFormatted = () => {
    const counter = cart?.list?.reduce((obj, product) => {
      if (!obj[product.id]) {
        obj[product.id] = { ...product, count: 0 };
      }
      obj[product.id].count++;
      return obj;
    }, {}) ?? {};
    return Object.values(counter);
  }
  /* 
    const checkout = (cart, total) => {
      confirmOrder(cart, total, deliveryDate, address);
      navigate("/checkout");
    } */

  const onSubmit = (data) => {
    confirmOrder(cartFormatted, total, data.date, data.address);
    navigate("/checkout");
  }

  return (
    <div className="flex flex-col gap-2 ">

      <div className="py-4 rounded-lg">

        <div className="flex flex-col gap-5 items-center">
          <div className="flex flex-col lg:flex-row justify-between gap-3 w-full">
            <div className="flex flex-col gap-5 w-full flex-1">
              {cartFormatted?.map((product, i) => (
                <CartProductCard key={`product-cart-${i}`} p={product} addToCart={addToCart} removeFromCart={removeFromCart} />
              ))}
            </div>
            <div className="flex-1">
              <UserCard onSubmit={onSubmit} shopId={cart?.id} total={total} />
            </div>
          </div>

        </div>


      </div>
    </div>
  )
}

export default Cart