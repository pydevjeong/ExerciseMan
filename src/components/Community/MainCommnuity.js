import React from "react";
import { useLocation } from "react-router-dom";

const MainCommnuity = () => {
  const checkURL = useLocation();
  function urlPages() {
    switch (checkURL.pathname) {
      case "/basketball":
        break;
      case "/baseball":
        break;
      case "/soccer":
        break;
      case "/badminton":
        break;
      case "/running":
        break;
      case "others":
        break;
      default:
        break;
    }
  }
  return (
    <div>
      <h2>hi</h2>
    </div>
  );
};

export default MainCommnuity;
