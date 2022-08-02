import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../store/slices/pokemons";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Container, Grid } from "@mui/material";

import Item from "../Item/Item";
import "./styles.css";

const ItemListContainer = () => {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  let { isLoading, pokemons } = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons(page - 1));
  }, [dispatch, page]);

  const handleChange = (event, value) => {
    event.preventDefault();
    setPage(value);
  };

  return (
    <section>
      {isLoading ? (
        <Container fixed>
          <Box className="container-loading">
            <CircularProgress />
          </Box>
        </Container>
      ) : (
        <Container fixed sx={{ paddingTop: 12, paddingBottom: 4 }}>
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
          <Grid container justifyContent="center" sx={{ paddingTop: 3 }}>
            <Stack spacing={2}>
              <Pagination
                count={54}
                page={page}
                variant="outlined"
                shape="rounded"
                onChange={handleChange}
              />
            </Stack>
          </Grid>
        </Container>
      )}
    </section>
  );
};

export default ItemListContainer;
