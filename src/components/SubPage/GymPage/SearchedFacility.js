import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SearchFacilityApi from '../../API/SearchFacilityApi';
import Header from './../../Layout/Header/Header';

const SearchedFacility = (props) => {
  const checkProps= useLocation()
  const [inputValue,setInputValue]=useState("")
  useEffect(()=>{
    setInputValue(checkProps.state.searchInput)
  },[checkProps.state.searchInput])
  
  
  return (
    <div>
    <Header/>
    <div>
    <Container>
      {
        inputValue.length > 0 ? 
        <SearchFacilityApi inputValue={inputValue}/>
        :
        <p>!</p>
      }
    </Container>
    </div>
    </div>
  );
};

export default SearchedFacility;