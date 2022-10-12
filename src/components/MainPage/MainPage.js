import React from 'react';
import CommunityCategory from '../Community/CommunityCategory';
import Layout from '../Layout/Layout';

import ApiPage from '../SubPage/ApiPage'
import Notice from '../SubPage/Notice';
import SliderBanner from './SliderBanner';

const MainPage = () => {
  return (
    <Layout>
        <Notice/>
        <SliderBanner/>
        <CommunityCategory/>
        <ApiPage/>
    </Layout>
  );
};

export default MainPage;