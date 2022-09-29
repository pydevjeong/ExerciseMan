import { Container } from '@mui/material';
import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const Layout = (props) => {
  return (
    <Container>
      <Header/>
        {props.children}
      <Footer/>
    </Container>
  );
};

export default Layout;