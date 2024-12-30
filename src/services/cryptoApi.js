import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
   'x-rapidapi-key': "1f15313f9emshe5ae8ad1947348ep104f15jsn2dfcb17c426e",
};
// console.log(process.env); // Check if your env variables are available
// console.log(process.env.REACT_APP_RAPIDAPI_KEY);


const createRequest = (url) => ({
  url,
  headers: cryptoApiHeaders,
});

export const cryptoApi = createApi({
     
    
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://coinranking1.p.rapidapi.com' }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        }),
      
      
          // Note: To access this endpoint you need premium plan
          getExchanges: builder.query({
            query: () => createRequest('/exchanges'),
          }),
    }),
});

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetExchangesQuery
} = cryptoApi;
