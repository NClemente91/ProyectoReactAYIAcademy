import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteFavUser } from "../../store/slices/users";

import ClearIcon from "@mui/icons-material/Clear";

import {
  Box,
  Grid,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import "./styles.css";

const ItemFavorite = ({ id, name, pictureUrl, types }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickDeleteFav = (event) => {
    event.preventDefault();
    dispatch(deleteFavUser({ id }));
    navigate("/favorites");
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: "20px",
        boxShadow: `0 0 10px 0 black`,
      }}
    >
      <Grid container justifyContent="flex-end" paddingRight={2} spacing={2}>
        <Grid item xs={4} textAlign="center">
          <Button onClick={handleClickDeleteFav}>
            <ClearIcon />
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
        height="200"
        image={pictureUrl}
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="subtitle1">
          {"#" + id.toString().padStart(3, "000")}
        </Typography>
        <Typography
          gutterBottom
          variant="h4"
          align="center"
          textTransform="capitalize"
          fontStyle="italic"
          component="div"
        >
          {name}
        </Typography>
        <Grid container spacing={2}>
          {types.map((type) => {
            return (
              <Grid item xs={4} textAlign="center" key={type[0].name}>
                <Box
                  sx={{
                    backgroundColor: `${type[0].color}`,
                    opacity: "0.8",
                    borderRadius: "5px",
                    boxShadow: `0 0 1px 0 black`,
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
      </CardContent>
    </Card>
  );
};

export default ItemFavorite;
