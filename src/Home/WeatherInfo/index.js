import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import WEATHER_SECTION from "../../assets/images/rectangle.png";

const WeatherText = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins",
  fontWeight: 600,
  fontSize: "20px",
  lineHeight: "30px",
  color: "#FFFFFF",
  textTransform: "none",
}));

const WeatherBox = styled(Box)(({ theme }) => ({
  borderRadius: "10px",
  backgroundImage: `url(${WEATHER_SECTION})`,
  [theme.breakpoints.down("md")]: {
    padding: "10px",
    height: "210px",
  },
  [theme.breakpoints.up("md")]: {
    padding: "60px",
    height: "348px",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "60px",
    height: "348px",
  },
}));

function WeatherInfo(props) {
  const { data } = props;
  return (
    <div>
      <WeatherBox>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: 600,
            fontSize: "24px",
            lineHeight: "36px",
            color: "#FFFFFF",
            textTransform: "none",
          }}
        >
          Weather Details
        </Typography>
        <List sx={{ p: 0, m: 0 }}>
          <ListItem
            secondaryAction={
              <WeatherText edge="end">{data?.clouds?.all}%</WeatherText>
            }
          >
            <ListItemText
              primary={<WeatherText edge="end">Cloudy</WeatherText>}
            />
          </ListItem>
          <ListItem
            secondaryAction={
              <WeatherText edge="end">{data?.main?.humidity}%</WeatherText>
            }
          >
            <ListItemText
              primary={<WeatherText edge="end">Humidity</WeatherText>}
            />
          </ListItem>
          <ListItem
            secondaryAction={
              <WeatherText edge="end">{data?.wind?.speed}km/h</WeatherText>
            }
          >
            <ListItemText
              primary={<WeatherText edge="end">Wind</WeatherText>}
            />
          </ListItem>
        </List>
      </WeatherBox>
    </div>
  );
}

export default WeatherInfo;
