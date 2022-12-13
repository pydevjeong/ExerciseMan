import React from "react";
import Header from "../Layout/Header/Header";
import { Container } from "@mui/system";
import CommunityBoard from "../Community/CommunityBoard";

const QandA = () => {
  return (
    <div>
      <Container>
        <Header />
        <CommunityBoard />
      </Container>
    </div>
  );
};

export default QandA;
