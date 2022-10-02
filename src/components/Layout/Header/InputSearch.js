import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

export default function CustomizedInputBase() {
  const [searchInput,setSearchInput]=useState()
  const searchBtnClicked=(e)=>{
    e.preventDefault();
  }
  const inputSearch=(e)=>{
    setSearchInput(e.target.value)
  }
  console.log(searchInput);
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, }}
    >
      {/* <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton> */}
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="운동시설 검색하기"
        inputProps={{ 'aria-label': '운동 시설 검색하기' }}
        onChange={inputSearch}
      />
      <IconButton onClick={searchBtnClicked} type="button" sx={{ p: '10px' }} aria-label="search">
       <SearchIcon />
      </IconButton>
    </Paper>
  );
}
