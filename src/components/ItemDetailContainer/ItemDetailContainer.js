import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemon } from "../../store/slices/pokemons";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Container, Grid } from "@mui/material";

import ItemDetail from "../ItemDetail/ItemDetail";
import "./styles.css";

const ItemDetailContainer = () => {
  const dispatch = useDispatch();
  let { isLoading, pokemonDetail } = useSelector((state) => state.pokemons);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getPokemon(id));
  }, [dispatch, id]);

  return (
    <section>
      {isLoading || pokemonDetail.length === 0 ? (
        <Container fixed>
          <Box className="container-loading">
            <CircularProgress />
          </Box>
        </Container>
      ) : (
        <Container fixed sx={{ paddingTop: 12, paddingBottom: 4 }}>
          <Grid container>
            <ItemDetail
              id={pokemonDetail[0].pokemonId}
              name={pokemonDetail[0].name}
              pictureUrl={pokemonDetail[0].img}
              types={pokemonDetail[0].types}
              stats={pokemonDetail[0].stats}
              weight={pokemonDetail[0].weight}
              height={pokemonDetail[0].height}
            />
          </Grid>
        </Container>
      )}
    </section>
  );
};

export default ItemDetailContainer;
