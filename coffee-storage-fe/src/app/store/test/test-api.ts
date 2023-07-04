import { createApi } from '@reduxjs/toolkit/query/react';
import { BASE_QUERY } from '../models';

export const testApi = createApi({
  reducerPath: 'test',
  baseQuery: BASE_QUERY,
  endpoints: builder => ({
    getQuestions: builder.query({
      query() {
        return {
          url: 'test/questions',
          method: 'GET',
        };
      },
    }),
  }),
});

export const { useGetQuestionsQuery } = testApi;
