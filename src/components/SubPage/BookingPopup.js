import React, { useEffect, useState } from "react";
import "./BookingPopup.css";
import DatePicker from "./PopupPage/DatePicker";
import Time from "./PopupPage/Time";
import { StyledEngineProvider } from "@mui/material/styles";
import { useLocation } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { getCookieToken } from "../../storage/Cookie";


const BookingPopup = (props) => {
  let token = getCookieToken();
  
  const getCookie=()=>{
    if(token) return jwt_decode(token)
  }  
  useEffect(()=>{
    const gotCookie=getCookie()
    // console.log(gotCookie);
    setCookies(gotCookie)
  },[])
  const [cookies,setCookies]=useState('')
  const info = useLocation();
  let { name, id,location, tel } = info.state;
  console.log(name, id,location,tel,cookies.sub,cookies.id);
  return (
    <div>
      <h1 className="bookingHeader">{name}</h1>
      <div className="v50_">
        <StyledEngineProvider injectFirst>
          <DatePicker />
        </StyledEngineProvider>
      </div>
      <Time close={props.close} />
    </div>
  );
};

export default BookingPopup;
