import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./index.css";
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import AuthPage from './pages/AuthPage';
import CartPage from './pages/CartPage';
import { createContext, useEffect, useState } from 'react';

const App = () => {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
    setFavorites(JSON.parse(localStorage.getItem("liked")) || []);
  }, [])

  const addToCart = ({ id, name, price, product_image }) => {
    //const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const added = [...cart, { "id": id, "name": name, "price": price, "product_image": product_image }];
    localStorage.setItem("cart", JSON.stringify(added));
    setCart([...added]);
  }

  const removeFromCart = (index) => {
    const removed = [...cart].splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(removed));
    setCart([...removed]);
  }

  const likeShop = (id) => {
    const added = [...favorites,id];
    localStorage.setItem("liked", JSON.stringify(added));
    setFavorites(added);
  }

  const dislikeShop = (id) => {
    const removed = [...favorites]
    const index = favorites.indexOf(id);
    if (index != -1) {
      removed.splice(index, 1);
    }
    localStorage.setItem("liked", JSON.stringify(removed));
    setFavorites(removed);
  }


  return (
    <BrowserRouter>
      <FavoriteCtx.Provider value={favorites}>
        <CartCtx.Provider value={cart}>
          <main className="absolute w-full h-full t-0 l-0 bg-white dark:bg-slate-950 overflow-hidden">

            <div className='flex flex-col h-full mx-5'>
              <Routes>
                <Route exact path='/' element={<AuthPage />} />
                <Route path='/home' element={<HomePage likeShop={likeShop} dislikeShop={dislikeShop} />} />
                <Route path='/shop/:shopId' element={<ShopPage addToCart={addToCart} likeShop={likeShop} dislikeShop={dislikeShop} />} />
                <Route path='/cart' element={<CartPage addToCart={addToCart} removeFromCart={removeFromCart} />} />
              </Routes>
            </div>

          </main>
        </CartCtx.Provider>
      </FavoriteCtx.Provider>
    </BrowserRouter >

  );
}

export default App;
export const CartCtx = createContext();
export const FavoriteCtx = createContext();
