import React, { useState, useEffect } from "react";
import axios from "axios";
import XMLParser from "react-xml-parser";
import { Container } from "@mui/system";
// import CloseFacility from "./CloseFacility";
import NearFacilityList from "./NearFacilityList";
import ErrorPage from "../Error/ErrorPage";

// API q 커스텀 훅으로 만들어야함
function ApiPage(props) {
  const [datas, setDatas] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [checkInputValue, setCheckInputValue] = useState(false);
  const gymApi=process.env.REACT_APP_GYM_API
  const [apiFectched,setApiFectched]=useState(false)
  
  const [limit, setLimit] = useState(10);
  
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  /* 
  고쳐야 하는 로직 -> 검색하고 난후 const [inputValue, setInputValue] = useState("");
  초기화가 되어있는상태 -> checkInputValue가 당연히 false -> 부천시만 나옴
  어떻게 수정할건지?
  아마도 api를 불러오는 시간을 따로 설정해서 완전히 state가 초기화 되는것을 방지?
  */
  useEffect(() => {
    setInputValue(props.inputValue);
    if (inputValue === "성남시") {
      setCheckInputValue(true);
    } else {
      console.log("안돼");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let makeData = [];
  let findGym = [];
  // const [gymData, setGymData] = useState([])

  // const seongNam=41130
  // const regex=/name/gi
  // SIGUN_CD하드코딩 된걸 입력값에 따라서 지역코드가 나타나게 해야함
  // ex) 검색에 성남시 헬스장 -> 41130(성남 코드)

  const url = `https://openapi.gg.go.kr/PhysicaFitnessTrainingPlace?KEY=${gymApi}&TYPE=xml&SIGUN_NM=${checkInputValue ? inputValue : "부천시"}`;
  
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
  useEffect(() => {
    fetchDatas();
  
  }, []);

  // console.log(datas) datas에 정상적으로 담김

  makeData = datas.map((e) => {
    if(e.value.includes("ERROR")){
      console.log("ERROR 발생")
      setApiFectched(false)
      return ["Error"];
    }
    else{
      console.log("API Fetched Well")
      setApiFectched(true)
      return e.children;
    }
  });


  if(apiFectched){
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
  }
  else{
    console.log("value 에러")
    console.log(makeData)
  }

  //item.name==="BIZPLC_NM"에서 value(시설이름) item.name==="BSN_STATE_NM"에서 value가 영업중인것
  //item.name==="REFINE_ROADNM_ADDR" value(도로명주소)
  //item.name==="LOCPLC_FACLT_TELNO" value(전화번호)
  // REFINE_WGS84_LOGT , REFINE_WGS84_LAT 위도 경도
  return (
    <Container>
      { apiFectched ?
      <Container>
      <h1>API페이지 / 가장 가까운 시설 보여주기</h1>
      {findGym.slice(offset,offset+limit).map((data, idx) => (
        <NearFacilityList
          key={idx}
          name={data.name}
          location={data.location}
          tel={data.tel}
        />
      ))} 
      </Container>
      : 
      <ErrorPage/>
      }
    </Container>
  );
}
export default ApiPage;
