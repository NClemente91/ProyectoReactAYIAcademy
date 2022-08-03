import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Grid, Container, LinearProgress } from "@mui/material";

const ItemDetail = ({ id, name, pictureUrl, types, stats, weight, height }) => {
  // console.log({ id, name, pictureUrl, types, stats, weight, height });
  return (
    <Container fixed sx={{ paddingTop: 12, paddingBottom: 10 }}>
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
                {types.map((type) => {
                  return (
                    <Grid item xs={4} textAlign="center" key={type.color}>
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
              <Box>
                {stats.map((stat) => {
                  return (
                    <>
                      <p>{stat.name}</p>
                      <LinearProgress
                        variant="determinate"
                        value={stat.value}
                      />
                    </>
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
