import { createSlice } from "@reduxjs/toolkit";

//Estado inicial
const initialState = {
  page: 1,
  pokemons: [],
  pokemonDetail: [],
  isLoading: false,
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    startLoadingPokemon: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, action) => {
      state.isLoading = false;
      state.pokemons = action.payload.pokemons;
      state.page = action.payload.page;
    },
    setPokemon: (state, action) => {
      state.isLoading = false;
      state.pokemonDetail = [action.payload.pokemon];
    },
  },
});

// Action creators are generated for each case reducer function
export const { startLoadingPokemon, setPokemons, setPokemon } =
  pokemonSlice.actions;
