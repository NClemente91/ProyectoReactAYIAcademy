import { pokemonApi } from "../../../api/pokemonApi";

import { setPokemons, startLoadingPokemon } from "./pokemonSlice";

const pokemonsTypes = [
  {
    name: "normal",
    color: "#C2C2A1",
  },
  {
    name: "fighting",
    color: "#D6B591",
  },
  {
    name: "flying",
    color: "#BAB0D5",
  },
  {
    name: "poison",
    color: "#7C538C",
  },
  {
    name: "ground",
    color: "#B1736C",
  },
  {
    name: "rock",
    color: "#A6AAB6",
  },
  {
    name: "bug",
    color: "#C3CE75",
  },
  {
    name: "ghost",
    color: "#C4BFD7",
  },
  {
    name: "steel",
    color: "#CCCCDE",
  },
  {
    name: "fire",
    color: "#FA6C6C",
  },
  {
    name: "water",
    color: "#609FB5",
  },
  {
    name: "grass",
    color: "#48D0B0",
  },
  {
    name: "electric",
    color: "#FDD86F",
  },
  {
    name: "psychic",
    color: "#9B7FA6",
  },
  {
    name: "ice",
    color: "#7FCCEC",
  },
  {
    name: "dragon",
    color: "#F9BE00",
  },
  {
    name: "dark",
    color: "#333333",
  },
  {
    name: "fairy",
    color: "#F469A9",
  },
  {
    name: "unknown",
    color: "#121415",
  },
  {
    name: "shadow",
    color: "#3363A8",
  },
];

export const getPokemons = (page = 0) => {
  return async (dispatch) => {
    dispatch(startLoadingPokemon());

    //Petición a la API
    const { data } = await pokemonApi.get(
      `/pokemon?limit=12&offset=${page * 12}`
    );
    const filterData = await Promise.all(
      data.results.map(async (pokemon) => {
        const resGeneral = await pokemonApi.get(`/pokemon/${pokemon.name}`);
        return {
          pokemonId: resGeneral.data.id,
          name: resGeneral.data.name,
          img: resGeneral.data.sprites.other.dream_world.front_default,
          types: resGeneral.data.types.map((pok) => {
            return pokemonsTypes.filter(
              (pokemonType) => pokemonType.name === pok.type.name
            );
          }),
        };
      })
    );

    dispatch(setPokemons({ pokemons: filterData }));
  };
};
