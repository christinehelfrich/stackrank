import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    updateUser: (state, payload) => {
      console.log(payload.payload)
      state.user = payload.payload
    },
  },
});

export const { updateUser } = userSlice.actions;

export const selectUser = (state: any) => state.user.value;

export default userSlice.reducer;