import { Route, Routes, useNavigate } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';
import "./index.css";
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import AuthPage from './pages/AuthPage';
import CartPage from './pages/CartPage';
import FavoritesPage from './pages/FavoritesPage';
import FindPage from './pages/FindPage';
import OrdersPage from './pages/OrdersPage';
import CheckoutPage from './pages/CheckoutPage';
import ProductsPage from './pages/ProductsPage';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar';
import { cartAdder, cartRemover } from './utils/cart';
import { shopDisliker, shopLiker } from './utils/shop';

const App = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState({});
  const [favorites, setFavorites] = useState([]);
  const [orders, setOrders] = useState([]);
  const [summary, setSummary] = useState({});
  const [isSideOpen, setIsSideOpen] = useState(window.innerWidth > 768);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || { id: "", list: [] });
    setFavorites(JSON.parse(localStorage.getItem("liked")) || []);
    setOrders(JSON.parse(localStorage.getItem("orders")) || []);
    setIsLogged(JSON.parse(localStorage.getItem("logged")) || false);
  }, [])

  useEffect(() => {
    const path = isLogged ? "/home" : "/";
    navigate(path);
  }, [isLogged])

  const addToCart = (product) => {
    setCart(cartAdder(cart,product));
  }

  const removeFromCart = (id) => {
    setCart(cartRemover(cart, id))
  };

  const likeShop = (id) => {
    setFavorites(shopLiker(favorites,id));
  }

  const dislikeShop = (id) => {
    setFavorites(shopDisliker(favorites,id));
  }

  const confirmOrder = (cartFormatted, total, deliveryDate, address, email) => {
    setSummary(
      { order: cartFormatted, date: new Date(), total: total, delivery: deliveryDate, address: address, email: email }
    );
  }

  const sendOrder = (order, date, total) => {
    const added = [...orders, { order: order, date: date, total: total }];
    localStorage.setItem("orders", JSON.stringify(added));
    setOrders(added);
    setCart({ id: "", list: [] });
  }

  const updateSidebar = () => {
    setIsSideOpen(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateSidebar);
    return () => window.removeEventListener("resize", updateSidebar);
  });

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

                {!isLogged ? (
                  <Routes>
                    <Route exact path='/' element={<AuthPage setIsLogged={logHandle} />} />
                  </Routes>
                ) : (
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
                )}

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

