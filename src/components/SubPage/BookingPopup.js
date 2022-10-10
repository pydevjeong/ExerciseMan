import React from "react";
import "./BookingPopup.css";
import DatePicker from "./PopupPage/DatePicker";
import BookingHead from "./PopupPage/BookingHead";
import Time from "./PopupPage/Time";
import { StyledEngineProvider } from "@mui/material/styles";

const openPopup = (url1) => {
  var url = url1;
  var title = "popup";
  var status =
    "toolbar=no,scrollbars=no,resizable=no,status=no,menubar=no,width=500, height=700, top=0,left=0";

  window.open(url, title, status);
};

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
