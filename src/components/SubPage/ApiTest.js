import React, { useState, useEffect } from 'react';
import axios from 'axios';
import XMLParser from 'react-xml-parser'
import { Container } from '@mui/system';

function ApiTest(props) {
  const [datas, setDatas] = useState([]);
  const [inputValue,setInputValue] = useState('');
  // const regex=/name/gi
  const url=`https://openapi.gg.go.kr/PhysicaFitnessTrainingPlace?KEY=5b0d3a9a782b426691456ec012d45f50&TYPE=xml&pIndex=1&pSize=20&SIGUN_CD=41130`
  let makeData=[]
  let findGym=[]
  let gymName=[]
  useEffect(() => {
    setInputValue(props.inputValue)
    fetchDatas()
  }, []);
  const fetchDatas = async () => {
    try {
      const response = await axios.get(url);
      let xml=new XMLParser().parseFromString(response.data)
      let dataChild=xml.children
      setDatas(dataChild); 
    } catch (e) {
      console.log(e);
    }
  };

  makeData=datas.map((e)=>{return e.children})
  findGym=makeData.map((e)=>{
    e.map((i)=>console.log(i))
  })
  console.log(findGym)
  return (
    <Container>
      <h1>API페이지</h1>
      <ul>
      {/* {datas} */}
      </ul>
    </Container>
  )
}
export default ApiTest;