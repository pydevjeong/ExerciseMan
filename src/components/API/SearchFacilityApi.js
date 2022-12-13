import React, { useState, useEffect } from "react";
import axios from "axios";
import XMLParser from "react-xml-parser";
import SearchedNearFacil from "../SubPage/GymPage/SearchedNearFacil";
import { Divider, Grid } from "@mui/material";
import { MdGpsFixed } from "react-icons/md";
import Pagination from "./../../utils/Pagination";
import bodysen from "../../img/gymImg/bodysen.jpg";
import fitnessbm from "../../img/gymImg/fitnessbm.jpg";
import gorilla from "../../img/gymImg/gorilla.jpg";
import gymline from "../../img/gymImg/gymline.jpg";
import roy from "../../img/gymImg/roy.jpeg";
import sgfit from "../../img/gymImg/sgfit.jpg";
import skyview from "../../img/gymImg/skyview.jpg";


function SearchFacilityApi(props) {
  let makeData = [];
  let findGym = [];
  const [datas, setDatas] = useState([]);
  const [inputValue, setInputValue] = useState(null);
  const [checkInputValue, setCheckInputValue] = useState(false);
  const [sortedData, setSortedData] = useState([]);
  const [gymLen, setGymLen] = useState(0);

  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const gymApi = process.env.REACT_APP_GYM_API;

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
    makeData = datas.map((e) => {
      return e.children;
    });
    if (makeData.length > 3) {
      makeData.shift(); 
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
      console.log("setApidata에서 에러");
    }
  }
  useEffect(() => {
    if (props.inputValue.length !== 0) {
      setInputValue(props.inputValue);
    }
    if (inputValue !== undefined) {
      setCheckInputValue(true);
    }
    fetchDatas();
  }, [inputValue, props.inputValue]);
  useEffect(() => {
    if (datas.length > 3) {
      setApiDatas();
    }
  }, [datas]);
  useEffect(() => {
    if (makeData.length > 3) {
      setSortedData(findGym);
      setLimit(7);
      setGymLen(findGym.length);
    }
  }, [findGym, makeData]);

  const gridInner = {
    marginTop: "5px",
    marginBottom: "10%",
  };
  const dividerInner = {
    display: "flex",
    marginTop: "5px",
    justifyContent: "space-between",
    alignContent: "center",
  };
  const loc = {
    display: "block",
    marginBottom: "10px",
  };
  const loc_buttons = {
    display: "block",
    marginTop: "25px",
  };
  const gymPicture = [
    gorilla,
    skyview,
    gymline,
    bodysen,
    sgfit,
    fitnessbm,
    roy,
  ];
  const vid = [
    "https://www.youtube.com/embed/d6aMZJuX3iE",
    "https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=0090E8EEA4C1DA1C274BBE24178CA35F9F97&outKey=V1288a230540734a5735958ab75ceedc4f49e9c864afe4baef7e758ab75ceedc4f49e&width=544&height=306",
    "https://youtube.com/embed/52sc6ISAELI",
    "https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=666E13F1E51B2DBFE2F709A3F819B57C87EA&outKey=V123700907bf764974b2d8880c6dfa2b1982a801b8fcea028cb4a8880c6dfa2b1982a&width=544&height=306",
    "https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=0B5B819D37DAAD7E788A57707F7CE007402B&outKey=V1233d041ab9daa4a13c51c3f8d3389272672fe95fdfb9f556c131c3f8d3389272672&width=544&height=306",
    "https://youtube.com/embed/52sc6ISAELI",
    "https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=B728128176A54C779B46E1383F70683C6D91&outKey=V12831de5bf0d311e19454aaac45aa20d9c99a2d66d757d7bba184aaac45aa20d9c99&width=1280&height=720",
    "https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=F2CA471F227CB2BB2D8C072B600516E83876&outKey=V128cb614a10ae39107081496db793ab90f7808612849055979821496db793ab90f78&width=544&height=306",
    "https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=8B6E6DE7D278694299D392340F6CAFFC603A&outKey=V126f745200a0ce566834af329195e68f20cc716e03c463c45a01af329195e68f20cc&width=544&height=306",
    "https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=65CDC5716BD9718E531166EFFC7E2F1E8492&outKey=V1252a100cac739b46f2a59498e28e4722ca9955e97995715306c59498e28e4722ca9&width=544&height=306",
  ];
  return (
    <>
      <div style={gridInner}>
        <Divider />
        <div style={dividerInner}>
          <div style={loc}>
            <p style={{ marginTop: "10px" }}>홈 {">"} 내 주변 운동시설</p>
            <MdGpsFixed cursor={"pointer"} />
            <span>성남시</span>
          </div>
          <div style={loc_buttons}>
            <button>재설정</button>
            <button>위치지정</button>
          </div>
        </div>
        <Divider />
      </div>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {sortedData.slice(offset, offset + limit).map((data, idx) => (
          <SearchedNearFacil
            facility_id={data.facilityId}
            key={data.facilityId}
            name={data.name}
            location={data.location}
            tel={data.tel}
            gymPicture={gymPicture[idx]}
            vid={vid[idx]}
          />
        ))}
      </Grid>
      <Pagination total={gymLen} limit={limit} page={page} setPage={setPage} />
    </>
  );
}
export default SearchFacilityApi;
