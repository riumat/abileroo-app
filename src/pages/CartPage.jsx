import Cart from "../Components/Cart/Cart"
import Navbar from "../Components/Navbar/Navbar"
import Sidebar from "../Components/Sidebar"

const CartPage = () => {
  return (
    <div className="flex flex-col gap-5">
      <Navbar />
      <div className="flex gap-3">
        <Sidebar />
        <div className="flex flex-col gap-5 flex-1">
          <Cart />
        </div>

      </div>
    </div>
  )
}

export default CartPage