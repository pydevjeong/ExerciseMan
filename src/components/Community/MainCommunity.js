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
      width: "45%",
      height: "45%",
      overflow: "hidden",
    },
  };

  // 잘못된 로직? -> 모달창안에 값이 입력될때마다 계속 console에 찍힘
  // checkURL , navigate 이 두개 모두 MainCommunity에서 어떤 동작을 하던지간에 계속 console에 찍힘
  // React가 계속 리렌더링 하는듯

const MainCommunity = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const checkURL = useLocation();
  const navigate = useNavigate();
  const [categoryName, setCategoryName] = useState("전체");
  const [urlName, setUrlName] = useState("");
  const [title,setTitle]=useState("");
  const [content,setContent]=useState("");
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

  //modal
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }


  useEffect(()=>{
    submitBtn()
  })
  const getTitle=(e)=>{
    setTitle(e.target.value)
  }
  
  const getContent=(e)=>{
    setContent(e.target.value)
  }

  const submitBtn = (e) => {
    // e.preventDefault();
    console.log(title,content);

  };
  const catagoryChanged = (e) => {
    console.log(e.target.value);
    setCategoryName(e.target.value);
  };
  let sportName = ["전체", "농구", "야구", "배드민턴", "헬스", "축구", "기타"];
  return (
    <Container>
      <Header />
      <Container maxWidth="lg">
        <div className={styles.select_container}>
          <FormControl>
            <InputLabel id="demo-simple-select-label">카테고리</InputLabel>
            <Select
              onChange={catagoryChanged}
              label="카테고리"
              id="select_Catagory"
              value={categoryName}
            >
              {sportName.map((item, idx) => (
                <MenuItem value={item} key={idx}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {/* </div>
        <div className={styles.btn_container}> */}
          <button className={styles.write_btn} onClick={openModal}>
            글쓰기
          </button>
          <Modal
            isOpen={modalIsOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            ariaHideApp={false}
          >
            <h1 style={{marginBottom:"1%",marginTop:"0"}}>작성하기</h1>
            <div className={styles.titleContainer}>
              <label htmlFor="">제목</label>
              <div className={styles.contents}>
                <input type="text" placeholder="글의 제목을 입력해주세요" onChange={getTitle}/>
              </div>
              <label htmlFor="">내용</label>
              <div className={styles.contents}>
                <textarea
                  name="content"
                  id=""
                  placeholder="여기에 내용을 입력해주세요"
                  cols="10"
                  rows="10"
                  onChange={getContent}
                />
              </div>
            </div>
            <div className={styles.btnContainer}>
              <button className={styles.modalBtn} onClick={submitBtn}>
                등록
              </button>
              <button className={styles.modalBtn} onClick={closeModal}>
                close
              </button>
            </div>
          </Modal>
        </div>
        {/* <Container maxWidth="md"> */}
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          className={styles.stack_container}
        >
          <ListItem className={styles.stack_item}>
            {categoryName ? categoryName : ""} : 첫 글입니다.
          </ListItem>
          <ListItem className={styles.stack_item}>Item 2</ListItem>
          <ListItem className={styles.stack_item}>Item 3</ListItem>
        </Stack>
      </Container>
      {/* </Container> */}
    </Container>
  );
};

export default MainCommunity;
