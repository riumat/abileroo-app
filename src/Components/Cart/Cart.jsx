import { useContext, useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import CartProductCard from "./CartProductCard";
import { CartCtx } from "../../App";
import FindShopButton from "../FindShopButton";
import { Link, useNavigate } from "react-router-dom";
import UserCard from "./UserCard";

const Cart = ({ addToCart, removeFromCart, confirmOrder }) => {
  const [total, setTotal] = useState(0);
  const [cartFormatted, setCartFormatted] = useState([]);
  const [deliveryDate, setDeliveryDate] = useState();
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState({ date: false, user: false });
  const cart = useContext(CartCtx);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(cart)
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
    }, {}) || {};
    return Object.values(counter);
  }

  const checkout = (cart, total) => {
    if (deliveryDate < new Date()) {
      setIsError({ ...isError, date: true });
      return;
    }
     if (address === "" || email === "") {
      setIsError({ ...isError, user: true });
      return;
    } 
    console.log(deliveryDate);
    confirmOrder(cart, total, deliveryDate, address, email);
    navigate("/checkout");
  }


  return (
    <div className=" rounded-lg flex flex-col gap-2  dark:text-slate-100 text-emerald-950">

      <div className=" flex justify-center bg-white dark:bg-slate-950 shadow py-10 rounded-lg ">
        <FaShoppingCart className="w-10 h-10 " />
      </div>

      <div className="py-4 bg-emerald-50 dark:bg-transparent rounded-lg">
        {cart?.list?.length === 0 ? (
          <div className="flex flex-col items-center gap-10">
            <p className="text-center">Your Cart is Empty.</p>
            <FindShopButton />
          </div>
        ) : (
          <div className="flex flex-col gap-5 items-center">
            <p className="text-[13px] text-slate-600 dark:text-slate-300 text-center">Current Order:</p>
            <div className="flex flex-col lg:flex-row justify-between gap-3 w-full">
              <div className="flex flex-col gap-5 w-full">
                {cartFormatted?.map((product, i) => (
                  <CartProductCard key={`product-cart-${i}`} p={product} addToCart={addToCart} removeFromCart={removeFromCart} />
                ))}
              </div>
              <div className="flex flex-col gap-5">
                <UserCard setDeliverDate={(date) => setDeliveryDate(date)} isError={isError} setAddress={setAddress} setEmail={setEmail} />
                <div className="flex  gap-2">
                  <Link to={`/shop/${cart?.id}`} className="rounded-lg bg-white shadow p-3 text-slate-800 text-center text-[14px] logo-font flex-1">
                    Get More!
                  </Link>
                  <button
                    className="p-3 bg-emerald-900 dark:bg-emerald-800 text-white rounded-lg flex-1" 
                    onClick={() => checkout(cartFormatted, total)}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-around w-full">
              <p className="text-[18px] font-semibold text-center"> Total: {total} €</p>

            </div>


            <div className="text-red-500">
              {isError?.date && (
                <p>Date cannot be prior to this moment.</p>
              )}
              {isError?.user && (
                <p>Please fill the email and address fields.</p>
              )}
            </div>
          </div>

        )}
      </div>
    </div>
  )
}

export default Cart