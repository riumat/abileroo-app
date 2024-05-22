import axios from "axios";

const CartSection = ({ cart, shopId, removeFromCart }) => {
  
  const sendOrder = () => {
    axios.post("", {
      "id": 1,
      "shop": shopId,
      "date_time_delivery": "2022-12-22T13:08:04Z",
      "address": "Via Roma 50, Cagliari CA",
      "client_email": "mariorossi@gmail.com",
      "shipped": false,
      "delivered": false,
      "details": [
        {
          "id": 2,
          "order": 2,
          "product": 1,
          "amount": 1
        }
      ]
    })
      .then(res => console.log(res.data))
      .catch(error => console.log(error))
  }

  return (
    <div>
      <ul>
        <p>Selected products</p>
        <div className="flex flex-col gap-1">
          {cart?.map((p, i) => (
            <li key={`cart-${i}`} className="flex justify-between hover:bg-slate-200 p-2 rounded-xl">
              <p className="flex-1">{`Name: ${p.name} - Price: ${p.price}€`}</p>
              <button className="bg-red-800 text-white p-2 text-[13px] rounded-xl" onClick={() => removeFromCart(i)}>Remove</button>
            </li>
          ))}
        </div>
      </ul>
      <button className="p-3 bg-blue-600 text-white rounded-2xl " onClick={sendOrder}>Click to Order</button>
    </div>

  )
}

export default CartSection