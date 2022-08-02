import { pokemonApi } from "../../../api/pokemonApi";

import { setPokemons, startLoadingPokemon } from "./pokemonSlice";

export const getPokemons = (page = 0) => {
  return async (dispatch) => {
    dispatch(startLoadingPokemon());

    //Petición a la API
    const { data } = await pokemonApi.get(
      `/pokemon?limit=12&offset=${page * 12}`
    );
    const filterData = await Promise.all(
      data.results.map(async (pokemon) => {
        const res = await pokemonApi.get(`/pokemon/${pokemon.name}`);
        return {
          name: res.data.forms[0].name,
          type: res.data.types[0].type.name,
          img: res.data.sprites.other.dream_world.front_default,
        };
      })
    );

    dispatch(setPokemons({ pokemons: filterData }));
  };
};
