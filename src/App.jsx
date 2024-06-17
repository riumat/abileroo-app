import { Route, Routes } from 'react-router-dom';
import { createContext, useState } from 'react';
import { AuthPage, HomePage, FindPage, ProductsPage, ShopPage, CartPage, FavoritesPage, OrdersPage, CheckoutPage } from './utils/pages'
import { cartAdder, cartRemover } from './utils/cart';
import { shopAdder, shopRemover } from './utils/shop';
import { addOrder } from './utils/orders';
import { useCart, useFavorites, useLogged, useOrders } from './utils/hooks';
import { axiosBase } from './utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { add } from "./redux/cart/cartSlice";

const App = () => {
  const [summary, setSummary] = useState({});
  const [isLogged, setIsLogged] = useLogged();
  const [cart, setCart] = useCart();
  const [favorites, setFavorites] = useFavorites();
  const [orders, setOrders] = useOrders(isLogged);
  const email = useSelector(state => state.user.email);
  const dispatch = useDispatch();
  const cartSelector = useSelector(state => state.cart);
 
 
  const likeShop = (id) => {
    setFavorites(shopAdder(favorites, id));
  }

  const dislikeShop = (id) => {
    setFavorites(shopRemover(favorites, id));
  }

  const confirmOrder = (cartFormatted, total, deliveryDate, address) => {
    setSummary(
      { order: cartFormatted, date: new Date(), total: total, delivery: deliveryDate, address: address, email: email }
    );
  }

  const sendOrder = (order, date, total, delivery, address, email) => {
    setOrders(addOrder(orders, order, date, total));
    setCart({ id: "", list: [] });
    const token = localStorage.getItem("token");
    const session = "bxsii2ks45pkgj39i7iseaxmhnrvp9hb";

    const details = [...order].map(product => (
      { product: product.id, amount: product.count }
    ))

    const body = new FormData();
    body.append("shop", order[0].shop);
    body.append("date_time_delivery", delivery);
    body.append("address", address);
    body.append("client_email", email);
    body.append("shipped", false);
    body.append("delivered", false);
    body.append("details", details);

    axiosBase({
      url: "order/order-create/",
      method: "post",
      data: body,
      headers: {
        "Content-Type": "multipart/form-data", //application/x-www-form-urlencoded
        "Authorization": `Token ${localStorage.getItem("token")}`
      },
    })
      .then(res => {
        console.log(res)
        /*  if (res.status === 201) {
           console.log("added")
           console.log(res.data);
           console.log(res.headers)
         }
         if (res.status === 400) {
           console.log(res)
         } */
      })
      .catch(error => {
        console.log(error)
      })

  }

  const logHandle = (logStatus) => {
    setIsLogged(logStatus);
    localStorage.setItem("logged", JSON.stringify(logStatus));
    if (!logStatus) localStorage.removeItem("credentials");
  }

  return (
    <FavoriteCtx.Provider value={favorites}>
      <CartCtx.Provider value={cart}>
        <OrdersCtx.Provider value={orders} >
          <SummaryCtx.Provider value={summary} >

            <main className="absolute w-full h-full t-0 l-0 bg-white dark:bg-slate-950 overflow-hidden">
              <div className='flex flex-col h-full mx-5'>

                <Routes>
                  <Route exact path='/' element={<AuthPage setIsLogged={logHandle} />} />
                  <Route path='/home' element={<HomePage logHandle={logHandle} />} />
                  <Route path='/find' element={<FindPage likeShop={likeShop} dislikeShop={dislikeShop} logHandle={logHandle} />} />
                  <Route path='/products' element={<ProductsPage logHandle={logHandle} />} />
                  <Route path='/shop/:shopId' element={<ShopPage  likeShop={likeShop} dislikeShop={dislikeShop} logHandle={logHandle} />} />
                  <Route path='/cart' element={<CartPage confirmOrder={confirmOrder} logHandle={logHandle} />} />
                  <Route path='/favorites' element={<FavoritesPage likeShop={likeShop} dislikeShop={dislikeShop} logHandle={logHandle} />} />
                  <Route path='/orders' element={<OrdersPage logHandle={logHandle} />} />
                  <Route path='/checkout' element={<CheckoutPage sendOrder={sendOrder} logHandle={logHandle} />} />
                </Routes>

              </div>

            </main>
          </SummaryCtx.Provider>
        </OrdersCtx.Provider>
      </CartCtx.Provider>
    </FavoriteCtx.Provider>
  );
}

export default App;
export const CartCtx = createContext();
export const FavoriteCtx = createContext();
export const OrdersCtx = createContext();
export const SummaryCtx = createContext();

