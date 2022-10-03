import React, { useEffect, useState } from 'react';
import {} from '@mui/material';
import KaKaoMap from './KakaoMap';
import MyGeolocation from './MyGeolocation';
// import KaKaoAPI from './KaKaoAPI';
import ApiTest from './ApiTest';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import SearchIcon from '@mui/icons-material/Search';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import { Link } from 'react-router-dom';

const MapPage = () => {
  const [inputLoaction,setInputLoaction] =useState([])
  
  const setLocation=(e)=>{
    setInputLoaction(e.target.value);
  }

  return (
    <>
    <div>
      <h1>검색</h1>
      <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MyLocationIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="검색하기"
        inputProps={{ 'aria-label': 'search' }}
        onChange={setLocation}
        />
      <Link to='/location' state={inputLoaction}>
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      </Link>
    </Paper>
    </div>
    <KaKaoMap/>
    {/* <MyGeolocation/> */}
    </>
  );
};

export default MapPage;
