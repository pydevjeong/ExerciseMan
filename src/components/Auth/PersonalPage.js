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
import {SERVERIP} from '../../utils/Constant'

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
  const [showData,setShowData]=useState(false)

  useEffect(()=>{
    const gotCookie=getCookie()
    if(gotCookie!==undefined){
      setCookieInfo(gotCookie)
    }
  },[])
  const getReservationInfo=async(e)=>{
    // resId.push(location.state.faci_id)
    console.log(cookieInfo.id);
    e.preventDefault();
    await axios.get(`http://${SERVERIP}:8080/reservation/user/${cookieInfo.id}`)
    .then((res)=>{
      setReserveData(res.data)
      setShowData(true)
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
            <button className="Inquirebtn">1:1 ????????????</button>
            <button onClick={logoutHandler} className="logoutbtn">????????????</button>
          </div>
          <div className="PersonalMain">
            <div className="userinfo">
              ?????? ??????
              <div className="userinfo1">
                <div className="userinfo2">
                  ?????? ?????????
                  <div className="userinfospan">0P</div>
                </div>
                <div className="userinfo2">
                  ?????? ????????????
                  <div className="userinfospan">-</div>
                </div>
                <div className="userinfo2">
                  ?????????
                  <div className="userinfospan">0???</div>
                </div>
                <div className="userinfo3">
                  ?????????
                  <div className="userinfospan">0???</div>
                </div>
              </div>
            </div>
            <div className="reservationinfo">
              <button onClick={getReservationInfo}>?????? ????????????</button>
              <div className="reservationcontents">
                <DateRangeIcon fontSize="large" />
                {showData ? reserveData.map((e,i)=>(
                  <div key={i}>
                   <p>?????? ?????? : {e.resLocation}</p>
                   <p>?????? ?????? : {e.resName}</p>
                  </div>
                ))
                :
                <p>????????? ??????</p>
              }
              </div>
            </div>
            <div className="addFunction">
              <div className="addFunction2">
                <FitnessCenterIcon fontSize="large" />
                <div className="addFunctionhover">??????????????????</div>
              </div>
              <div className="addFunction2">
                <EventAvailableIcon fontSize="large" />
                <div className="addFunctionhover">??????/?????????</div>
              </div>
              <div className="addFunction2">
                <HeadsetMicIcon fontSize="large" />
                <div className="addFunctionhover">????????????</div>
              </div>
              <div className="addFunction3">
                <SettingsIcon fontSize="large" />
                <div className="addFunctionhover">????????????</div>
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
