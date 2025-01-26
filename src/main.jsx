import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
<<<<<<< HEAD
import { ToastContainer } from 'react-toastify';
=======
>>>>>>> c85ab364556b9c24dfe3f233e0231118c7da96df

import { Login } from './containers/Login';
import GlobalStyles from './styles/globalStyles';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
    <GlobalStyles />
    <ToastContainer autoClose={2000} theme="colored" />
  </StrictMode>,
);
