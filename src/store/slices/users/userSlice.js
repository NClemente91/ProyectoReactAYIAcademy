import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.users.push(action.payload);
    },
    // isExistUser: (state, action) => {
    //   for (let i = 0; i < state.users.length; i++) {
    //     if (
    //       state.users[i].email === action.payload.email &&
    //       state.users[i].password === action.payload.password
    //     ) {
    //       console.log("Usuario existente");
    //     }
    //   }
    // },
    // isLogged: (state) => {

    // }
  },
});

export const { setUser, isExistUser } = userSlice.actions;
