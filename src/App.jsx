import { Route, Routes } from 'react-router-dom';
import { createContext, useState } from 'react';
import { AuthPage, HomePage, FindPage, ProductsPage, ShopPage, CartPage, FavoritesPage, OrdersPage, CheckoutPage } from './utils/pages'
import { shopAdder, shopRemover } from './utils/shop';
import { addOrder } from './utils/orders';
import { useCart, useFavorites, useLogged, useOrders } from './utils/hooks';
import { axiosBase } from './utils/constants';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const [isLogged, setIsLogged] = useLogged();
  const [favorites, setFavorites] = useFavorites();

  const likeShop = (id) => {
    setFavorites(shopAdder(favorites, id));
  }

  const dislikeShop = (id) => {
    setFavorites(shopRemover(favorites, id));
  }
 
  const logHandle = (logStatus) => {
    setIsLogged(logStatus);
    localStorage.setItem("logged", JSON.stringify(logStatus));
    if (!logStatus) localStorage.removeItem("credentials");
  }

  return (
    <FavoriteCtx.Provider value={favorites}>

        <main className="absolute w-full h-full t-0 l-0 bg-white dark:bg-slate-950 overflow-hidden">
          <div className='flex flex-col h-full mx-5'>

            <Routes>
              <Route exact path='/' element={<AuthPage setIsLogged={logHandle} />} />
              <Route path='/home' element={<HomePage logHandle={logHandle} />} />
              <Route path='/find' element={<FindPage likeShop={likeShop} dislikeShop={dislikeShop} logHandle={logHandle} />} />
              <Route path='/products' element={<ProductsPage logHandle={logHandle} />} />
              <Route path='/shop/:shopId' element={<ShopPage likeShop={likeShop} dislikeShop={dislikeShop} logHandle={logHandle} />} />
              <Route path='/cart' element={<CartPage logHandle={logHandle} />} />
              <Route path='/favorites' element={<FavoritesPage likeShop={likeShop} dislikeShop={dislikeShop} logHandle={logHandle} />} />
              <Route path='/orders' element={<OrdersPage logHandle={logHandle} />} />
              <Route path='/checkout' element={<CheckoutPage logHandle={logHandle} />} />
            </Routes>

          </div>

        </main>
    </FavoriteCtx.Provider>
  );
}

export default App;
export const FavoriteCtx = createContext();

