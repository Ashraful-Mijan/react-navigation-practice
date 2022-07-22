/* eslint-disable prettier/prettier */
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialState = {
  products: [],
  status: 'idle',
  error: null,
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return response.json();
  },
);

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchProducts.fulfilled]: (state, action) => {
      const {payload} = action;
      state.products = payload;
      state.status = 'success';
    },
    [fetchProducts.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export const selectStatus = state => state.products.status;
export default productsSlice.reducer;
