import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'
import CustomizedInputBase from './GoogleSearch';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsTennisOutlinedIcon from '@mui/icons-material/SportsTennisOutlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import SportsSoccerOutlinedIcon from '@mui/icons-material/SportsSoccerOutlined';
import { Container } from '@mui/material';

// const icons=[
//   "SportsBasketballIcon",
//   "SportsTennisOutlinedIcon",
//   "FitnessCenterOutlinedIcon",
//   "AddLocationAltOutlinedIcon",
//   "SportsSoccerOutlinedIcon"
// 코드 더 깔끔하게 만들방법 찾으면 map으로 사용]

const Header = () => {

  return (
    <Container maxWidth='lg'>
      <div className={styles.navlink}>
        <Link className={styles.links} to='/login'>로그인</Link>
        <Link className={styles.links} to='/register'>회원가입</Link>
        <Link className={styles.links} to='/'>공지/이벤트</Link>
        <Link className={styles.links} to='/contact'>Contact</Link>
      </div>
      <div className={styles.second_container}>
        <div className={styles.main}>
          <Link className={styles.mainLink} to='/'>운동人</Link>{/* 새로고침되게 해야함 */}
        </div>
        <div className={styles.search_container}>
          <CustomizedInputBase/>
        </div>
        <div className={styles.icon_contier}>
          <Link className={styles.links} to='/soccer'><SportsSoccerOutlinedIcon/></Link>
          <Link className={styles.links} to='/tennis'><SportsTennisOutlinedIcon/> </Link>
          <Link className={styles.links} to='/basket'><SportsBasketballIcon/> </Link>
          <Link className={styles.links} to='/gym'><FitnessCenterOutlinedIcon/></Link>
          <Link className={styles.links} to='/map'><AddLocationAltOutlinedIcon/></Link>
        </div>
      </div>
    </Container>
  );
};

export default Header;