import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Router from './router/Router';

const App = () => {
  const { success, token, error } = useSelector(state => state.auth);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (success && token && !error) location.pathname !== "/" ? navigate(location.pathname) : navigate("/home");
    if (error || !success) navigate("/");
  }, [success, token, error])

  return (
    <main className="absolute w-full h-full t-0 l-0 bg-white dark:bg-slate-950 overflow-hidden">
      <div className='flex flex-col h-full mx-5'>
        <Router />
      </div>
    </main>
  );
}

export default App;

