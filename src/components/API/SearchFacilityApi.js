import React, { useState, useEffect } from "react";
import axios from "axios";
import XMLParser from "react-xml-parser";
// import CloseFacility from "./CloseFacility";
import SearchedNearFacil from "../SubPage/GymPage/SearchedNearFacil";
import { imageSearch, blogSearch } from "./KaKaoSearchAPI/KakaoSearchApi";
import CardContainer from "../SubPage/GymPage/CardContainer";
import ErrorLoadingPage from "../Error/ErrorLoadingPage";
import ErrorPage from "../Error/ErrorPage";
import { Divider, Grid } from '@mui/material';
import { Container } from '@mui/material';
import Header from './../Layout/Header/Header';
import {MdGpsFixed} from 'react-icons/md'
import Pagination from './../../utils/Pagination';

  // const seongNam=41130
  // const regex=/name/gi
  // SIGUN_CD하드코딩 된걸 입력값에 따라서 지역코드가 나타나게 해야함
  // ex) 검색에 성남시 헬스장 -> 41130(성남 코드)

// API q 커스텀 훅으로 만들어야함
function SearchFacilityApi(props) {
  
  let makeData = [];
  let findGym = [];
  const [datas, setDatas] = useState([]);
  const [inputValue, setInputValue] = useState(null);
  const [checkInputValue, setCheckInputValue] = useState(false);
  const [apiFectched, setApiFectched] = useState(false);
  const [sortedData, setSortedData] = useState([]);
  const [gymLen,setGymLen]=useState(0)

  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const gymApi = process.env.REACT_APP_GYM_API;
  // const url = `https://openapi.gg.go.kr/PhysicaFitnessTrainingPlace?KEY=${gymApi}&TYPE=xml&SIGUN_NM=${
  //   checkInputValue ? inputValue : "성남시"
  // }`;

  const fetchDatas = async () => {
    const url = `https://openapi.gg.go.kr/PhysicaFitnessTrainingPlace?KEY=${gymApi}&TYPE=xml&SIGUN_NM=${inputValue}`;
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
  async function setApiDatas() {
    makeData =datas.map((e) => {
      return e.children;
    });
    if (makeData.length > 3) {
      makeData.shift(); //쓸모없는 첫번째 배열부분 자르기
      // console.log(makeData) 여기도 Array로 정상적으로 출력후 쓸모없는 부분 잘린거 확인
      //아래서 arr[2].value 하면 시설이름이 나옴
      makeData.map((arr) => {
        if (arr[5].value !== "폐업") {
          findGym.push({
            name: arr[2].value,
            facilityId: arr[3].value,
            location: arr[19].value,
            tel: arr[11].value,
          });
        }
        return findGym;
      });
    } else {
      console.log('setApidata에서 에러');
    }
  }
  useEffect(() => {
    if (props.inputValue.length !== 0) {
      setInputValue(props.inputValue);
    }
    if(inputValue!==undefined){
      setCheckInputValue(true);
    }
    fetchDatas()
  }, [inputValue, props.inputValue]);
  useEffect(()=>{
    if(datas.length>3){
      setApiDatas()
    }
  },[datas])
  useEffect(()=>{
    if(makeData.length>3){
      setSortedData(findGym)
      setLimit(7)
      setGymLen(findGym.length)
    }
  },[findGym, makeData])

  // const [gymData, setGymData] = useState([])

  // const imageSearchHandler = async () => {
  //   let params;
  //   if (findGym.length !== 0) {
  //     params = {
  //       query: `${findGym[0].name}`,
  //       sort: "accuracy",
  //       page: 1,
  //       size: 20,
  //     };
  //   }
  //   const { data } = await imageSearch(params);
  //   // console.log(data);
  // };
  // useEffect(() => {
  //   if (findGym.length > 3) imageSearchHandler();
  // }, [findGym]);

  //item.name==="BIZPLC_NM"에서 value(시설이름) item.name==="BSN_STATE_NM"에서 value가 영업중인것
  //item.name==="REFINE_ROADNM_ADDR" value(도로명주소)
  //item.name==="LOCPLC_FACLT_TELNO" value(전화번호)
  // REFINE_WGS84_LOGT , REFINE_WGS84_LAT 위도 경도
  const gridInner={
    marginTop:"5px",
    marginBottom:"10%",
  }
  const dividerInner={
    display:"flex",
    marginTop:"5px",
    justifyContent: "space-between",
    alignContent: "center"
  }
const loc={
  display:"block",
  marginBottom:'10px'
}
const loc_buttons={
  display:"block",
  marginTop:"25px"
}
  return (
    <>
    <div style={gridInner}>
      <Divider/>
      <div style={dividerInner}>
        <div style={loc}>
      <p style={{marginTop:"10px"}}>홈 {">"} 내 주변 운동시설</p>
      <MdGpsFixed cursor={"pointer"}/><span>성남시</span>
      </div>
      <div style={loc_buttons}>
        <button>재설정</button>
        <button>위치지정</button>
      </div>
      </div>
      <Divider/>
      </div>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {
      sortedData
      .slice(offset, offset + limit)
      .map((data, idx) => (
        <SearchedNearFacil
          key={idx}
          name={data.name}
          location={data.location}
          tel={data.tel}
        />
      ))
      }
    </Grid>
    <Pagination total={gymLen} limit={limit} page={page} setPage={setPage} />
    </>
  );
}
export default SearchFacilityApi;
