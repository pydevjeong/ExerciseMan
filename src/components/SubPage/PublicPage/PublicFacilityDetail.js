import { Container } from '@mui/system';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../Layout/Header/Header';
import { webSearch,blogSearch,imageSearch,videoSearch } from '../../API/KaKaoSearchAPI/KakaoSearchApi';

const PublicFacilityDetail = () => {
  const data=useLocation()
  let {name,city,location,zipCode}=data.state

  useEffect(()=>{
    webSearchHandler()
  },[])
  const webSearchHandler = async()=>{
    const params={
      query:{name},
      sort:"accuracy",
      page:1,
      size:10
    };
    const {data}=await imageSearch(params)
    console.log(data)
  }
  return (
    <div>
      <Header/>
      <Container>
        <div>
          <p>{name}</p>
          <p>{city}</p>
          <p>{location}</p>
          <p>{zipCode}</p>
        </div>
      </Container>
    </div>
  );
};

export default PublicFacilityDetail;