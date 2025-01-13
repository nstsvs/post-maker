import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  email: string | null;
  token: string | null;
  id: string | null;
}

const initialState: UserState = {
  email: null,
  token: null,
  id: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload: { email, token, id }}) => {
      state.email = email;
      state.token = token;
      state.id = id;
    },
    removeUser: () => initialState
  }
})

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
