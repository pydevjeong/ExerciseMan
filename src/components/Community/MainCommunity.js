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


  // const [modalIsOpen, setModalIsOpen] = useState(false)

  // 로직상 이 페이지가 열리면 아래 useEffect부분에 case "전체"가 제일 먼저 실행됨
  // -> 받아온 url에 따라서 카테고리도 바뀌게 변경해야함

  // useEffect(() => {
  //   setUrlName(checkURL.pathname);
  //   switch (categoryName) {
  //     case "전체":
  //       console.log("전체");
  //       break;
  //     case "농구":
  //       navigate("/basketball");
  //       console.log("농구");
  //       break;
  //     case "야구":
  //       navigate("/baseball");
  //       console.log("야구");
  //       break;
  //     case "배드민턴":
  //       navigate("/badminton");
  //       break;
  //     case "헬스":
  //       navigate("/gym");
  //       break;
  //     case "축구":
  //       navigate("/soccer");
  //       break;
  //     case "기타":
  //       navigate("/others");
  //       break;
  //     default:
  //       //없는 페이지입니다
  //       break;
  //   }
  // }, []);
  // console.log(checkURL,navigate);



  /*
  const getContents=async()=>{
    // 특정조회시 `/posts/${postId}`
    await axios.get(`/posts`,{
      title:title,
      content:content
    })
    .then(res=>{
      console.log(res)
    })
    .catch(err=>console.log(err))
  }
  */


  return (
    <Container>
      <Header />
      <CommunityBoard/>
    </Container>
  );
};

export default MainCommunity;
