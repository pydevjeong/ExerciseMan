import { useForm } from "react-hook-form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./Login.css"
import axios from "axios"
import setAuthorizationToken from "../../../utils/setAuthoriztionToken";

function Login(){

  const onSubmit = async (data) => {
    const {userId,password}=data
    console.log(userId,password)
    await axios.post('http://15.165.205.17:8080/login',{
      userId:userId,
      password:password
    })
    .then(res=>{
      console.log('good',res)
      if(res.data){
        localStorage.setItem("user",JSON.stringify(res.data))
        setAuthorizationToken(JSON.stringify(res.data))
      }
      return res.data
    })
    .catch(err=>console.log(err))
  }
  
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
  const navigate=useNavigate()
  const findAccountLink=()=>{
    navigate('/findAccount')
  }
  const registerLink=()=>{
    navigate('/register')
  }

  return (

    <div className="form_container">
      <div className="mainLogo">
        <Link className="mainLink" to='/'>운동人</Link>
      </div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="idInput">
        <label htmlFor="Id">아이디</label>
        <input
          id="Id"
          type="text"
          placeholder="아이디를 입력해주세요"
          aria-invalid={!isDirty ? undefined : errors.id ? "true" : "false"}
          {...register("userId", {
            required: "아이디은 필수 입력입니다."
          })}
        />
      </div>
      <div className="pwInput">
        <label htmlFor="password">비밀번호</label>
        <input
          id="password"
          type="password"
          placeholder="*****"
          aria-invalid={!isDirty ? undefined : errors.password ? "true" : "false"}
          {...register("password", {
            required: "비밀번호는 필수 입력입니다.",
            minLength: {
              value: 3,
            },
          })}
        />
      </div>
      <div className="findId">아이디 찾기 / 비밀번호 찾기 / 회원가입</div>
      <div className="btLine" />
      <div className="snsLogin">
        <div>페이스북</div>
        <div>구글</div>
      </div>
      <div className="submitBtn">
      <button onClick={findAccountLink}>계정 찾기</button>
        
        <button type="submit" disabled={isSubmitting}>
          로그인
        </button>
        <button onClick={registerLink}>회원가입</button>
      </div>
    </form>
    </div>
  );
}


export default Login