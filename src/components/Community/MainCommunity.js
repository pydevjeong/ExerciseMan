import { Container } from "@mui/system";
import React from "react";
import Header from "../Layout/Header/Header";
import CommunityBoard from "./CommunityBoard";


const MainCommunity = () => {
  return (
    <Container>
      <Header />
      <CommunityBoard/>
    </Container>
  );
};

export default MainCommunity;
