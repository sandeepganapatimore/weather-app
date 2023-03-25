import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import BACKGROUND_IMAGE from "./assets/images/background.png";
import EARTH_IMAGE from "./assets/images/earth.png";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Footer from "./Home/Footer";
import NewsCard from "./Home/News";
import CitiesCard from "./Home/Cities";
import WeatherInfo from "./Home/WeatherInfo";
import WeatherStatus from "./Home/WeatherStatus";
import Navbar from "./Home/Navbar";
import FadeInSection from "./Components/FadeInSection";
import SearchBar from "./Home/Search";

const drawerWidth = 240;
const navItems = ["Home", "Cities", "News"];

function App(props) {
  const [city] = useState("Pune");
  const [data, setData] = useState();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city.toLowerCase()}&appid=${
        process.env.REACT_APP_WEATHER_KEY
      }&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [city]);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <CssBaseline />
      <Container
        maxWidth="xl"
        disableGutters
        style={{
          backgroundImage: `url(${BACKGROUND_IMAGE})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "800px",
          height: "800px",
        }}
      >
        <Navbar handleDrawerToggle={handleDrawerToggle} />
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box component="main" sx={{ flexGrow: 1 }}>
          <div id="home" onScroll={(e) => console.log(e.target)}>
            <Grid container spacing={2} sx={{ mt: "160px" }}>
              <Grid
                item
                md={7}
                sx={{ display: { md: "flex", xs: "none" } }}
              ></Grid>
              <Grid item md={4} xs={12}>
                <FadeInSection>
                  <WeatherInfo data={data} />
                </FadeInSection>
              </Grid>

              <Grid item md={5} xs={12} sx={{ mt: 5 }}>
                <FadeInSection>
                  <WeatherStatus data={data} city={city} />
                </FadeInSection>
              </Grid>
            </Grid>
          </div>

          <div id="cities">
            <FadeInSection>
              <CitiesCard />
            </FadeInSection>
          </div>

          <Box
            sx={{
              mt: 15,
              mb: 15,
              textAlign: "center",
            }}
          >
            <FadeInSection>
              <SearchBar />
            </FadeInSection>
          </Box>
          <Box
            sx={{
              mt: 15,
              mb: 15,
              backgroundColor: "#010101",
              textAlign: "center",
            }}
          >
            <Container maxWidth="sm">
              <Box
                component="img"
                sx={{
                  maxWidth: "100%",
                  height: "auto",
                  padding: 0,
                  margin: 0,
                }}
                src={EARTH_IMAGE}
                alt="Earth"
              ></Box>
            </Container>
          </Box>
          <div id="news">
            <FadeInSection>
              <NewsCard />
            </FadeInSection>
          </div>

          <Footer />
        </Box>
      </Container>
    </Box>
  );
}

App.propTypes = {
  window: PropTypes.func,
};

export default App;
