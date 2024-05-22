import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Navbar from './Components/Navbar';
import ShopPage from './pages/ShopPage';

function App() {
  return (
    <BrowserRouter>
      <main className="w-screen h-screen">
        
        <div className='container m-auto flex flex-col gap-10'>

          <Navbar />

          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/shop/:id' element={<ShopPage />} />

          </Routes>
        </div>

      </main>
    </BrowserRouter >

  );
}

export default App;
