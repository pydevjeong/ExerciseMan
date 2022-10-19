import React, { useEffect, useState } from "react";
import axios from "axios";
import XMLParser from "react-xml-parser";
import PublicFacility from "../SubPage/PublicPage/PublicFacility";
import { Container } from "@mui/system";
import PublicFacilityCard from "../SubPage/PublicPage/PublicFacilityCard";

const WholeSportsAPI = () => {
  const [wholeData, setWholeData] = useState([]);
  const url = `https://openapi.gg.go.kr/PubPhstFtM?KEY=${process.env.REACT_APP_GYM_API}`;
  let makeData=[]

  const fetchDatas = async () => {
    try {
      const response = await axios.get(url);
      // 성남시에 있는 헬스장 데이터를 불러 오는데 문제 없음
      let xml = new XMLParser().parseFromString(response.data);
      // console.log(xml) 여기도 문제없음
      let dataChild = xml.children;
      setWholeData(dataChild);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchDatas()
    // console.log(wholeData)
  }, []);

  makeData=wholeData.map((e)=>{
    return e;
  })
  makeData.shift()

  return (
  <div>
    {/* <PublicFacility/> */}
    <PublicFacilityCard makeData={makeData}/>
  </div>
  );
};

export default WholeSportsAPI;
