import {
  Button,
  FormControl,
  InputLabel,
  ListItem,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Layout/Header/Header";
import styles from "./MainCommunity.module.css";
import Modal from "react-modal";
import axios from "axios";
import CommunityBoard from "./CommunityBoard";


  //modal
  const customStyles = {
    // overlay: {
    //   position: 'fixed',
    //   top: 0,
    //   left: 0,
    //   right: 0,
    //   bottom: 0,
    //   backgroundColor: 'rgba(255, 255, 255, 0.75)'
    // 기본값으로 설정},
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "50%",
      height: "55%",
      overflow: "hidden",
    },
  };

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
