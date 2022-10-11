import React, { useState, useEffect } from "react";
import axios from "axios";
import XMLParser from "react-xml-parser";
import { Container } from "@mui/system";
import CloseFacility from "./CloseFacility";
import NearFacilityList from "./NearFacilityList";

function ApiTest(props) {
  const [datas, setDatas] = useState([]);
  const [inputValue, setInputValue] = useState("");
  // const [gymData, setGymData] = useState([])
  // const seongNam=41130
  // const regex=/name/gi
  // SIGUN_CD하드코딩 된걸 입력값에 따라서 지역코드가 나타나게 해야함
  // ex) 검색에 성남시 헬스장 -> 41130(성남 코드)

  const url = `https://openapi.gg.go.kr/PhysicaFitnessTrainingPlace?KEY=5b0d3a9a782b426691456ec012d45f50&TYPE=xml&SIGUN_NM=성남시`;
  let makeData = [];
  let findGym = [];
  useEffect(() => {
    setInputValue(props.inputValue);
    fetchDatas();
  }, []);

  const fetchDatas = async () => {
    try {
      const response = await axios.get(url);
      // 성남시에 있는 헬스장 데이터를 불러 오는데 문제 없음
      let xml = new XMLParser().parseFromString(response.data);
      // console.log(xml) 여기도 문제없음
      let dataChild = xml.children;
      setDatas(dataChild);
    } catch (e) {
      console.log(e);
    }
  };
  // console.log(datas) datas에 정상적으로 담김
  makeData = datas.map((e) => {
    return e.children;
  });
  makeData.shift(); //쓸모없는 첫번째 배열부분 자르기

  // console.log(makeData) 여기도 Array로 정상적으로 출력후 쓸모없는 부분 잘린거 확인
  //아래서 arr[2].value 하면 시설이름이 나옴
  makeData.map((arr) => {
    if (arr[5].value !== "폐업") {
      findGym.push({
        name: arr[2].value,
        location: arr[19].value,
        tel: arr[11].value,
      });
    }
  });
  // console.log(findGym);
  //item.name==="BIZPLC_NM"에서 value(시설이름) item.name==="BSN_STATE_NM"에서 value가 영업중인것
  //item.name==="REFINE_ROADNM_ADDR" value(도로명주소)
  //item.name==="LOCPLC_FACLT_TELNO" value(전화번호)
  // REFINE_WGS84_LOGT , REFINE_WGS84_LAT 위도 경도
  return (
    <Container>
      <h1>API페이지</h1>
      {findGym.map((data, idx) => (
        <NearFacilityList key={idx} name={data.name} location={data.location} tel={data.tel}/>
      ))}
    </Container>
  );
}
export default ApiTest;
