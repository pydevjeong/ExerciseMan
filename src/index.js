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
import { Provider } from "react-redux";
import FacilityDetail from "./components/SubPage/GymPage/FacilityDetail";
import PublicFacilityDetail from "./components/SubPage/PublicPage/PublicFacilityDetail";
import WholeCommunity from "./components/Community/WholeCommunity";




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
    path: "/register",
    element: <Register />,
  },
  {
    path: "/location",
    element: <MapPage />,
  },
  {
    path:"/community",
    // 커뮤니티에 대한 페이지 개발후 수정
    element: <WholeCommunity/>
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
    path:"/closeFacilty",
    element:<CloseFacility/>
  },
  {
    path:"/facilityDetail",
    element:<FacilityDetail/>
  },
  {
    path:"/findAccount",
    element:<FindAccount/>
  },
  {
    path:"/publicfacilityDetail",
    element:<PublicFacilityDetail/>
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
