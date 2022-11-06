import { Container } from "@mui/system";
import React from "react";
import Header from "../Layout/Header/Header";
import CommunityBoard from "./CommunityBoard";

  // 잘못된 로직? -> 모달창안에 값이 입력될때마다 계속 console에 찍힘
  // checkURL , navigate 이 두개 모두 MainCommunity에서 어떤 동작을 하던지간에 계속 console에 찍힘
  // React가 계속 리렌더링 하는듯

const MainCommunity = () => {
  return (
    <Container>
      <Header />
      <CommunityBoard/>
    </Container>
  );
};

export default MainCommunity;
