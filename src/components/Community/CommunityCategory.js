import { Container } from "@mui/material";
import React from "react";
import SportsCard from "./SportsCard";

// const sportsImgs = [
//   {
//     img: "/src/img/basketball.jpg",
//     name: "농구",
//     link: "/basketball",
//   },
//   {
//     img: "/src/img/baseball.jpg",
//     name: "야구",
//     link: "/baseball",
//   },
//   {
//     img: "/src/img/badminton.jpg",
//     name: "배드민턴",
//     link: "/badminton",
//   },
//   {
//     img: "/src/img/gym.jpg",
//     name: "헬스",
//     link: "/gym",
//   },
//   {
//     img: "/src/img/soccer.jpg",
//     name: "달리기",
//     link: "/soccer",
//   },
//   {
//     img: "/src/img/others.jpg",
//     name: "기타",
//     link: "/others",
//   },
// ];

const CommunityCategory = (props) => {
  return (
    <Container>
      <SportsCard />
    </Container>
  );
};

export default CommunityCategory;
