import React from "react";
import { Container } from "@mui/material";
import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";
import "./PersonalPage.css";
import Personal from "../../img/man.png";
import DateRangeIcon from "@mui/icons-material/DateRange";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import SettingsIcon from "@mui/icons-material/Settings";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import {Logout} from "./Logout/Logout";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { decoded } from "../../utils/jwtTokenDecoder";

const PersonalPage = () => {
  const navigate = useNavigate()
  const logoutHandler=()=>{
    navigate('/logout')
  }
  useEffect(()=>{
    
  },[])

  return (
    <Container>
      <Header />
      <Container>
        <div className="PersonalPage">
          <div className="PersonalInfo">
            <img className="PersonalImg" alt="Personal" src={Personal} />
            <div className="PersonalName">{decoded.sub}</div>
            <div className="PersonalAdd">*******@****.com</div>
            <p className="PersonalAdd">Id : {decoded.id}</p>
            <button className="Inquirebtn">1:1 문의하기</button>
            <button onClick={logoutHandler} className="logoutbtn">로그아웃</button>
          </div>
          <div className="PersonalMain">
            <div className="userinfo">
              나의 정보
              <div className="userinfo1">
                <div className="userinfo2">
                  나의 포인트
                  <div className="userinfospan">0P</div>
                </div>
                <div className="userinfo2">
                  나의 출석현황
                  <div className="userinfospan">-</div>
                </div>
                <div className="userinfo2">
                  북마크
                  <div className="userinfospan">0개</div>
                </div>
                <div className="userinfo3">
                  쿠폰함
                  <div className="userinfospan">0개</div>
                </div>
              </div>
            </div>
            <div className="reservationinfo">
              나의 예약정보
              <div className="reservationcontents">
                <DateRangeIcon fontSize="large" />
                예약된 시설이 없습니다.
              </div>
            </div>
            <div className="addFunction">
              <div className="addFunction2">
                <FitnessCenterIcon fontSize="large" />
                <div className="addFunctionhover">시설등록요청</div>
              </div>
              <div className="addFunction2">
                <EventAvailableIcon fontSize="large" />
                <div className="addFunctionhover">공지/이벤트</div>
              </div>
              <div className="addFunction2">
                <HeadsetMicIcon fontSize="large" />
                <div className="addFunctionhover">고객센터</div>
              </div>
              <div className="addFunction3">
                <SettingsIcon fontSize="large" />
                <div className="addFunctionhover">세부정보</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div
        style={{
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
          background: "#303030",
          overflow: "hidden",
        }}
      >
        <Footer />
      </div>
    </Container>
  );
};

export default PersonalPage;
