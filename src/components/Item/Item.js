import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Item = ({ title, pictureUrl, type }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ objectFit: "contain" }}
        component="img"
        height="200"
        image={pictureUrl}
        alt="Product"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ height: 50 }} variant="body2" color="text.secondary">
          {type}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Item;
