import React, { useState } from "react";
import NoticeCard from "./NoticeCard";

// 벡엔드에서 공지사항의 글들을 받아서 여기다가 나오게 해야함
// NoticeCard에 props를 날려서 공지사항이 나오게 해야함
const Notice = (props) => {
  return (
    <>
      <NoticeCard/>
    </>
  );
};

export default Notice;
