import { useContext, useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import CartProductCard from "./CartProductCard";
import { CartCtx } from "../../App";
import { Link } from "react-router-dom";

const Cart = ({ addToCart, removeFromCart }) => {
  const [total, setTotal] = useState(0);
  const [cartFormatted, setCartFormatted] = useState([]);
  const cart = useContext(CartCtx);

  useEffect(() => {
    setTotal(getTotal());
    setCartFormatted(getCartFormatted());
  }, [cart]);

  const getTotal = () => {
    return cart?.reduce((current, product) => current + product.price, 0);
  }

  const getCartFormatted = () => {
    const counter = cart?.reduce((obj, product) => {
      if (!obj[product.id]) {
        obj[product.id] = { ...product, count: 0 };
      }
      obj[product.id].count++;
      return obj;
    }, {}) || {};
    console.log(Object.values(counter))
    return Object.values(counter);
  }


  const sendOrder = () => {
    console.log(cartFormatted);
    /*  axios.post("",{
 
     }) */

  }

  return (
    <div className=" rounded-lg flex flex-col gap-2  dark:text-slate-100 text-emerald-950">

      <div className=" flex justify-center bg-white dark:bg-slate-950 shadow py-10 rounded-lg ">
        <FaShoppingCart className="w-10 h-10 " />
      </div>

      <div className="py-4 bg-emerald-50 dark:bg-transparent rounded-lg">
        {cart?.length === 0 ? (
          <div className="flex flex-col items-center gap-10">
            <p className="text-center">Your Cart is Empty.</p>
            <Link to={"/home"} className="p-2 rounded-lg bg-emerald-900 text-slate-100 text-[14px] font-bold">Find a shop</Link>
          </div>
        ) : (
          <div className="flex flex-col gap-5 ">
            <p className="text-[13px] text-slate-600 dark:text-slate-300 text-center">Current Order:</p>
            <div className="flex flex-col gap-5">
              {cartFormatted?.map((product, i) => (
                <CartProductCard key={`product-cart-${i}`} p={product} removeFromCart={removeFromCart} addToCart={addToCart} index={i} />
              ))}
            </div>
            <p className="text-[18px] font-semibold text-center"> Total: {total} €</p>
            <button className="p-3 bg-emerald-900 dark:bg-emerald-800 text-white rounded-lg " onClick={sendOrder}>Checkout</button>
          </div>

        )}
      </div>
    </div>
  )
}

export default Cart