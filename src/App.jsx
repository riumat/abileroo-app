import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./index.css";

import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import AuthPage from './pages/AuthPage';
import CartPage from './pages/CartPage';
import { createContext, useEffect, useState } from 'react';
export const CartCtx = createContext();

const App = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, [])

  return (
    <BrowserRouter>
      <CartCtx.Provider value={cart}>
        <main className="absolute w-full h-full t-0 l-0 bg-white dark:bg-slate-950 overflow-hidden">

          <div className='flex flex-col h-full mx-5'>
            <Routes>
              <Route exact path='/' element={<AuthPage />} />
              <Route path='/home' element={<HomePage />} />
              <Route path='/shop/:shopId' element={<ShopPage setCart={setCart} />} />
              <Route path='/cart' element={<CartPage setCart={setCart} />} />
            </Routes>
          </div>

        </main>
      </CartCtx.Provider>

    </BrowserRouter >

  );
}

export default App;
