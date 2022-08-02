import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Container, Grid } from "@mui/material";

import { getPokemons } from "../../store/slices/pokemons";
import Item from "../Item/Item";
import "./styles.css";

const ItemListContainer = () => {
  const dispatch = useDispatch();
  let { isLoading, pokemons } = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]); //Ver porque sugiere esa dependencia

  return (
    <section>
      {isLoading ? (
        <Container fixed>
          <Box className="container-loading">
            <CircularProgress />
          </Box>
        </Container>
      ) : (
        <Container fixed sx={{ padding: 12 }}>
          <Grid
            container
            spacing={{ xs: 1, md: 2 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {pokemons.map(({ name, img, type }) => {
              return (
                <Grid item xs={12} sm={4} md={3} key={name}>
                  <Item title={name} pictureUrl={img} type={type} />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      )}
    </section>
  );
};

export default ItemListContainer;
