import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setFavsUser } from "../../store/slices/users";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  Grid,
  Container,
  LinearProgress,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const ItemDetail = ({ id, name, pictureUrl, types, stats, weight, height }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleClickBack = (event) => {
    event.preventDefault();
    navigate("/");
  };

  const handleClickFav = (event) => {
    event.preventDefault();
    dispatch(setFavsUser({ id, name, pictureUrl, types }));
    navigate("/favorites");
  };

  return (
    <Container fixed sx={{ paddingTop: 6, paddingBottom: 4 }}>
      <Grid
        container
        columns={{ xs: 12, sm: 12, md: 10 }}
        justifyContent="center"
      >
        <Grid item xs={10} sm={8} md={8} alignItems="center">
          <Card
            sx={{
              maxWidth: "100%",
              borderRadius: "20px",
              boxShadow: `0 0 10px 0 black`,
            }}
          >
            <Grid container justifyContent="space-between" spacing={2}>
              <Grid item xs={4} textAlign="center">
                <Button onClick={handleClickBack}>
                  <ArrowBackIcon />
                </Button>
              </Grid>
              <Grid item xs={4} textAlign="center">
                <Button onClick={handleClickFav}>
                  <AddIcon />
                  <span>Fav</span>
                </Button>
              </Grid>
            </Grid>

            <CardMedia
              sx={{
                objectFit: "contain",
                backgroundColor: `${types[0][0].color}`,
                opacity: "0.9",
              }}
              component="img"
              height="300"
              image={pictureUrl}
              alt={name}
            />
            <CardContent>
              <Typography gutterBottom variant="h4">
                {"#" + id.toString().padStart(3, "000")}
              </Typography>
              <Typography
                gutterBottom
                variant="h3"
                align="center"
                textTransform="capitalize"
                fontStyle="italic"
                component="div"
              >
                {name}
              </Typography>
              <Grid container justifyContent="center" spacing={2}>
                {types.map((type, value) => {
                  return (
                    <Grid item xs={4} textAlign="center" key={value}>
                      <Box
                        sx={{
                          backgroundColor: `${type[0].color}`,
                          opacity: "0.8",
                          borderRadius: "5px",
                          boxShadow: `0 0 2px 0 black`,
                        }}
                      >
                        <Typography
                          gutterBottom
                          variant="subtitle2"
                          textTransform="capitalize"
                        >
                          {type[0].name}
                        </Typography>
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>

              <Typography
                paddingTop={2}
                gutterBottom
                variant="h6"
                align="center"
                textTransform="capitalize"
                fontStyle="italic"
                component="div"
              >
                {`Weight: ${weight}`}
              </Typography>
              <Typography
                gutterBottom
                variant="h6"
                align="center"
                textTransform="capitalize"
                fontStyle="italic"
                component="div"
              >
                {`Height: ${height}`}
              </Typography>
              <Box>
                {stats.map((stat, value) => {
                  return (
                    <div key={value}>
                      <p>{stat.name}</p>
                      <LinearProgress
                        variant="determinate"
                        value={stat.value}
                      />
                    </div>
                  );
                })}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ItemDetail;
