import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";


const Register = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const handleRegistration = async(data)=>{
    const {userId,password,email,nickname}=data
    console.log(userId,password,email,nickname);
    await axios.post('http://15.165.205.17:8080/join',{
      userId: userId,
      password: password,
      email: email,
      nickname: nickname
    })
    .then(response=>{
      console.log('great!',response.data)
    })
    .catch(err=>console.log('error',err))
  }

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
    <form onSubmit={handleSubmit(handleRegistration, handleError)}>
      <div>
        <label>Id</label>
        <input
          name="userId"
          type="text"
          {...register("userId", registerOptions.name)}
        />
        <small className="text-danger">
          {errors?.name && errors.name.message}
        </small>
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          {...register("password", registerOptions.password)}
        />
        <small className="text-danger">
          {errors?.password && errors.password.message}
        </small>
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          {...register("email", registerOptions.email)}
        />
        <small className="text-danger">
          {errors?.email && errors.email.message}
        </small>
      </div>

      <div>
        <label>nickname</label>
        <input
          name="nickname"
          type="text"
          {...register("nickname", registerOptions.name)}
        />
        <small className="text-danger">
          {errors?.name && errors.name.message}
        </small>
      </div>

      <button>Submit</button>
    </form>
  );
};
export default Register;
