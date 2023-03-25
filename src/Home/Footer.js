import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const navItems = ["Home", "Cities", "News"];

const navItems2 = ["Contact Us", "FAQs"];

export default function Footer() {
  const handleClick = (item) => {
    const element = document.getElementById(item);
    console.log(element);
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };
  return (
    <Box sx={{ backgroundColor: "#000000" }}>
      <Grid container spacing={2}>
        <Grid item md={8} xs={12}>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: 400,
              fontSize: "36px",
              lineHeight: "36px",
              color: "#FFFFFF",
              ml: 2,
            }}
          >
            WEATHERAPP
          </Typography>
        </Grid>
        <Grid item md={2} xs={12}>
          <List>
            {navItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 500,
                    fontSize: "20px",
                    lineHeight: "30px",
                    color: "#FFFFFF",
                  }}
                  onClick={() => handleClick(item?.toLowerCase())}
                >
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item md={2} xs={12}>
          {navItems2.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton
                sx={{
                  textAlign: "left",
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  fontSize: "20px",
                  lineHeight: "30px",
                  color: "#FFFFFF",
                }}
              >
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
