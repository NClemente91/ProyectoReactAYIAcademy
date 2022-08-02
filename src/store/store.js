import { configureStore } from "@reduxjs/toolkit";
import { pokemonSlice } from "./slices/pokemons";
import { userSlice } from "./slices/users";

export const store = configureStore({
  reducer: {
    pokemons: pokemonSlice.reducer,
    users: userSlice.reducer,
  },
});
