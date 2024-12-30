import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


// const cryptoNewsApiHeaders = {
//   'X-BingApis-SDK': 'true', 
//   'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',  
//   'x-rapidapi-key': '1f15313f9emshe5ae8ad1947348ep104f15jsn2dfcb17c426e',  
// };

const createRequest = (url) => ({
  url,
  
});


export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi', 
  baseQuery: fetchBaseQuery({ baseUrl: 'https://newsapi.org/v2/everything' }),  
  endpoints: (builder) => ({
    
    getCryptoNews: builder.query({
      query: ({ newsCategory , count  }) => createRequest(
        `?q=${newsCategory}&apiKey=2b319ed41c0a4c32a8ea394d4b64ef44&pageSize=${count}`
      ),  
    }),
  }),
});


export const { useGetCryptoNewsQuery } = cryptoNewsApi;
