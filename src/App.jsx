import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Navbar from './Components/Navbar';
import ShopPage from './pages/ShopPage';
import AuthPage from './pages/AuthPage';

function App() {
  return (
    <BrowserRouter>
      <main className="absolute w-full h-full t-0 l-0 bg-slate-200 overflow-x-hidden">

        <div className='flex flex-col gap-10 h-full mx-5'>

          <Routes>
            <Route exact path='/' element={<AuthPage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/shop/:shopId' element={<ShopPage />} />
          </Routes>
        </div>

      </main>
    </BrowserRouter >

  );
}

export default App;
