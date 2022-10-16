import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="#fff">
      {'Copyright © '}
      <Link style={{textDecoration:"none",color:"#fff"}}>
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
       style={{background:"#303030"}}
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
