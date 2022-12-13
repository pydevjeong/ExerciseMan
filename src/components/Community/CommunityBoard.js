import {
  FormControl,
  InputLabel,
  ListItem,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./MainCommunity.module.css";
import Modal from "react-modal";
import axios from "axios";
import { getCookieToken } from "../../storage/Cookie";
import jwt_decode from "jwt-decode";

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

const CommunityBoard = () => {
  let token = getCookieToken();
  const getCookie = () => {
    if (token) return jwt_decode(token);
  };
  const [cookies, setCookies] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const checkURL = useLocation();
  const navigate = useNavigate();
  const [categoryName, setCategoryName] = useState("");
  const [urlName, setUrlName] = useState("");

  useEffect(() => {
    const gotCookie = getCookie();
    setCookies(gotCookie);
  }, []);
  // console.log(cookies);

  function getBoardData() {
    axios
      .get("http://54.180.152.210:8080/posts")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    if (checkURL.pathname === "/basketball") {
      setCategoryName("농구");
    } else if (checkURL.pathname === "/soccer") {
      setCategoryName("축구");
    } else if (checkURL.pathname === "/badminton") {
      setCategoryName("배드민턴");
    } else if (checkURL.pathname === "/gym") {
      setCategoryName("헬스");
    } else if (checkURL.pathname === "/QandA") {
      setCategoryName("Q & A");
    } else if (checkURL.pathname === "/others") {
      setCategoryName("기타");
    }
  }, [checkURL]);

  const catagoryChanged = (e) => {
    console.log(e.target.value);
    setCategoryName(e.target.value);
  };
  const getCommunityContent = (e) => {
    // navigate(checkURL.pathname+'/community'+`${}`)
    console.log(e);
  };
  let tempContent = [
    "잉글랜드도 축구수준 많이 올라왔네",
    "펙덱플라이,체스트프레스 하루에 두개 같이해도됨?",
    "배고프다",
  ];
  //modal
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const getTitle = (e) => {
    setTitle(e.target.value);
  };

  const getContent = (e) => {
    setContent(e.target.value);
  };

  const submitBtn = async (e) => {
    e.preventDefault();
    console.log(title, content);
    if (title === "" && content === "") {
      alert("내용입력바람");
      return false;
    } else {
      await axios
        .post(`http://54.180.152.210:8080/posts/${cookies.id}/create`, {
          title: title,
          content: content,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div>
      <Container maxWidth="lg">
        <div className={styles.select_container}>
          <h1>{categoryName}</h1>
          <button className={styles.write_btn} onClick={openModal}>
            글쓰기
          </button>
          <Modal
            // onAfterOpen={afterOpenModal}
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            ariaHideApp={false}
          >
            <h1 style={{ marginBottom: "1%", marginTop: "0" }}>작성하기</h1>
            <div className={styles.titleContainer}>
              <label htmlFor="">제목</label>
              <div className={styles.contents}>
                <input
                  type="text"
                  placeholder="글의 제목을 입력해주세요"
                  onChange={getTitle}
                />
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
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          className={styles.stack_container}
        >
          {tempContent.map((item, idx) => (
            <ListItem
              onClick={getCommunityContent}
              className={styles.stack_item}
              key={idx}
            >
              {idx + 1}. {categoryName} : {item}
            </ListItem>
          ))}
        </Stack>
      </Container>
    </div>
  );
};

export default CommunityBoard;
