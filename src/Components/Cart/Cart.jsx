import { useContext, useEffect, useState } from "react";
import CartProductCard from "./CartProductCard";
import { CartCtx } from "../../App";
import { Link, useNavigate } from "react-router-dom";
import UserCard from "./UserCard";

const Cart = ({ addToCart, removeFromCart, confirmOrder }) => {
  const [total, setTotal] = useState(0);
  const [cartFormatted, setCartFormatted] = useState([]);
  const [deliveryDate, setDeliveryDate] = useState();
  const [address, setAddress] = useState("");
  const [isError, setIsError] = useState({ date: false, user: false });
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

  const checkout = (cart, total) => {
    if (address === "") {
      setIsError({ ...isError, user: true });
      return;
    }
    if (new Date(deliveryDate) < new Date() || isNaN(new Date(deliveryDate))) {
      setIsError({ ...isError, date: true });
      return;
    }

    confirmOrder(cart, total, deliveryDate, address);
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
            <div className="flex flex-col gap-10 flex-1">
              <UserCard setDeliverDate={(date) => setDeliveryDate(date)} isError={isError} setAddress={setAddress} />
              <div className="flex  gap-2">
                <Link to={`/shop/${cart?.id}`} className="rounded-lg bg-white shadow p-3 text-slate-800 text-[15px] logo-font flex items-center justify-center flex-1">
                  Forgot Something?
                </Link>
                <button
                  className="p-3 bg-emerald-900 dark:bg-emerald-700 text-white text-[17px] rounded-lg flex-1"
                  onClick={() => checkout(cartFormatted, total)}
                >
                  Checkout
                </button>

              </div>
              <p className="text-[30px] dark:text-slate-200 "> Total: <span className="font-bold dark:text-white">{total} €</span></p>

            </div>
          </div>
          <div className="flex justify-around w-full">

          </div>


          <div className="text-red-500">
            {isError?.date && (
              <p>Please select a valid date.</p>
            )}
            {isError?.user && (
              <p>Please fill the address field.</p>
            )}
          </div>
        </div>


      </div>
    </div>
  )
}

export default Cart