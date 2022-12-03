import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Regi.css";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegistration = async (data) => {
    const { userId, password, email, nickname } = data;
    console.log(userId, password, email, nickname);
    await axios
      .post("http://52.79.76.198:8080/join", {
        userId: userId,
        password: password,
        email: email,
        nickname: nickname,
      })
      .then((response) => {
        console.log("great!", response.data);
      })
      .catch((err) => console.log("error", err));
  };

  const handleError = (errors) => {};

  const registerOptions = {
    name: { required: "Name is required" },
    email: { required: "Email is required" },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters",
      },
    },
    checkPassWord: {
      required: "Password is not correct",
    },
  };

  return (
    <div className="registerContainer">
      <form onSubmit={handleSubmit(handleRegistration, handleError)}>
        <div className="regiMainLogo">
          <Link className="mainLink" to="/">
            운동人
          </Link>
        </div>
        <div className="registercontentes">
          <div>
            <label>아이디</label>
            <input
              name="userId"
              type="text"
              placeholder="사용할 아이디를 입력하세요"
              className="regiTextBox"
              {...register("userId", registerOptions.name)}
            />
            <small className="text-danger">
              {errors?.name && errors.name.message}
            </small>
          </div>

          <div className="regiMargin">
            <label>비밀번호</label>
            <input
              type="password"
              name="password"
              placeholder="6자 이상 입력하세요"
              className="regiTextBox"
              {...register("password", registerOptions.password)}
            />
            <small className="text-danger">
              {errors?.password && errors.password.message}
            </small>
          </div>
          <div className="regiMargin">
            <label>비밀번호 재확인</label>
            <div>
              <input
                type="checkPassWord"
                name="checkPassWord"
                placeholder="위와 동일한 비밀번호를 입력해주세요"
                className="regiTextBox"
                {...register("checkPassWord", registerOptions.checkPassWord)}
              />
              <small className="text-danger">
                {errors?.checkPassWord && errors.checkPassWord.message}
              </small>
            </div>
          </div>

          <div className="regiMargin">
            <label>이메일</label>
            <input
              type="email"
              name="email"
              placeholder="이메일을 입력해주세요"
              className="regiTextBox"
              {...register("email", registerOptions.email)}
            />
            <small className="text-danger">
              {errors?.email && errors.email.message}
            </small>
          </div>

          <div className="regiMargin">
            <label>닉네임</label>
            <input
              name="nickname"
              type="text"
              placeholder="2자 이상 입력하세요"
              className="regiTextBox"
              {...register("nickname", registerOptions.name)}
            />
            <small className="text-danger">
              {errors?.name && errors.name.message}
            </small>
          </div>
          <button className="registersubmitBtn">회원가입</button>
        </div>
      </form>
    </div>
  );
};
export default Register;
