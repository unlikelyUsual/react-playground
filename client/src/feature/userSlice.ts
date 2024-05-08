import { createSlice } from "@reduxjs/toolkit";

export interface IUser {
  name: string;
  email: string;
  phone: string;
}

export interface IUserState {
  user: IUser | null;
  token: string | null;
}

const initialState: IUserState = {
  user: null,
  token: null,
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      (state.user = payload.user), (state.token = payload.token);
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
