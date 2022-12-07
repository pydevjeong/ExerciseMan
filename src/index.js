import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import MainPage from "./components/MainPage/MainPage";
import MapPage from "./components/Maps/MapPage";
import MainCommunity from "./components/Community/MainCommunity";
import ContactUs from "./components/SubPage/ContactUs";
import BookingPopup from "./components/SubPage/BookingPopup";
import CloseFacility from "./components/SubPage/GymPage/CloseFacility";
import FindAccount from "./components/Auth/FindAccount/FindAccount";
import FacilityDetail from "./components/SubPage/GymPage/FacilityDetail";
import PublicFacilityDetail from "./components/SubPage/PublicPage/PublicFacilityDetail";
import WholeCommunity from "./components/Community/WholeCommunity";
import PersonalPage from "./components/Auth/PersonalPage";
import KakaoLogin from "./components/Auth/Login/KakaoLogin";

import store from './store';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import Logout from "./components/Auth/Logout/Logout";
import SearchedFacility from "./components/SubPage/GymPage/SearchedFacility";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/location",
    element: <MapPage />,
  },
  {
    path: "/community",
    // 커뮤니티에 대한 페이지 개발후 수정
    element: <WholeCommunity />,
  },
  {
    path: "/basketball",
    element: <MainCommunity />,
  },
  {
    path: "/baseball",
    element: <MainCommunity />,
  },
  {
    path: "/badminton",
    element: <MainCommunity />,
  },
  {
    path: "/soccer",
    element: <MainCommunity />,
  },
  {
    path: "/gym",
    element: <MainCommunity />,
  },
  {
    path: "/others",
    element: <MainCommunity />,
  },
  {
    path: "/contact_us",
    element: <ContactUs />,
  },
  {
    path: "/booking_popup",
    element: <BookingPopup />,
  },
  {
    path: "/closeFacilty",
    element: <CloseFacility />,
  },
  {
    path: "/searchedFacility",
    element: <SearchedFacility />,
  },
  {
    path: "/facilityDetail",
    element: <FacilityDetail />,
  },
  {
    path: "/findAccount",
    element: <FindAccount />,
  },
  {
    path: "/publicfacilityDetail",
    element: <PublicFacilityDetail />,
  },
  {
    path: "/personalPage",
    // 개인정보 페이지추가
    element: <PersonalPage />,
  },
  {
    path: "/auth/kakao/callback",
    // 카카오 로그인 만드는중
    element: <KakaoLogin />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CookiesProvider>
    <Provider store={store}>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </Provider>
  </CookiesProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
