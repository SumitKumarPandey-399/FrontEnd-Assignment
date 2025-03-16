import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchItems = createAsyncThunk('items/fetchItems', async () => {
  const response = await axios.get('https://fakestoreapi.com/products');
  return response.data;
});

const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    list: [],
    status: 'idle',
    selectedItem: null,
  },
  reducers: {
    selectItem: (state, action) => {
      state.selectedItem = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchItems.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { selectItem } = itemsSlice.actions;
export default itemsSlice.reducer;