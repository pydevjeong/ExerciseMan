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
import axios, { Axios } from "axios";

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

  const [title,setTitle]=useState("");
  const [content,setContent]=useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const checkURL = useLocation();
  const navigate = useNavigate();
  const [categoryName, setCategoryName] = useState("전체");
  const [urlName, setUrlName] = useState("");

  function getBoardData(){
    axios.get("http://15.165.205.17:8080/posts")
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  }
  useEffect(()=>{
    // getBoardData()
  },[])

  const catagoryChanged = (e) => {
    console.log(e.target.value);
    setCategoryName(e.target.value);
  };

  let sportName = ["전체", "농구", "야구", "배드민턴", "헬스", "축구", "기타"];
    //modal
    function openModal() {
      setIsOpen(true);
    }
    function closeModal() {
      setIsOpen(false);
    }
  
    const getTitle=(e)=>{
      setTitle(e.target.value)
    }
    
    const getContent=(e)=>{
      setContent(e.target.value)
    }
  
    const submitBtn = async(e) => {
      e.preventDefault();
      console.log(title,content);
      if(title==="" && content===""){
        alert("내용입력바람")
        return false
      }
      else{
      await axios.post("http://15.165.205.17:8080/posts/create",{
        title:title,
        content:content
      })
      .then(res=>{
        console.log(res)
      })
      .catch(err=>console.log(err))
    }
    };
  return (
    <div>
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
    </div>
  );
};

export default CommunityBoard;