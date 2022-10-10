import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ApiTest from './ApiTest';

const CloseFacility = (props) => {
  const checkProps= useLocation()
  const [inputValue,setInputValue]=useState("")
  useEffect(()=>{
    setInputValue(checkProps.state.searchInput)
  },[checkProps.state.searchInput])
  
  console.log(inputValue)
  return (
    <div>
      <ApiTest inputValue={inputValue}/>
    <Container>
      <h1>{inputValue}</h1>
      <h2>CloseFacility 페이지</h2>
    </Container>
    </div>
  );
};

export default CloseFacility;