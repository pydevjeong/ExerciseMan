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
import { useState } from "react";
import UserPage from "../UserPage/UserPage";

const icons = [
  {
    icon: <SportsBasketballIcon fontSize="inherit" color="inherit" />,
    link: "/basketball",
  },
  {
    icon: <SportsSoccerOutlinedIcon fontSize="inherit" />,
    link: "/soccer",
  },
  {
    icon: <SportsTennisOutlinedIcon fontSize="inherit" />,
    link: "/badminton",
  },
  {
    icon: <FitnessCenterOutlinedIcon fontSize="inherit" />,
    link: "/gym",
  },
  {
    icon: <AddLocationAltOutlinedIcon fontSize="inherit" />,
    link: "/location",
  },
];
// 코드 더 깔끔하게 만들방법 찾으면 map으로 사용]

const Header = () => {
  const [userIsLogined,setUserIsLogined]=useState(false)

  return (
    <Container style={{ marginTop: "5%" }} maxWidth="lg">
      <div className={styles.navlink}>
        { userIsLogined ?
           <UserPage/> :
        <Link className={styles.links} to="/login">
          로그인
        </Link>
        }
        { userIsLogined ?
        <Link className={styles.links} to="/register">
          회원가입
        </Link>
        : ''
        }
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
            운동人
          </Link>
          {/* 새로고침되게 해야함 */}
        </div>
        <div className={styles.search_container}>
          <CustomizedInputBase />
        </div>
        <div className={styles.icon_contier}>
          {icons.map((item, idx) => (
            <Link key={idx} className={styles.icon_links} to={item.link}>
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Header;
