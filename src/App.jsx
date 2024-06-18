import { Route, Routes, useNavigate } from 'react-router-dom';
import { AuthPage, HomePage, FindPage, ProductsPage, ShopPage, CartPage, FavoritesPage, OrdersPage, CheckoutPage } from './utils/pages'
import ProtectedRoute from './pages/ProtectedRoute';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const App = () => {
  const { success, token, error } = useSelector(state => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (success && token && !error) navigate("/home");
    if (error || !success) navigate("/");
  }, [success, token, error])

  return (
    <main className="absolute w-full h-full t-0 l-0 bg-white dark:bg-slate-950 overflow-hidden">
      <div className='flex flex-col h-full mx-5'>

        <Routes>
          <Route exact path='/' element={<AuthPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path='/home' element={<HomePage />} />
            <Route path='/find' element={<FindPage />} />
            <Route path='/products' element={<ProductsPage />} />
            <Route path='/shop/:shopId' element={<ShopPage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/favorites' element={<FavoritesPage />} />
            <Route path='/orders' element={<OrdersPage />} />
            <Route path='/checkout' element={<CheckoutPage />} />
          </Route>
        </Routes>

      </div>

    </main>
  );
}

export default App;

