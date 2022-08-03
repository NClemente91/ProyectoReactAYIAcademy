import * as React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";

import "./styles.css";

const Item = ({ id, name, pictureUrl, types }) => {
  return (
    <Link to={`/pokemon/${id}`} className="items-link">
      <Card
        sx={{
          maxWidth: 345,
          borderRadius: "20px",
          boxShadow: `0 0 10px 0 black`,
        }}
      >
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
    </Link>
  );
};

export default Item;
