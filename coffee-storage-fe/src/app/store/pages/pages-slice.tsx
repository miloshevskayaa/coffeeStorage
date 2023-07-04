import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState: any = {
  page: 'main',
};

export const pageSlice = createSlice({
  initialState,
  name: 'page',
  reducers: {
    setPage: (state, action: PayloadAction<any>) => {
      state.page = action.payload;
    },
  },
});
export const selectPage = (state: RootState) => state.page;

export const pageReducer = pageSlice.reducer;

export const { setPage } = pageSlice.actions;
