import { useForm } from "react-hook-form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import './Login.css'
import axios from 'axios'

function Login({
  onSubmit = async (data) => {
    const {userId,password}=data
    console.log(userId,password)
    await axios.get('/user/login',{
      userId:userId,
      password:password
    })
    .then(res=>{
      console.log('good',res)
      localStorage.getItem("token")
    })
    .catch(err=>console.log(err))
  },
}) 
{
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