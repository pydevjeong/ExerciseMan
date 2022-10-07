import React from "react";
import "./BookingPopup.css";
import DatePicker from "./PopupPage/DatePicker";
import BookingHead from "./PopupPage/BookingHead";
import Time from "./PopupPage/Time";
import { StyledEngineProvider } from "@mui/material/styles";

const BookingPopup = () => {
  return (
    <div>
      <BookingHead />
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
