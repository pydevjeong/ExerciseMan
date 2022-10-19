import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ApiPage from '../../API/ApiPage';

const CloseFacility = (props) => {
  const checkProps= useLocation()
  const [inputValue,setInputValue]=useState("")
  useEffect(()=>{
    setInputValue(checkProps.state.searchInput)
  },[])
  
  
  return (
    <div>
    <Container>
      <ApiPage inputValue={inputValue}/>
      <h1>{inputValue}</h1>
      <h2>CloseFacility 페이지</h2>
    </Container>
    </div>
  );
};

export default CloseFacility;