import { Route, Routes, useNavigate } from 'react-router-dom';
import { AuthPage, HomePage, FindPage, ProductsPage, ShopPage, CartPage, FavoritesPage, OrdersPage, CheckoutPage } from './utils/pages'
import ProtectedRoute from './pages/ProtectedRoute';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Layout from './pages/Layout';

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
            <Route path='/home' element={<Layout Prop={<HomePage />} />} />
            <Route path='/find' element={<Layout Prop={<FindPage />} />} />
            <Route path='/products' element={<Layout Prop={<ProductsPage />} />} />
            <Route path='/shop/:shopId' element={<Layout Prop={<ShopPage />} />} />
            <Route path='/cart' element={<Layout Prop={<CartPage />} />} />
            <Route path='/favorites' element={<Layout Prop={<FavoritesPage />} />} />
            <Route path='/orders' element={<Layout Prop={<OrdersPage />} />} />
            <Route path='/checkout' element={<Layout Prop={<CheckoutPage />} />} />
          </Route>
        </Routes>

      </div>

    </main>
  );
}

export default App;

