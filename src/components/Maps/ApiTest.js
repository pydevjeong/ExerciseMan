import React, { useState, useEffect } from 'react';
import axios from 'axios';
import XMLParser from 'react-xml-parser'

function ApiTest() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const url=`https://openapi.gg.go.kr/PhysicaFitnessTrainingPlace?
  KEY=5b0d3a9a782b426691456ec012d45f50&TYPE=xml
  &SIGUN_CD=41130&BSN_STATE_NM=영업중`
  console.log(users);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setUsers(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get(url);
        let xml=new XMLParser().parseFromString(response.data)
        setUsers(xml.children); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, [url]);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return null;
  return (
    <div><p>dqw</p></div>
  )
}
export default ApiTest;