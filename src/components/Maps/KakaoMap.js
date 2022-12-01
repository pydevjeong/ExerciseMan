/* global kakao */
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useLocation } from "react-router-dom";

function KaKaoMap({ myGeo }) {
  const [points, setPoints] = useState({});

  const [info, setInfo] = useState();
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState();
  const [location, setLocation] = useState([]);
  const locationState = useLocation();

  useEffect(() => {
    setPoints(myGeo);
  }, [myGeo]);
// console.log(points);
  useEffect(() => {
    setLocation(locationState.state);
  }, [locationState]);

  // useEffect(()=>{
  //   navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
  //     setCoord({lat:latitude,lng:longitude})
  //   })
  // },[])

  //여기에 map이 로딩되기전에 loading 컴포넌트가 하나 있었으면 하고, 로딩 안됬을때 에러 컴포넌트도 만들예정
  useEffect(() => {
    if (!map) return;
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(location, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해 LatLngBounds 객체에 좌표를 추가
        const bounds = new kakao.maps.LatLngBounds();
        let markers = [];

        for (var i = 0; i < data.length; i++) {
          console.log(data[i])
          markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].place_name,
          });
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        setMarkers(markers);

        map.setBounds(bounds);
      }
    });
  }, [location, map]);

  console.log(info)

  return (
    <Map //center부분 수정예정(?)
      center={{
        lat: 37.566826,
        lng: 126.9786567,
      }}
      style={{
        width: "100%",
        height: "30rem",
      }}
      level={5}
      onCreate={setMap}
    >
      {markers.map((marker) => (
        <MapMarker
          key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
          position={marker.position}
          onClick={() => setInfo(marker)}
        >
          {info && info.content === marker.content && (
            <div style={{ color: "#000" }}>
              <span>{marker.content}</span>
              </div>
          )}
        </MapMarker>
      ))}
    </Map>
  );
}

export default KaKaoMap;
