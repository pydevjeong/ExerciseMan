import React from "react";
import { useLocation } from "react-router-dom";

const MainCommnuity = () => {
  const checkURL = useLocation();
  console.log(checkURL.pathname);
  let sportName=['전체','농구','야구','배드민턴','헬스','축구','기타']
    // switch (checkURL.pathname) {
    //   case "/basketball":
    //     sportName='농구'
    //     break;
    //   case "/baseball":
    //     sportName='야구'
    //     break;
    //   case "/badminton":
    //     sportName='배드민턴'
    //     break;
    //   case "/gym":
    //     sportName='헬스'
    //     break;
    //   case "/soccer":
    //     sportName='축구'
    //     break;
    //   case "others":
    //     sportName='기타'
    //     break;
    //   default:
    //     sportName='전체'
    //     break;
    // }
  return (
    <div>
      <h2>hi</h2>
      <select name="" id="">
        {sportName.map((item,idx)=><option key={idx}>{item}</option>)}
      </select>
    </div>
  );
};

export default MainCommnuity;
