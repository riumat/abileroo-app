import { Provider } from 'react-redux';
import Router from './router/Router';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';

const App = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <main className='w-screen h-screen'>
          <Router />
        </main>
      </BrowserRouter>
    </Provider>

  );
}

export default App;

