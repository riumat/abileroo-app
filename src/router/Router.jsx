import { useLocation, useNavigate, useRoutes } from 'react-router'
import { AuthPage, HomePage, FindPage, ProductsPage, ShopPage, CartPage, FavoritesPage, OrdersPage, CheckoutPage, Layout, ProtectedRoute } from "../utils/pages"
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Router = () => {
  const { success, token, error } = useSelector(state => state.auth);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (success && token && !error) location.pathname !== "/" ? navigate(location.pathname) : navigate("/home");
    if (error || !success) navigate("/");
    // eslint-disable-next-line
  }, [success, token, error])

  const routes = useRoutes([
    {
      element: <AuthPage />,
      path: '/'
    },
    {
      element: <ProtectedRoute />,
      children: [
        { path: "/home", element: <Layout Prop={<HomePage />} /> },
        { path: "/find", element: <Layout Prop={<FindPage />} /> },
        { path: "/products", element: <Layout Prop={<ProductsPage />} /> },
        { path: "/shop/:shopId", element: <Layout Prop={<ShopPage />} /> },
        { path: "/cart", element: <Layout Prop={<CartPage />} /> },
        { path: "/favorites", element: <Layout Prop={<FavoritesPage />} /> },
        { path: "/orders", element: <Layout Prop={<OrdersPage />} /> },
        { path: "/checkout", element: <Layout Prop={<CheckoutPage />} /> },
      ]
    }
  ])

  return routes;
}

export default Router