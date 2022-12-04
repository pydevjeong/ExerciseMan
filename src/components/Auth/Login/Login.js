import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import React, { useState } from "react";
import FindAccount from "../FindAccount/FindAccount.js";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Modal } from "@mui/material";
import kakao from "../../../img/kakao_login.png";
import { REST_API_KEY, REDIRECT_URI } from "./KakaoLoginData";
import { useDispatch } from "react-redux";
import { loginUser } from "../../API/Users";
import { setRefreshToken } from "../../../storage/Cookie";
import {SET_TOKEN} from "../../../store/Auth"

function Login() {
  const navigate = useNavigate();
  const dispatch= useDispatch();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { userId, password } = data;
    console.log(userId, password);
    const response = await loginUser({ userId, password });
    //reponse status는 true아니면 false로 온다
    if (response.status) {
      console.log(response.json);
        // 쿠키에 Refresh Token, store에 Access Token 저장
        setRefreshToken(response.json.refresh_token);
        dispatch(SET_TOKEN(response.json.access_token));
        // return navigate("/");
    } else {
        console.log(response.json);
    }
  };


  const registerLink = () => {
    navigate("/register");
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = useState(false);
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
            계정찾기
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
              <FindAccount />
              <Button onClick={closeModal}>닫기</Button>
            </Box>
          </Modal>
          /
          <button className="findAcc" onClick={registerLink}>
            회원가입
          </button>
        </div>
        <button className="snsLogin" onClick={kakaoLogin}>
          <img alt="kakao" src={kakao} />
        </button>
      </form>
    </div>
  );
}

export default Login;
