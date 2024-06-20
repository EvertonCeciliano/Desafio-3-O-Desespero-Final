

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Routes/Router';
import './global.css';
import { store, persistor } from './CartStore/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <ToastContainer autoClose={3000} /> 
      </PersistGate>
    </Provider>
  );
}

export default App;
