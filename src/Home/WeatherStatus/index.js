import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const FlexBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
  },
}));

function WeatherStatus(props) {
  const { data, city } = props;

  const getTime = () => {
    const date = new Date(data?.dt * 1000 - data?.timezone * 1000);

    const yyyy = date.getFullYear();
    let mm = date.getMonth() + 1; // Months start at 0!
    let dd = date.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    const formattedToday = dd + "/" + mm + "/" + yyyy;
    return `${date.getUTCHours()}:${date.getUTCMinutes()} ${" "} ${
      days[date?.getDay()]
    } ${" "} ${formattedToday}`;
  };
  return (
    <div>
      <FlexBox
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: 600,
            fontSize: "128px",
            lineHeight: "192px",
            color: "#FFFFFF",
          }}
        >
          {data?.main?.temp}
          {"\u00b0"}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            sx={{
              ml: 2,
              fontFamily: "Poppins",
              fontWeight: 600,
              fontSize: "52px",
              lineHeight: "78px",
              color: "#FFFFFF",
            }}
          >
            {city}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: 300,
              fontSize: "16px",
              lineHeight: "24px",
              color: "#FFFFFF",
            }}
          >
            <span>{getTime()}</span>
          </Typography>
        </Box>
        <WbSunnyIcon sx={{ height: "53px", width: "53px", color: "#FFFFFF" }} />
      </FlexBox>
    </div>
  );
}

export default WeatherStatus;
