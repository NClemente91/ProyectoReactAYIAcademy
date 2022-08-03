import {
  getAllPokemons,
  getOnePokemon,
} from "../../../services/pokemonsServices";
import { setPokemons, startLoadingPokemon, setPokemon } from "./pokemonSlice";

export const getPokemons = (page = 1) => {
  return async (dispatch) => {
    dispatch(startLoadingPokemon());

    //Petición a la API
    const filterData = await getAllPokemons(page);

    dispatch(setPokemons({ pokemons: filterData, page }));
  };
};

export const getPokemon = (id) => {
  return async (dispatch) => {
    dispatch(startLoadingPokemon());

    //Petición a la API
    const filterData = await getOnePokemon(id);

    dispatch(setPokemon({ pokemon: filterData }));
  };
};
