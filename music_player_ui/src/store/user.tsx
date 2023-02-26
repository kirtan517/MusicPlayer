import { createSlice } from "@reduxjs/toolkit";

interface InitialUserStateInterface {
  isUserLogedIn: boolean;
}
const initialUserState: InitialUserStateInterface = {
  isUserLogedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    login: (state) => {
      return { ...state, isUserLogedIn: true };
    },
    logout: (state) => {
      return { ...state, isUserLogedIn: false };
    },
  },
});

export const {login,logout} = userSlice.actions;
export default userSlice;




