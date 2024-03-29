import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import * as qs from 'qs';
import { config } from '../../core/config';
import { RootState } from '../store';

export const BASE_QUERY = fetchBaseQuery({
  baseUrl: config.API_URL,
  paramsSerializer: params => qs.stringify(params, { arrayFormat: 'brackets' }),

  prepareHeaders: (headers, { getState }: any) => {
    const { token } = (getState() as RootState).user;

    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }

    return headers;
  },
});
