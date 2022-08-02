import axios from "axios";

const baseURL = process.env.REACT_APP_URL;

export const pokemonApi = axios.create({
  baseURL,
});
