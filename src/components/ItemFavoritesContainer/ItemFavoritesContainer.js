import { useSelector } from "react-redux";

import { Container, Grid, Typography, Box } from "@mui/material";

import ItemFavorite from "../ItemFavorite/ItemFavorite";

import "./styles.css";

const ItemFavoritesContainer = () => {
  let { userLogged } = useSelector((state) => state.users);

  return (
    <section>
      {userLogged.favorites.length === 0 ? (
        <Container fixed>
          <Box className="container-loading">
            <Typography
              gutterBottom
              variant="subtitle2"
              textTransform="capitalize"
            >
              Oh! There are not favorites
            </Typography>
          </Box>
        </Container>
      ) : (
        <Container
          fixed
          sx={{ paddingTop: 12, paddingBottom: 4, minHeight: "95vh" }}
        >
          <Grid
            container
            spacing={{ xs: 2, md: 4 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {userLogged.favorites.map(
              ({ id, name, pictureUrl, types }, value) => {
                return (
                  <Grid item xs={12} sm={4} md={3} key={value}>
                    <ItemFavorite
                      id={id}
                      name={name}
                      pictureUrl={pictureUrl}
                      types={types}
                    />
                  </Grid>
                );
              }
            )}
          </Grid>
        </Container>
      )}
    </section>
  );
};

export default ItemFavoritesContainer;
