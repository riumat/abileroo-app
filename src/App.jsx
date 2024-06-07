import { Route, Routes } from 'react-router-dom';
import { createContext, useState } from 'react';
import { AuthPage, HomePage, FindPage, ProductsPage, ShopPage, CartPage, FavoritesPage, OrdersPage, CheckoutPage } from './utils/pages'
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar';
import { cartAdder, cartRemover } from './utils/cart';
import { shopAdder, shopRemover } from './utils/shop';
import { addOrder } from './utils/orders';
import { useCart, useFavorites, useLogged, useOrders, useSidebar } from './utils/hooks';
import { axiosBase } from './utils/constants';
import cookie from "react-cookies"
import axios from 'axios';

const App = () => {
  const [summary, setSummary] = useState({});
  const [isSideOpen, setIsSideOpen] = useSidebar();
  const [cart, setCart] = useCart();
  const [favorites, setFavorites] = useFavorites();
  const [orders, setOrders] = useOrders();
  const [isLogged, setIsLogged] = useLogged();

  const addToCart = (product) => {
    setCart(cartAdder(cart, product));
  }

  const removeFromCart = (id) => {
    setCart(cartRemover(cart, id))
  };

  const likeShop = (id) => {
    setFavorites(shopAdder(favorites, id));
  }

  const dislikeShop = (id) => {
    setFavorites(shopRemover(favorites, id));
  }

  const confirmOrder = (cartFormatted, total, deliveryDate, address, email) => {
    setSummary(
      { order: cartFormatted, date: new Date(), total: total, delivery: deliveryDate, address: address, email: "mario.rossi@yopmail.com" }
    );
  }

  const sendOrder = (order, date, total, delivery, address, email) => {
    setOrders(addOrder(orders, order, date, total));
    setCart({ id: "", list: [] });
    const token = "De8WwSRCZvne8BOBFcnOUwFbZTzbXLMJ";
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
        "Content-Type": "multipart/form-data",
        //"Cookie":`csrftoken=${token}; sessionid=${session}` //Refused to set unsafe header "Cookie"
        //"sessionid":session //Response to preflight request doesn't pass access control check
        //"x-csrftoken":token //Response to preflight request doesn't pass access control check
        //Authorization: `Bearer ${token}`
      },
    })
      .then(res => {
        if (res.status === 202) {

          console.log(res.data);
          console.log(res.headers)
        }
        if(res.status===400){
          console.log(res)
        }
      })
      .catch(error => {
        if (error.response.status === 400) {
          console.log(error)
        }
      })

  }

  const logHandle = (logStatus) => {
    setIsLogged(logStatus);
    localStorage.setItem("logged", JSON.stringify(logStatus));
  }

  return (
    <FavoriteCtx.Provider value={favorites}>
      <CartCtx.Provider value={cart}>
        <OrdersCtx.Provider value={orders} >
          <SummaryCtx.Provider value={summary} >

            <main className="absolute w-full h-full t-0 l-0 bg-white dark:bg-slate-950 overflow-hidden">
              <div className='flex flex-col h-full mx-5'>

                {!isLogged ?
                  (
                    <Routes>
                      <Route exact path='/' element={<AuthPage setIsLogged={logHandle} />} />
                    </Routes>
                  )
                  :
                  (
                    <div className="flex flex-col gap-5 overflow-hidden h-full">
                      {isSideOpen && window.innerWidth < 768 && (
                        <div className="bg-mobile" onClick={() => setIsSideOpen(prev => !prev)}></div>
                      )}
                      <Navbar toggleSidebar={() => setIsSideOpen(prev => !prev)} logHandle={logHandle} />
                      <div className="flex gap-3 overflow-hidden h-full">
                        <Sidebar isSideOpen={isSideOpen} logHandle={logHandle} />
                        <div className="flex flex-col gap-5 flex-1 bg-dark rounded-t-lg overflow-auto">

                          <Routes>
                            <Route path='/home' element={<HomePage />} />
                            <Route path='/find' element={<FindPage likeShop={likeShop} dislikeShop={dislikeShop} />} />
                            <Route path='/products' element={<ProductsPage addToCart={addToCart} />} />
                            <Route path='/shop/:shopId' element={<ShopPage addToCart={addToCart} likeShop={likeShop} dislikeShop={dislikeShop} />} />
                            <Route path='/cart' element={<CartPage addToCart={addToCart} removeFromCart={removeFromCart} confirmOrder={confirmOrder} />} />
                            <Route path='/favorites' element={<FavoritesPage likeShop={likeShop} dislikeShop={dislikeShop} />} />
                            <Route path='/orders' element={<OrdersPage />} />
                            <Route path='/checkout' element={<CheckoutPage sendOrder={sendOrder} />} />
                          </Routes>

                        </div>
                      </div>
                    </div>
                  )
                }

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

