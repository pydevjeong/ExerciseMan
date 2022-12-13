import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import CustomizedInputBase from "./InputSearch";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsTennisOutlinedIcon from "@mui/icons-material/SportsTennisOutlined";
import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";
import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";
import SportsSoccerOutlinedIcon from "@mui/icons-material/SportsSoccerOutlined";
import { Container } from "@mui/material";
import { useState,useEffect } from "react";
import logo from "../../../img/ourLogo.png";
import {getCookieToken} from '../../../storage/Cookie'

const icons = [
  {
    icon: <SportsBasketballIcon fontSize="inherit" color="inherit" />,
    link: "/basketball",
    name: "농구",
  },
  {
    icon: <SportsSoccerOutlinedIcon fontSize="inherit" />,
    link: "/soccer",
    name: "축구",
  },
  {
    icon: <SportsTennisOutlinedIcon fontSize="inherit" />,
    link: "/badminton",
    name: "배드민턴",
  },
  {
    icon: <FitnessCenterOutlinedIcon fontSize="inherit" />,
    link: "/gym",
    name: "헬스",
  },
  {
    icon: <AddLocationAltOutlinedIcon fontSize="inherit" />,
    link: "/location",
    name: "지도",
  },
];
// 코드 더 깔끔하게 만들방법 찾으면 map으로 사용]

const Header = () => {
  const [userIsLogined, setUserIsLogined] = useState(false);
  useEffect(()=>{
    if(getCookieToken()!==undefined){
      if(getCookieToken().length!==0){
        setUserIsLogined(true)
      }
    }
  },[])
  return (
    <Container style={{ marginTop: "5%" }} maxWidth="lg">
      <div className={styles.navlink}>
        {userIsLogined ? (
          <Link className={styles.links} to="/personalPage">
            마이페이지
          </Link>
        ) : (
          <Link className={styles.links} to="/login">
            로그인
          </Link>
        )}
        {userIsLogined ? (
          " "
        ) : (
          <Link className={styles.links} to="/register">
            회원가입
          </Link>
        )}
        <Link className={styles.links} to="/community">
          커뮤니티
        </Link>
        <Link className={styles.links} to="/contact_us">
          Contact
        </Link>
      </div>
      <div className={styles.second_container}>
        <div className={styles.main}>
          <Link className={styles.mainLink} to="/">
            <img className={styles.logoImg} src={logo} alt="" />
          </Link>
        </div>
        <div className={styles.search_container}>
          <CustomizedInputBase />
        </div>
        <div className={styles.icon_contier}>
          {icons.map((item, idx) => (
            <div key={idx} className={styles.inside_container}>
              <Link className={styles.icon_links} to={item.link}>
                {item.icon}
              </Link>
              <p className={styles.icon_name}>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Header;
