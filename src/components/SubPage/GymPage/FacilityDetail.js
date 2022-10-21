import { Container } from "@mui/system";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../Layout/Header/Header";

const FacilityDetail = () => {
  // const params=useNavigate()
  const info = useLocation();
  console.log(info.state);
  const decode = decodeURI(info?.search);
  console.log(decode);
  return (
    <div>
      <Header />
      <Container>
        <div>
          <div>
            <h1>{info.state.name}</h1>
            <button>북마크</button>
          </div>
          <div>
            <h2>{info.state.location}</h2>
          </div>
          <button>공유버튼</button>
          <div>
            <h3>{info.state.tel}</h3>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FacilityDetail;
