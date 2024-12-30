import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import 'antd/dist/antd.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from './component/HomePage.jsx';
import Cryptocurrencies from './component/Cryptocurrencies.jsx';
import Exchanges from './component/Exchanges.jsx';

// import { store } from '../src/store/strore.js'
import { store } from './store/strore.js';
import { Provider } from 'react-redux'

import CryptoDetails from './component/CryptoDetails.jsx';
import News from './component/News.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {

        path: '/',
        element: <HomePage />,
      },
      {

        path: '/cryptocurrencies',
        element: <Cryptocurrencies />,
      },
      {

        path: '/exchanges',
        element: <Exchanges />,
      },
      {

        path: '/crypto/:coinId',
        element: <CryptoDetails />,

      },
      {

        path: '/news',
        element: <News />,

      },


    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
