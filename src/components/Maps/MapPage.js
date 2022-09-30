import React from 'react';
import {CssBaseline,Grid} from '@mui/material';
import KaKaoMap from './KakaoMap';


const MapPage = () => {
  return (
    <>
      <CssBaseline/>
      <Grid container spacing={3} style={{width:'100%'}}>
        <Grid item xs={12} md={4}>
          <KaKaoMap/>
        </Grid>
      </Grid>
    </>
  );
};

export default MapPage;