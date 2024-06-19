import { useRoutes } from 'react-router'
import { AuthPage, HomePage, FindPage, ProductsPage, ShopPage, CartPage, FavoritesPage, OrdersPage, CheckoutPage, Layout, ProtectedRoute } from "../utils/pages"

const Router = () => {
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