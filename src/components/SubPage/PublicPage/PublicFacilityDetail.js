import { Container } from '@mui/system';
import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../Layout/Header/Header';

const PublicFacilityDetail = () => {
  const data=useLocation()
  let {name,city,location,zipCode}=data.state
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