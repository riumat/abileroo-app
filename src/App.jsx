import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./index.css";

import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import AuthPage from './pages/AuthPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <BrowserRouter>
      <main className="absolute w-full h-full t-0 l-0 bg-white dark:bg-slate-800 overflow-x-hidden">

        <div className='flex flex-col gap-10 h-full mx-5'>

          <Routes>
            <Route exact path='/' element={<AuthPage  />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/shop/:shopId' element={<ShopPage />} />
            <Route path='/cart' element={<CartPage/>}/>
          </Routes>
        </div>

      </main>
    </BrowserRouter >

  );
}

export default App;
