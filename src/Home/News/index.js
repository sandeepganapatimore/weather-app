import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import THUNDER_IMG from "../../assets/images/thunder.png";
import CLOUDY_IMG from "../../assets/images/cloudy.png";
import SUNNY_IMG from "../../assets/images/sunny.jpg";

const news = [
  {
    title: "Thunder Strikes Delhi",
    image: THUNDER_IMG,
  },
  {
    title: "Cloudstorms in manipur",
    image: CLOUDY_IMG,
  },
  {
    title: "It’s Summer season in Mumbai",
    image: SUNNY_IMG,
  },
];

export default function NewsCard() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 15, mb: 15 }}>
        <Typography
          sx={{
            mb: 5,
            textAlign: "center",
            fontFamily: "Poppins",
            fontWeight: 600,
            fontSize: "48px",
            lineHeight: "72px",
            color: " #110041",
          }}
        >
          News
        </Typography>
        <Grid container spacing={2}>
          {news.map((item) => {
            return (
              <Grid item md={4} key={item.title}>
                <Card
                  sx={{
                    maxWidth: 345,
                    borderRadius: "26px",
                    position: "relative",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="395"
                    image={item.image}
                    alt={item.title}
                  />
                  <Typography
                    sx={{
                      position: "absolute",
                      bottom: "20px",
                      left: "20px",
                      fontFamily: "Poppins",
                      fontWeight: 400,
                      fontSize: "36px",
                      lineHeight: "36px",
                      color: "#FFFFFF",
                    }}
                  >
                    {item.title}
                  </Typography>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
}
