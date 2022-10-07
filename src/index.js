import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import MainPage from "./components/MainPage/MainPage";
import MapPage from "./components/Maps/MapPage";
import MainCommunity from "./components/Community/MainCommunity";
import ContactUs from "./components/SubPage/ContactUs";
import BookingPopup from "./components/SubPage/BookingPopup";

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
reportWebVitals();
