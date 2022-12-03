import React, { useState } from "react";
import CommunityCategory from "../Community/CommunityCategory";
import Layout from "../Layout/Layout";
import ApiPage from "../API/ApiPage";
import Notice from "../SubPage/Notice";
import SliderBanner from "./SliderBanner";
import "./MainPage.css";
import { Container } from "@mui/material";
import ErrorLoadingPage from "../Error/ErrorLoadingPage";
import CommunityCard from "../Community/CommunityCard";
import WholeSportsAPI from "../API/WholeSportsAPI";



const MainPage = () => {
  const [apiFectched,setApiFectched]=useState(true)

  return (
    <Layout>
      <Notice />
      <SliderBanner />
      <Container>
        <h1>스포츠 카테고리</h1>
      </Container>
      <div className="community_category123" >
        <CommunityCategory />
      </div>
      <Container>
      <h1 style={{position:"absolute",color:"#fff",zIndex:99,top:"150%"}}>가까운 헬스장</h1>
      </Container>
      <div 
      style={{
          position:'absolute',
          width: "100vw",
          height: "15vh",
          marginLeft: "calc(-50vw + 50%)",
          backgroundColor: "#9B8BFF",
          overflow: "hidden",
          paddingBottom: "3%",
          top:"88rem",
          left:0,
          right:0
        }}
      >
      </div>
      {apiFectched ? <ApiPage /> : <ErrorLoadingPage/>}
      <Container style={{marginTop:"80px"}}>
      <h1>커뮤니티</h1>
      </Container>
      <div style={{marginBottom:"100px"}}>
      <CommunityCard/>
      </div>
      <Container >
      <h1 style={{position:"absolute",color:"#fff",zIndex:99,top:"225%"}}>공공시설</h1>
      <div
        style={{
          position:'absolute',
          width: "100vw",
          height: "25vh",
          marginLeft: "calc(-50vw + 50%)",
          backgroundColor: "#9B8BFF",
          overflow: "hidden",
          paddingBottom: "3%",
          top:"132rem",
          left:0,
          right:0
        }}
        >
          </div>
      </Container>
      <div>
      <WholeSportsAPI/>
      </div>
      
    </Layout>
  );
};

export default MainPage;
