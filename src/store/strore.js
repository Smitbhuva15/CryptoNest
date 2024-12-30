import { configureStore } from '@reduxjs/toolkit';
import { cryptoApi } from '../services/cryptoApi';
import { cryptoExchangesApi } from '../services/cryptoExchangesApi';
import { cryptoNewsApi } from '../services/CryptoNewsApi';


export const store = configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer, 
    [cryptoExchangesApi.reducerPath]: cryptoExchangesApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer
   
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
  .concat(cryptoApi.middleware)
  .concat(cryptoExchangesApi.middleware)
  .concat(cryptoNewsApi.middleware)
  
 


 
});
