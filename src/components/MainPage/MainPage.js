import React from 'react';
import CommunityCategory from '../Community/CommunityCategory';
import Layout from '../Layout/Layout';
import Notice from '../SubPage/Notice';
import SliderBanner from './SliderBanner';

const MainPage = () => {
  return (
    <Layout>
        <Notice/>
        <SliderBanner/>
        <CommunityCategory/>
    </Layout>
  );
};

export default MainPage;