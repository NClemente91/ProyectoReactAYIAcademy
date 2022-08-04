import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      firstName: "admin",
      lastName: "admin",
      email: "admin@example.com",
      password: "12345",
      favorites: [],
    },
  ],
  userLogged: [],
  isUserLogged: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.users.push(action.payload);
    },
    setFavsUser: (state, action) => {
      const indexPokemonFav = state.userLogged.favorites.findIndex(
        (pok) => pok.id === action.payload.id
      );
      if (indexPokemonFav === -1) {
        state.userLogged.favorites.push(action.payload);
      }
    },
    deleteFavUser: (state, action) => {
      const indexDeletePokemonFav = state.userLogged.favorites.findIndex(
        (pok) => pok.id === action.payload.id
      );
      if (indexDeletePokemonFav !== -1) {
        state.userLogged.favorites.splice(indexDeletePokemonFav, 1);
      }
    },
    isLogged: (state, action) => {
      const indexUser = state.users.findIndex(
        (user) =>
          user.email === action.payload.email &&
          user.password === action.payload.password
      );
      if (indexUser !== -1) {
        state.userLogged = state.users[indexUser];
        state.isUserLogged = true;
      }
    },
    isLogout: (state) => {
      state.isUserLogged = false;
    },
  },
});

export const { setUser, setFavsUser, deleteFavUser, isLogged, isLogout } =
  userSlice.actions;
