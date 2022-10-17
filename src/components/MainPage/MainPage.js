import React, { useState } from "react";
import CommunityCategory from "../Community/CommunityCategory";
import Layout from "../Layout/Layout";

import ApiPage from "../SubPage/ApiPage";
import Notice from "../SubPage/Notice";
import SliderBanner from "./SliderBanner";
import "./MainPage.css";
import { Container } from "@mui/material";
import ErrorLoadingPage from "../Error/ErrorLoadingPage";

const MainPage = () => {
  const [apiFectched,setApiFectched]=useState(false)
  //api fetching 되면 페이지가 나오게 만들어야함
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
    </Layout>
  );
};

export default MainPage;
