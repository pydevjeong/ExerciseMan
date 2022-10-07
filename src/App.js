import "./App.css";
import SideSearch from "./components/SideSearch";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Layout from "./components/Layout/Layout";
import MainPage from "./components/MainPage/MainPage";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";

function App() {
  return (
    <div className="side">
      <Layout />
    </div>
  );
}

export default App;
