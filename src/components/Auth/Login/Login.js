import React from 'react';
import {Button, InputText, Password} from 'primereact'
import { useState } from 'react';

const Login = () => {
  const [inputId,setInputId]=useState('')
  const [inputPw,setInputPw]=useState('')
  const submitLogin=(e)=>{
    e.preventDefault();

  }
  const idInput=(e)=>{
    setInputId(e.target.value)
  }
  const passwordInput=(e)=>{
    setInputPw(e.target.value)
  }
  return (
    <div className="flex justify-content-center">
      <div className="card">
        <h5 className="text-center">Register</h5>
        <form onSubmit={submitLogin}>
        <div className="field">
          <span className='p-float-label'>
            <InputText id='id' name='id' onChange={idInput}/>
            <label htmlFor="id">Id*</label>
          </span>
        </div>
        <div className="field">
          <span className='p-float-label'>
            <Password id='password' name='password' onChange={passwordInput}/>
            <label htmlFor="password">Password*</label>
          </span>
        </div>
          <Button type='submit' label='Submit' className='mt-2'/>
        </form>
      </div>
    </div>
  );
};

export default Login;