import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Navbar from './Components/Navbar';
import ShopPage from './pages/ShopPage';
import AuthPage from './pages/AuthPage';

function App() {
  return (
    <BrowserRouter>
      <main className="w-screen h-screen">

        <div className='container m-auto flex flex-col gap-10'>

          <Navbar />

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
