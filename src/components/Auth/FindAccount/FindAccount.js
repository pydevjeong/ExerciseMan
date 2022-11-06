import React from "react";
import "./FindAccount.css";

const FindAccount = () => {
  return (
    <div className="findAccount">
      <input
        type="text"
        className="inputAddr"
        placeholder="이메일을 입력해주세요"
      />
      <button className="findAccBtn">전송</button>
    </div>
  );
};

export default FindAccount;
