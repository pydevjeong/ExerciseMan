import React, { useState, useEffect } from 'react';
import axios from 'axios';
import XMLParser from 'react-xml-parser'
import KaKaoMap from './KakaoMap';

function ApiTest() {
  const [coordinate, setCoordinate] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const url=`https://openapi.gg.go.kr/PhysicaFitnessTrainingPlace?
  KEY=5b0d3a9a782b426691456ec012d45f50&TYPE=xml&SIGUN_CD=41130`

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setError(null);
        setCoordinate([]);
        setLoading(true);
        const response = await axios.get(url);
        let xml=new XMLParser().parseFromString(response.data)
        let setData=xml.children.map((item)=>item.children.filter((data)=>(
          data.name.includes('WGS84')
        )).map((val)=>val.value)
        );
        setCoordinate(setData); 
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, [url]);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  return (
    <KaKaoMap coordinate={coordinate}/>
  )
}
export default ApiTest;