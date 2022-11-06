import { useForm } from "react-hook-form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import React, { useState } from "react";
import FindAccount from "../FindAccount/FindAccount.js";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import kakao from "../../../img/kakao_login.png";
import { REST_API_KEY, REDIRECT_URI } from "./KakaoLoginData";
import setAuthorizationToken from "../../../utils/setAuthoriztionToken";

function Login(props) {
  const onSubmit = async (data) => {
    const { userId, password } = data;
    console.log(userId, password);
    await axios
      .post("http://15.165.205.17:8080/login", {
        userId: userId,
        password: password,
      })
      .then((res) => {
        console.log("good", res);
        if (res.data) {
          localStorage.setItem("user", JSON.stringify(res.data));
          setAuthorizationToken(JSON.stringify(res.data));
        }
        return res.data;
      })
      .catch((err) => console.log(err));
  };
  // const logout=()=>{
  //   localStorage.removeItem("user")
  // }
  // const getCurrentUser=()=>{
  //   return JSON.parse(localStorage.getItem("user"))
  // }

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm();
  const navigate = useNavigate();

  const registerLink = () => {
    navigate("/register");
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    height: "50%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = useState(props.isOpen);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const closeModal = () => setOpen(false);
  const kakaoLoginUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;
  const kakaoLogin = () => {
    window.location.href = kakaoLoginUrl;
  };

  return (
    <div className="form_container">
      <div className="mainLogo">
        <Link className="mainLink" to="/">
          운동人
        </Link>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="loginMainContentes">
          <div className="idInput">
            <label htmlFor="Id"></label>
            <input
              id="Id"
              type="text"
              className="textBox"
              placeholder="아이디"
              aria-invalid={!isDirty ? undefined : errors.id ? "true" : "false"}
              {...register("userId", {
                required: "아이디은 필수 입력입니다.",
              })}
            />
          </div>
          <div className="pwInput">
            <label htmlFor="password"></label>
            <input
              id="password"
              type="password"
              className="textBox"
              placeholder="비밀번호"
              aria-invalid={
                !isDirty ? undefined : errors.password ? "true" : "false"
              }
              {...register("password", {
                required: "비밀번호는 필수 입력입니다.",
                minLength: {
                  value: 3,
                },
              })}
            />
          </div>
          <div className="submitBtn">
            <button
              type="submit"
              disabled={isSubmitting}
              className="submitBtnStyle"
            >
              로그인
            </button>
          </div>
        </div>
        <div className="findId">
          <button className="findAcc" onClick={handleOpen}>
            계정 찾기
          </button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h5" component="h2">
                이메일로 계정 찾기
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <FindAccount />
              </Typography>
              <Button onClick={closeModal}>닫기</Button>
            </Box>
          </Modal>
          /
          <btton className="findAcc" onClick={registerLink}>
            회원가입
          </btton>
        </div>
        <div className="btLine" />
        <btton className="snsLogin" onClick={kakaoLogin}>
          <img alt="kakao" src={kakao} />
        </btton>
      </form>
    </div>
  );
}

export default Login;
