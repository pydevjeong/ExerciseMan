import React from "react";

const KakaoLogin = (props) => {
  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code");

  return (
    <div>
      <h1>카카오 로그인 테스트화면</h1>
      <h3>{code}</h3>
    </div>
  );
};

export default KakaoLogin;
