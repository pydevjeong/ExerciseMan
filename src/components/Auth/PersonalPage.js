import React, { useState } from "react";
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
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { getCookieToken } from "../../storage/Cookie";
import axios from "axios";

let token = getCookieToken();
const getCookie=()=>{
  if(token) return jwt_decode(token)
}
const PersonalPage = () => {
  const resId=[]
  const navigate = useNavigate()
  const location = useLocation()
  const logoutHandler=()=>{
    navigate('/logout')
  }
  const [cookieInfo,setCookieInfo]=useState({sub:"Temp Name",id:"Temp Id"})
  const [reserveData,setReserveData]=useState('')
  useEffect(()=>{
    const gotCookie=getCookie()
    if(gotCookie!==undefined){
      setCookieInfo(gotCookie)
    }
  },[])
  const getReservationInfo=async(e)=>{
    resId.push(location.state.faci_id)
    e.preventDefault();
    await axios.get(`http://54.180.91.160:8080/reservation/${resId[0]}`)
    .then((res)=>{
      setReserveData(res.data)
    })
    .catch((err)=>console.log(err))
  }
  console.log(reserveData);
  return (
    <Container>
      <Header />
      <Container>
        <div className="PersonalPage">
          <div className="PersonalInfo">
            <img className="PersonalImg" alt="Personal" src={Personal} />
            <div className="PersonalName">{cookieInfo.sub}</div>
            <p className="PersonalAdd">Database Id : {cookieInfo.id}</p>
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
              <button onClick={getReservationInfo}>나의 예약정보</button>
              <div className="reservationcontents">
                <DateRangeIcon fontSize="large" />
                  <p>예약 시설 이름 : {reserveData ?reserveData[reserveData.length-1].resName : "예약된 시설"}</p>
                  <p>예약 시설 위치 : {reserveData ?reserveData[reserveData.length-1].resLocation : "예약된 위치"}</p>
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
