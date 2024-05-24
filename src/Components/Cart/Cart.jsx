import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

const Cart = ({ cart, removeFromCart }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = cart?.reduce((current, product) => current + product.price, 0);
    setTotal(newTotal);
  }, [cart]);

  const sendOrder = () => {
    console.log("success");
    /*  axios.post("",{
 
     }) */
  }

  return (
      <div className="bg-white rounded-lg shadow w-64 lg:flex flex-col px-5 hidden ">
        <div className="py-10 flex justify-center">
          <FaShoppingCart className="w-10 h-10 " />
        </div>

        <div className="py-4 border-t border-slate-400">
          {cart?.length === 0 ? (
            <p className="text-center">Your Cart is Empty.</p>

          ) : (
            <div className="flex flex-col gap-5">
              <p className="text-[13px] text-slate-600 text-center">Current Order:</p>
              <div className="flex flex-col gap-2">
                {cart?.map((product, i) => (
                  <div
                    key={`cart-${i}`}
                    className={`flex justify-between text-[14px] py-1 ${i === cart.length - 1 ? "" : "border-b border-slate-300"}`}
                  >
                    <p >{i + 1} - {product.name} </p>
                    <FaRegTrashAlt className="cursor-pointer" onClick={() => removeFromCart(i)} />
                  </div>
                ))}
              </div>
              <p className="text-[18px] font-semibold text-center"> Total: {total} €</p>
              <button className="p-3 bg-blue-900 text-white rounded-lg " onClick={sendOrder}>Send Order</button>
            </div>


          )}
        </div>
      </div>
  )
}

export default Cart