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
      <div className="community_category123">
        <CommunityCategory />
      </div>
      {apiFectched ? <ApiPage /> : <ErrorLoadingPage/>}
      <Container>
      <h1>커뮤니티</h1>
      </Container>
      <div>
      <CommunityCard/>
      </div>
      <Container>
      <h1>공공시설</h1>
      </Container>
      <div>
      {/* <PublicFacility/> */}
      {/* <PublicFacilityCard/> */}
      <WholeSportsAPI/>
      </div>
      
    </Layout>
  );
};

export default MainPage;
