import { useForm } from "react-hook-form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import setAuthorizationToken from "../../../utils/setAuthoriztionToken";

function Login() {
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
  const findAccountLink = () => {
    navigate("/findAccount");
  };
  const registerLink = () => {
    navigate("/register");
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
          <div className="findAcc" onClick={findAccountLink}>
            계정 찾기
          </div>
          &nbsp;/&nbsp;
          <div className="goRegi" onClick={registerLink}>
            회원가입
          </div>
        </div>
        <div className="btLine" />
        <div className="snsLogin">
          <div>페이스북</div>
          <div>구글</div>
        </div>
      </form>
    </div>
  );
}

export default Login;