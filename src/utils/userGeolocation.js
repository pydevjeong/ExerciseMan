import { useState, useEffect } from "react";

const useCurrentLocation = (options = {}) => {
  // location 정보 저장
  const [location, setLocation] = useState();
  // 에러 메세지 저장
  const [error, setError] = useState();

  // Geolocation의 `getCurrentPosition` 메소드에 대한 성공 callback 핸들러
  const handleSuccess = (pos) => {
    const { latitude, longitude } = pos.coords;

    setLocation({
      latitude,
      longitude,
    });
  };

  // Geolocation의 `getCurrentPosition` 메소드에 대한 실패 callback 핸들러
  const handleError = (error) => {
    setError(error.message);
  };

  useEffect(() => {
    const { geolocation } = navigator;

    // 사용된 브라우저에서 지리적 위치(Geolocation)가 정의되지 않은 경우 오류로 처리합니다.
    if (!geolocation) {
      setError("Geolocation is not supported.");
      return;
    }

    // Geolocation API 호출
    geolocation.getCurrentPosition(handleSuccess, handleError, options);
  }, [options]);

  return { location, error };
};

export default useCurrentLocation;

// 컴포넌트에서 사용할 때
// import useCurrentLocation from "../../utils/userGeolocation";

// const geolocationOptions = {
//   enableHighAccuracy: true,
//   timeout: 1000 * 60 * 1, // 1 min (1000 ms * 60 sec * 1 minute = 60 000ms)
//   maximumAge: 1000 * 3600 * 24, // 24 hour
// }

// const { location, cancelLocationWatch, error } = useCurrentLocation(geolocationOptions);
// useEffect(() => {
//   if (!location) return;
  
//   // 3초후에 watch 종료
//   setTimeout(() => {
//     cancelLocationWatch();
//   }, 3000);
// }, [])

// console.log(location)