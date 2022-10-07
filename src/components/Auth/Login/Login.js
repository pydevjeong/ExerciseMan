import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import './Login.css'
import axios from 'axios'

const handleRegistration = async(data)=>{
  const {userId,password,email,name}=data
  console.log(userId,password,email,name);
  await axios.post('/user/join',{
    userId: userId,
    password: password,
    email: email,
    name: name
  })
  .then(response=>console.log('great!',response.data))
  .catch(err=>console.log('error',err))
}

function Login({
  onSubmit = async (data) => {
    const {userId,password}=data
    console.log(userId,password)
    await axios.get('/user/login',{
      userId:userId,
      password:password
    })
    .then(res=>console.log('good',res))
    .catch(err=>console.log(err))
  },
}) 
{
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm();

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
        {errors.email && <small role="alert">{errors.email.message}</small>}
      </div>
      <div className="pwInput">
        <label htmlFor="password">비밀번호</label>
        <input
          id="password"
          type="password"
          placeholder="****************"
          aria-invalid={!isDirty ? undefined : errors.password ? "true" : "false"}
          {...register("password", {
            required: "비밀번호는 필수 입력입니다.",
            minLength: {
              value: 6,
            },
          })}
        />
        {errors.password && <small role="alert">{errors.password.message}</small>}
      </div>
      <div className="submitBtn">
        <button type="submit" disabled={isSubmitting}>
          로그인
        </button>
      </div>
    </form>
    </div>
  );
}

export default Login