import { Info, Security } from "@mui/icons-material";
import { AppBar, Container, Grid, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link>
        운동人
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Footer = () => {
  return (
    <Container>
      <AppBar
        position="static"
        elevation={0}
        component="footer"
        color="default"
      >
        <Toolbar style={{ justifyContent: "center" }}>
          <Typography variant="caption">{Copyright()}</Typography>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Footer;
