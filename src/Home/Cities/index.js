import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import THUNDER_IMG from "../../assets/images/thunder.png";
import CLOUDY_IMG from "../../assets/images/cloudy.png";
import SUNNY_IMG from "../../assets/images/sunny.jpg";

const cities = [
  {
    title: "Thunder",
    image: THUNDER_IMG,
    deg: 24,
    city: "Delhi",
    date: "9/03/23",
  },
  {
    title: "Cloudy",
    image: CLOUDY_IMG,
    deg: 29,
    city: "Chennai",
    date: "9/03/23",
  },
  {
    title: "Sunny",
    image: SUNNY_IMG,
    deg: 40,
    city: "Jaipur",
    date: "9/03/23",
  },
];

export default function CitiesCard() {
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
          Cities
        </Typography>
        <Grid container spacing={2}>
          {cities.map((item) => {
            return (
              <Grid item md={4} key={item.title}>
                <Card
                  sx={{
                    maxWidth: 345,
                    borderRadius: "26px",
                  }}
                >
                  <Box
                    sx={{
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
                  </Box>

                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{
                          fontFamily: "Poppins",
                          fontWeight: 600,
                          fontSize: "64px",
                          lineHeight: "96px",
                          color: "#000000",
                        }}
                      >
                        {item.deg} {"\u00b0"}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "Poppins",
                            fontWeight: 600,
                            fontSize: "24px",
                            lineHeight: "36px",
                            color: "#000000",
                          }}
                        >
                          {item.city}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "Poppins",
                            fontWeight: 600,
                            fontSize: "16px",
                            lineHeight: "24px",
                            color: "#000000",
                          }}
                        >
                          {item.date}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
}
