import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
//'https://floating-savannah-45478.herokuapp.com/http://openapi.seoul.go.kr:8088/'+'/'+'http://43.201.58.181:8080/user/member',
const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = ()=>{
  }
  console.log(errors);

  const [idInput,setIdInput]=useState('')
  const [pwInput,setPwInput]=useState('')
  const [checkPw,setCheckPw]=useState(false)
  const submitBtn=(e)=>{
    e.preventDefault();
    console.log(e);
  }
  const idInputHandler=(e)=>{
    setIdInput(e.target.value)
  }
  const passwordInputHandler=(e)=>{
    setPwInput(e.target.value)
  }
  const checkPassword=(e)=>{
    if(e.target.value===pwInput){
      setCheckPw(true)
    }
    setCheckPw(false)
  }
  const nickNameInput=(e)=>{
    console.log(e);
  }
      
      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="formId">
            <label htmlFor="Id">아이디</label>
            <input type="text" placeholder="Id" {...register("userId", {required: true, maxLength: 80})} />
          </div>
          <div className="formPw">
            <label htmlFor="Id">비밀번호</label>
            <input type="password" placeholder="Password" {...register("Password", {})} />
          </div>
          <div className="formPwChk">
            <label htmlFor="Id">비밀번호 확인</label>
            <input type="password" placeholder="CheckPassWord" {...register("CheckPassWord", {})} />
          </div>
          <div className="formEmail">
            <label htmlFor="Id">이메일</label>
            <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
          </div>
          <div className="formEmail">
            <label htmlFor="Id">닉네임</label>
            <input type="text" placeholder="NickName" {...register("NickName", {required: true, maxLength: 100})} />
          </div>
            <input type="submit" />
        </form>
      );
}
export default Register;