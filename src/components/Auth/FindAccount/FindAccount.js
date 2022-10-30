import React from 'react';
import { Link } from 'react-router-dom';

const FindAccount = () => {
  return (
    <div className="form_container_acc">
      <div className="mainLogo">
        <Link className="mainLink" to="/">
          운동人
        </Link>
      </div>
      <div className="findAccount">
        이메일로 계정 찾기
        <input
          type="text"
          className="inputAddr"
          placeholder="이메일을 입력해주세요"
        />
        <button className="findAccBtn">전송</button>
      </div>
    </div>
  );
};

export default FindAccount;