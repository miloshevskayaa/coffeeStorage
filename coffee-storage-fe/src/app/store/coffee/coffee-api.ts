import { createApi } from '@reduxjs/toolkit/query/react';
import { BASE_QUERY } from '../models';

export const coffeeApi = createApi({
  reducerPath: 'coffee',
  baseQuery: BASE_QUERY,
  endpoints: builder => ({
    getCoffee: builder.query({
      query(params) {
        return {
          url: 'coffee',
          method: 'GET',
          params,
        };
      },
    }),
    getOneCoffee: builder.query({
      query(params) {
        return {
          url: 'coffee/one',
          method: 'GET',
          params,
        };
      },
    }),
  }),
});

export const { useGetCoffeeQuery, useGetOneCoffeeQuery } = coffeeApi;
