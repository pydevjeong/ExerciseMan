import React from "react";
import CommunityCategory from "../Community/CommunityCategory";
import Layout from "../Layout/Layout";

import ApiPage from "../SubPage/ApiPage";
import Notice from "../SubPage/Notice";
import SliderBanner from "./SliderBanner";
import "./MainPage.css";
import { Container } from "@mui/material";

const MainPage = () => {
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
      <ApiPage />
    </Layout>
  );
};

export default MainPage;
