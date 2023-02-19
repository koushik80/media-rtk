import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'Users',
  initialState: {
    data: []
  },
  reducers: {}
});

export const usersReducer = usersSlice.reducer;
