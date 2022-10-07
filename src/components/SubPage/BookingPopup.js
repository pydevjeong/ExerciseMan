import React from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import DatePicker from "./DatePicker";
import PopupTitle from "./PopupTitle";
import Time from "./Time";

const BookingPopup = () => {
  return (
    <div>
      <PopupTitle />
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
