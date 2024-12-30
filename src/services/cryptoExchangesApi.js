import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoHistoryHeaders = {
   'accept': 'application/json',
  'x-cg-demo-api-key': 'CG-h726mc9eKw1z3nLFhZanMbAt',
  };


const createRequest = () => ({
  url,
  headers: cryptoHistoryHeaders,
});

export const cryptoExchangesApi = createApi({
  reducerPath: 'cryptoExchangesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coingecko.com/api/v3' }), // Base URL for CoinGecko API
  endpoints: (builder) => ({
    // Fetch historical market data (price, volume, etc.)
    getCryptoNewExchanges: builder.query({
      query: () => 
        createRequest(`/exchanges`),
    }),
  }),
});

export const { useGetCryptoNewExchangesQuery } = cryptoExchangesApi;
