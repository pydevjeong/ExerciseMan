/* global kakao */
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";



function KakaoMap(){
  const mapRef = useRef()
  const [info, setInfo] = useState();
  const [points, setPoints] = useState([
    {lat: 33.452278, lng:126.567803},
    {lat: 33.452671, lng:126.574792},
    {lat: 33.451744, lng:126.572441},
  ])

  const bounds = useMemo(() => {
    const bounds = new kakao.maps.LatLngBounds();

    points.forEach(point => {
      bounds.extend(new kakao.maps.LatLng(point.lat, point.lng))
    });
    return bounds;
  }, [points])

  console.log(info);

  return (
    <>
      <Map // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: 33.450701,
          lng: 126.570667,
        }}
        style={{
          width: "100%",
          height: "450px",
        }}
        level={3} // 지도의 확대 레벨
        ref={mapRef}
      >
        {points.map(point => <MapMarker key={`${point.lat}-${point.lng}`} position={point} />)}
      </Map>
      <button
        onClick={() => {
          const map = mapRef.current
          if (map) map.setBounds(bounds)
        }}
      >
        지도 범위 재설정 하기
      </button>
      <button onClick={() => {
            const map = mapRef.current
            setInfo({
              center: {
                lat: map.getCenter().getLat(),
                lng: map.getCenter().getLng(),
              },
              level: map.getLevel(),
              typeId: map.getMapTypeId(),
              swLatLng: {
                lat: map.getBounds().getSouthWest().getLat(),
                lng: map.getBounds().getSouthWest().getLng(),
              },
              neLatLng: {
                lat: map.getBounds().getNorthEast().getLat(),
                lng: map.getBounds().getNorthEast().getLng(),
              },
            })
          }}>
            정보 가져 오기!
          </button>
    </>
  )
}

export default KakaoMap