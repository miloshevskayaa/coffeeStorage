import { createApi } from '@reduxjs/toolkit/query/react';
import { BASE_QUERY } from '../models';

export const statisticsApi = createApi({
  reducerPath: 'statistics',
  baseQuery: BASE_QUERY,
  tagTypes: ['Statistics'],
  endpoints: builder => ({
    createStatistic: builder.mutation({
      query(params) {
        return {
          url: `statistics/create`,
          method: 'POST',
          body: params,
        };
      },
      invalidatesTags: [{ type: 'Statistics', id: 'LIST' }],
    }),
    getStatistics: builder.query({
      query() {
        return {
          url: 'statistics',
          method: 'GET',
        };
      },
      providesTags: result =>
        result
          ? [
              ...result.map(
                ({ id }: any) => ({ type: 'Statistics', id } as const),
              ),
              { type: 'Statistics', id: 'LIST' },
            ]
          : [{ type: 'Statistics', id: 'LIST' }],
    }),
  }),
});

export const { useCreateStatisticMutation, useGetStatisticsQuery } =
  statisticsApi;
