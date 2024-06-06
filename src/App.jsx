import { Route, Routes, useNavigate } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';
import { AuthPage, HomePage, FindPage, ProductsPage, ShopPage, CartPage, FavoritesPage, OrdersPage, CheckoutPage } from './utils/pages'
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar';
import { cartAdder, cartRemover } from './utils/cart';
import { shopDisliker, shopLiker } from './utils/shop';
import { addOrder } from './utils/orders';
import { useCart, useFavorites, useLogged, useOrders, useSidebar } from './utils/hooks';

const App = () => {
  const navigate = useNavigate();
  const [summary, setSummary] = useState({});
  const [isSideOpen, setIsSideOpen] = useSidebar();
  const [cart, setCart] = useCart();
  const [favorites, setFavorites] = useFavorites();
  const [orders, setOrders] = useOrders();
  const [isLogged, setIsLogged] = useLogged();

  useEffect(() => {
    const path = isLogged ? "/home" : "/";
    navigate(path);
  }, [isLogged])

  const addToCart = (product) => {
    setCart(cartAdder(cart, product));
  }

  const removeFromCart = (id) => {
    setCart(cartRemover(cart, id))
  };

  const likeShop = (id) => {
    setFavorites(shopLiker(favorites, id));
  }

  const dislikeShop = (id) => {
    setFavorites(shopDisliker(favorites, id));
  }

  const confirmOrder = (cartFormatted, total, deliveryDate, address, email) => {
    setSummary(
      { order: cartFormatted, date: new Date(), total: total, delivery: deliveryDate, address: address, email: email }
    );
  }

  const sendOrder = (order, date, total) => {
    setOrders(addOrder(orders, order, date, total));
    setCart({ id: "", list: [] });
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

