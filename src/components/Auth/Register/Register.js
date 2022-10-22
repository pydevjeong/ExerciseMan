import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./Regi.css";
import axios from "axios";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegistration = async (data) => {
    const { userId, password, email, name } = data;
    console.log(userId, password, email, name);
    await axios
      .post("/user/join", {
        userId: userId,
        password: password,
        email: email,
        name: name,
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
            <div>
              <input
                name="userId"
                type="text"
                className="regiTextBox"
                {...register("userId", registerOptions.name)}
              />
              <small className="text-danger">
                {errors?.name && errors.name.message}
              </small>
            </div>
          </div>

          <div className="regiMargin">
            <label>비밀번호</label>
            <div>
              <input
                type="password"
                name="password"
                className="regiTextBox"
                {...register("password", registerOptions.password)}
              />
              <small className="text-danger">
                {errors?.password && errors.password.message}
              </small>
            </div>
          </div>

          <div className="regiMargin">
            <label>비밀번호 재확인</label>
            <div>
              <input
                type="email"
                name="email"
                className="regiTextBox"
                {...register("email", registerOptions.email)}
              />
              <small className="text-danger">
                {errors?.email && errors.email.message}
              </small>
            </div>
          </div>

          <div className="regiMargin">
            <label>이름</label>
            <div>
              <input
                name="name"
                type="text"
                className="regiTextBox"
                {...register("name", registerOptions.name)}
              />
              <small className="text-danger">
                {errors?.name && errors.name.message}
              </small>
            </div>
          </div>
        </div>

        <button className="registersubmitBtn">회원가입</button>
      </form>
    </div>
  );
};
export default Register;
