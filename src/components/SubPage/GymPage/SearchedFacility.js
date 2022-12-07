import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SearchFacilityApi from '../../API/SearchFacilityApi';
import ErrorLoadingPage from '../../Error/ErrorLoadingPage';

const SearchedFacility = (props) => {
  const checkProps= useLocation()
  const [inputValue,setInputValue]=useState("")
  useEffect(()=>{
    setInputValue(checkProps.state.searchInput)
  },[checkProps.state.searchInput])
  
  
  return (
    <div>
    <Container>
      {
        inputValue.length > 0 ? 
        <SearchFacilityApi inputValue={inputValue}/>
        :
        <p>!</p>
      }
      <h1>{inputValue}</h1>
      <h2>SearchFacilityApi 페이지</h2>
    </Container>
    </div>
  );
};

export default SearchedFacility;