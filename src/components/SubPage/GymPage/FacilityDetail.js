import { Container } from "@mui/system";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../Layout/Header/Header";
import styles from "./FacilityDetail.module.css";
import Iframe from "react-iframe";
import ModalPage from "../../../Modal/ModalPage";

const FacilityDetail = () => {
  // const params=useNavigate()
  const info = useLocation();
  console.log(info.state);
  const decode = decodeURI(info?.search);
  console.log(decode);
  const navigate=useNavigate()
  const [isOpen,setIsOpen] =useState(false)


  const openPopup=()=>{
    navigate('/booking_popup',{state:info.state})
    setIsOpen(true)
  }
  return (
    <>
      <Header />
      <Container>
        <div className={styles.main_container}>
          <div>
            <div className={styles.title_con}>
              <h1>{info.state.name}</h1>
              <button>북마크</button>
            </div>
          </div>

          <div className={styles.location_con}>
            <h2>{info.state.location}</h2>
          </div>
          <button>공유버튼</button>
          <div className={styles.tel_con}>
            <h3>{info.state.tel}</h3>
          </div>
          <div>
            <button>커뮤하기</button>
            <button onClick={openPopup}>예약하기</button>
          </div>
          <div>
            <p>시설정보</p>
            <span>ㅂㅈ얍ㅈ우ㅑ</span>
            <Iframe
              url="https://youtube.com/embed/uz6TUGCXe7c"
              width="500px"
              height="400px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default FacilityDetail;
