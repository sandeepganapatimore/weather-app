import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

const navItems = ["Home", "Cities", "News"];

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "transparent",
  boxShadow: "none",
  fontFamily: "Poppins",
  fontWeight: 600,
  fontSize: "20px",
  lineHeight: "30px",

  [theme.breakpoints.down("md")]: {
    alignItems: "start",
  },
  [theme.breakpoints.up("md")]: {
    alignItems: "center",
  },
  [theme.breakpoints.up("lg")]: {
    alignItems: "center",
  },
}));

function Navbar(props) {
  const { handleDrawerToggle } = props;

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
    <div>
      <StyledAppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "block",
                justifyContent: "center",
                alignItems: "center",
              },
            }}
          >
            {navItems.map((item) => (
              <Button
                sx={{
                  boxShadow: "none",
                  fontFamily: "Poppins",
                  fontWeight: 600,
                  fontSize: "20px",
                  lineHeight: "30px",
                  color: "#FFFFFF",
                  textTransform: "none",
                  mr: "47px",
                }}
                onClick={() => handleClick(item.toLowerCase())}
                key={item}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </StyledAppBar>
    </div>
  );
}

export default Navbar;
