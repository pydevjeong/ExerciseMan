import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./Login.css";
import axios from "axios";

function Login({
  onSubmit = async (data) => {
    const { userId, password } = data;
    console.log(userId, password);
    await axios
      .get("/user/login", {
        userId: userId,
        password: password,
      })
      .then((res) => {
        console.log("good", res);
        localStorage.getItem("token");
      })
      .catch((err) => console.log(err));
  },
}) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm();

  return (
    <div className="form_container">
      <div className="mainLogo">
        <Link className="mainLink" to="/">
          운동人
        </Link>
      </div>
      <div className="loginMainContentes">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="idInput">
            <label htmlFor="Id"></label>
            <input
              id="Id"
              type="text"
              placeholder="아이디"
              className="textBox"
              aria-invalid={!isDirty ? undefined : errors.id ? "true" : "false"}
              {...register("userId", {
                required: "아이디은 필수 입력입니다.",
              })}
            />
            {errors.email && <small role="alert">{errors.email.message}</small>}
          </div>
          <div className="pwInput">
            <label htmlFor="password"></label>
            <input
              id="password"
              type="password"
              placeholder="비밀번호"
              className="textBox"
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
            {errors.password && (
              <small role="alert">{errors.password.message}</small>
            )}
          </div>
          <div className="submitBtn">
            <button
              type="submit"
              className="submitBtnStyle"
              disabled={isSubmitting}
            >
              로그인
            </button>
          </div>
        </form>
      </div>
      <div className="findId">아이디 찾기 / 비밀번호 찾기 / 회원가입</div>
      <div className="btLine" />
      <div className="snsLogin">
        <div>페이스북</div>
        <div>구글</div>
      </div>
    </div>
  );
}

export default Login;
