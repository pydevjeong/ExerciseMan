import React from "react";
import "./BookingPopup.css";
import DatePicker from "./PopupPage/DatePicker";
import Time from "./PopupPage/Time";
import { StyledEngineProvider } from "@mui/material/styles";
import { useLocation } from "react-router-dom";

const BookingPopup = () => {
  const info=useLocation()
  let {name,location,tel}=info.state
  return (
    <div>
      <h1>{name}</h1>
      <div className="v50_">
        <StyledEngineProvider injectFirst>
          <DatePicker />
        </StyledEngineProvider>
      </div>
      <Time />
    </div>
  );
};

export default BookingPopup;
