import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState: any = {
  page: 'auth',
};

export const pageAuthSlice = createSlice({
  initialState,
  name: 'pageAuth',
  reducers: {
    setPageAuth: (state, action: PayloadAction<any>) => {
      state.page = action.payload;
    },
  },
});
export const selectAuthPage = (state: RootState) => state.pageAuth;

export const pageAuthReducer = pageAuthSlice.reducer;

export const { setPageAuth } = pageAuthSlice.actions;
