import React from 'react';
import {CssBaseline,Grid} from '@mui/material';
import KaKaoMap from './KakaoMap';
import MyGeolocation from './MyGeolocation';


const MapPage = () => {
  return (
    <>
    <KaKaoMap
      center={{
        // 지도의 중심좌표
        lat: 33.450701,
        lng: 126.570667,
      }}
      style={{
        // 지도의 크기
        width: "100%",
        height: "450px",
      }}
      level={3} // 지도의 확대 레벨
    />
    <MyGeolocation/>
    </>
  );
};

export default MapPage;