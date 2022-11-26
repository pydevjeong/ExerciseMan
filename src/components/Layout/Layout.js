import { Container } from "@mui/material";
import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout = (props) => {
  return (
    <Container>
      <Header />
      {props.children}
      <div style={{width: "100vw",marginLeft: "calc(-50vw + 50%)", background: "#303030" ,overflow: "hidden"}}>
      <Footer />
      </div>
    </Container>
  );
};

export default Layout;
