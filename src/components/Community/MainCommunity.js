import { FormControl, InputLabel, ListItem, MenuItem, Select, Stack } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Layout/Header/Header";
import styles from "./MainCommunity.module.css";

const MainCommunity = () => {
  const checkURL = useLocation();
  const navigate = useNavigate();
  const [categoryName, setCategoryName] = useState("전체");
  const [urlName, setUrlName] = useState("");
// 로직상 이 페이지가 열리면 아래 useEffect부분에 case "전체"가 제일 먼저 실행됨
// -> 받아온 url에 따라서 카테고리도 바뀌게 변경해야함
  useEffect(() => {
    setUrlName(checkURL.pathname);
    switch (categoryName) {
      case "전체":
        console.log("전체");
        break;
      case "농구":
        navigate("/basketball");
        console.log("농구");
        break;
      case "야구":
        navigate("/baseball");
        console.log("야구");
        break;
      case "배드민턴":
        navigate("/badminton");
        break;
      case "헬스":
        navigate("/gym");
        break;
      case "축구":
        navigate("/soccer");
        break;
      case "기타":
        navigate("/others");
        break;
      default:
        //없는 페이지입니다
        break;
    }
  }, [checkURL.pathname, categoryName, navigate]);
  console.log(urlName);

  const writingBtn = () => {
    console.log("click");
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
              </MenuItem >
            ))}
          </Select>
          </FormControl>
        {/* </div>
        <div className={styles.btn_container}> */}
          <button className={styles.write_btn} onClick={writingBtn}>
            글쓰기
          </button>
        </div>
        {/* <Container maxWidth="md"> */}
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            className={styles.stack_container}
          >
            <ListItem className={styles.stack_item}>{categoryName ? categoryName : ''} : 첫 글입니다.</ListItem>
            <ListItem className={styles.stack_item}>Item 2</ListItem>
            <ListItem className={styles.stack_item}>Item 3</ListItem>
          </Stack>
        </Container>
      {/* </Container> */}
    </Container>
  );
};

export default MainCommunity;
