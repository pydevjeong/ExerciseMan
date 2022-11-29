import React from "react";
import "./BookingPopup.css";
import DatePicker from "./PopupPage/DatePicker";
import Time from "./PopupPage/Time";
import { StyledEngineProvider } from "@mui/material/styles";
import { useLocation } from "react-router-dom";

const BookingPopup = (props) => {
  const info = useLocation();
  let { name, location, tel } = info.state;
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
