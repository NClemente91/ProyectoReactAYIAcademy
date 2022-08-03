import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      firstName: "admin",
      lastName: "admin",
      email: "admin@example.com",
      password: "12345",
    },
  ],
  isUserLogged: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.users.push(action.payload);
    },
    isLogged: (state, action) => {
      //ver find
      for (let i = 0; i < state.users.length; i++) {
        if (
          state.users[i].email === action.payload.email &&
          state.users[i].password === action.payload.password
        ) {
          state.isUserLogged = true;
          return;
        }
      }
    },
    isLogout: (state) => {
      state.isUserLogged = false;
    },
  },
});

export const { setUser, isLogged, isLogout } = userSlice.actions;
